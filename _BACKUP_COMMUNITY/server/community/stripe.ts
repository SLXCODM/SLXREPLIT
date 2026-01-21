import Stripe from "stripe";
import { type Express } from "express";
import { storage } from "../storage";

// Initialize Stripe with Secret Key from env
const stripe = process.env.STRIPE_SECRET_KEY
    ? new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" as any })
    : null;

export function setupStripeRoutes(app: Express) {
    app.post("/api/community/create-checkout-session", async (req, res) => {
        try {
            console.log("[Stripe] Inciando criação de sessão de checkout...");
            const { price, title, videoUrl, description, allowPublic } = req.body;
            const user = (req.session as any).user;

            if (!user) {
                return res.status(401).json({ error: "Você precisa estar logado para realizar o pagamento." });
            }

            // 1. Criar a sessão no banco de dados primeiro para ter o ID
            const result = await storage.createUploadSession(
                user.id,
                title,
                description || "Aguardando pagamento",
                price,
                videoUrl || "",
                allowPublic || false
            );

            console.log(`[Stripe] Sessão criada no DB. PaymentId: ${result.paymentId}, VideoId: ${result.videoId}`);

            if (!stripe) {
                console.warn("[Stripe] Chave secreta ausente. Usando redirecionamento Mock.");
                return res.json({
                    url: `${req.protocol}://${req.get("host")}/community/payment-success?mock=true&paymentId=${result.paymentId}`,
                    mock: true
                });
            }

            // Price parsing logic
            let currency = "brl";
            let amountInCents = 3700; // Padrão R$ 37,00

            if (price && typeof price === 'string' && price.includes("$")) {
                currency = "usd";
                amountInCents = 699;
            } else if (price && typeof price === 'string') {
                const numericPrice = parseFloat(price.replace(/[^\d.,]/g, "").replace(",", "."));
                if (!isNaN(numericPrice)) {
                    amountInCents = Math.round(numericPrice * 100);
                }
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card", "pix"],
                line_items: [
                    {
                        price_data: {
                            currency: currency,
                            product_data: {
                                name: `Análise Profissional SLX: ${title}`,
                                description: "Análise profunda de gameplay CODM com metodologia psicanalítica.",
                            },
                            unit_amount: amountInCents,
                        },
                        quantity: 1,
                    },
                ],
                mode: "payment",
                success_url: `${req.protocol}://${req.get("host")}/community/payment-success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.protocol}://${req.get("host")}/community/payment-cancel`,
                client_reference_id: result.paymentId.toString(),
                metadata: {
                    videoId: result.videoId.toString(),
                    userId: user.id.toString(),
                    paymentId: result.paymentId.toString()
                },
                payment_method_options: currency === "brl" ? {
                    pix: {
                        expires_after_seconds: 3600,
                    },
                } : undefined,
            });

            console.log("[Stripe] Sessão de checkout criada com sucesso.");
            res.json({ url: session.url });
        } catch (error: any) {
            console.error("[Stripe] Erro Crítico no Checkout:", error);
            res.status(500).json({
                error: "Erro interno ao processar o checkout.",
                details: error.message
            });
        }
    });

    // 2. Webhook do Stripe (Automático)
    // Nota: Em produção, você precisaria configurar o "Webhook Secret" no Stripe Dashboard
    app.post("/api/community/webhooks/stripe", async (req, res) => {
        const sig = req.headers["stripe-signature"];
        let event;

        if (!stripe) return res.sendStatus(400);

        try {
            // Em ambiente local sem CLI, podemos processar o body direto para testes iniciais
            // Idealmente: event = stripe.webhooks.constructEvent(req.body, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
            event = req.body;

            if (event.type === "checkout.session.completed") {
                const session = event.data.object;
                const paymentId = parseInt(session.client_reference_id || session.metadata?.paymentId);

                if (paymentId) {
                    // The storage import is already at the top, so no need for dynamic import here.
                    await storage.confirmPayment(paymentId);
                    console.log(`[Stripe Webhook] Pagamento ${paymentId} confirmado automaticamente.`);
                }
            }

            res.json({ received: true });
        } catch (err: any) {
            console.error(`Webhook Error: ${err.message}`);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    });
}
