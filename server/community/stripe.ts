import Stripe from "stripe";
import { type Express } from "express";
import { storage } from "../storage";

// Initialize Stripe with Secret Key from env
let stripe: Stripe | null = null;

function getStripe() {
    if (!stripe && process.env.STRIPE_SECRET_KEY) {
        stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" as any });
        console.log(`[Stripe] Cliente inicializado. Tipo: ${process.env.STRIPE_SECRET_KEY.startsWith('sk_live') ? 'PRODUÇÃO (LIVE)' : 'TESTE'}`);
    }
    return stripe;
}

export function setupStripeRoutes(app: Express) {
    app.post("/api/community/create-checkout-session", async (req, res) => {
        try {
            console.log("[Stripe] Inciando criação de sessão de checkout...");
            const { price, title, videoUrl, description, allowPublic } = req.body;
            const user = (req.session as any).user;

            console.log("[Stripe Debug] Key present:", !!process.env.STRIPE_SECRET_KEY);
            if (process.env.STRIPE_SECRET_KEY) {
                console.log("[Stripe Debug] Key prefix:", process.env.STRIPE_SECRET_KEY.substring(0, 7));
            }

            if (!user) {
                return res.status(401).json({ error: "Você precisa estar logado para realizar o pagamento." });
            }

            // 🎯 ADMIN BYPASS: Admin não paga!
            if (user.role === 'admin') {
                const result = await storage.createUploadSession(
                    user.id,
                    title,
                    description || "Admin Upload - Sem Pagamento",
                    "R$ 0,00",
                    videoUrl || "",
                    allowPublic || false
                );

                // Confirmar pagamento automaticamente para admin
                await storage.confirmPayment(result.paymentId);

                console.log(`[Admin Bypass] Vídeo ${result.videoId} aprovado automaticamente para admin ${user.email}`);

                return res.json({
                    url: `${req.protocol}://${req.get("host")}/community/payment-success?admin=true&paymentId=${result.paymentId}`,
                    adminBypass: true
                });
            }

            const stripeClient = getStripe();

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

            if (!stripeClient) {
                console.warn("[Stripe] Chave secreta ausente ou inválida. Usando redirecionamento Mock.");
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

            const session = await (stripeClient.checkout.sessions.create as any)({
                automatic_payment_methods: { enabled: true },
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
            });

            console.log("[Stripe] Sessão de checkout criada com sucesso.");
            res.json({ url: session.url });
        } catch (error: any) {
            console.error("[Stripe] Erro Crítico no Checkout:", error);
            res.status(500).json({
                error: "Erro ao criar sessão no Stripe. Verifique se suas chaves sk_live e pk_live no arquivo .env estão corretas.",
                details: error.message
            });
        }
    });

    // 2. Webhook do Stripe (Automático)
    app.post("/api/community/webhooks/stripe", async (req, res) => {
        const sig = req.headers["stripe-signature"];
        let event;

        const stripeClient = getStripe();
        if (!stripeClient) return res.sendStatus(400);

        try {
            // Em ambiente local sem CLI, podemos processar o body direto para testes iniciais
            event = req.body;

            if (event.type === "checkout.session.completed") {
                const session = event.data.object;
                const paymentId = parseInt(session.client_reference_id || session.metadata?.paymentId);

                if (paymentId) {
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
