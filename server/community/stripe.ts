import Stripe from "stripe";
import { type Express } from "express";
import { storage } from "../storage";

// Initialize Stripe with Secret Key from env
let stripe: Stripe | null = null;

function getStripe() {
    if (!stripe && process.env.STRIPE_SECRET_KEY) {
        const rawKey = process.env.STRIPE_SECRET_KEY;
        // Fix: Removes quotes that might have been pasted into Vercel env vars
        const key = rawKey.replace(/['"]/g, '').trim();

        stripe = new Stripe(key, {
            apiVersion: "2023-10-16" as any,
            maxNetworkRetries: 3,
            timeout: 15000
        });
        // Force Deploy Check: v2.1
        console.log(`[Stripe] Cliente inicializado (Sanitized). Key: ${key.substring(0, 7)}... Size: ${key.length}`);
    }
    return stripe;
}

export function setupStripeRoutes(app: Express) {
    app.post("/api/community/create-checkout-session", async (req, res) => {
        // Hoist variables to be accessible in catch block
        let result: any = null;
        const { price, title, description, videoUrl, allowPublic, lang } = req.body;

        const isPt = lang === 'pt' || !lang; // Default to PT if missing

        // Dynamic Product Details
        const productName = isPt
            ? `Análise Profissional SLX: ${title}`
            : `SLX Professional Analysis: ${title}`;

        const productDesc = isPt
            ? "Análise profunda de gameplay CODM com metodologia psicanalítica."
            : "Deep CODM gameplay analysis using the SLX psychoanalytic methodology.";

        try {
            console.log(`[Stripe] Inciando criação de sessão. Lang recebido: "${lang}" (body)`);
            const user = (req.session as any).user;

            if (!user) {
                return res.status(401).json({ error: "Você precisa estar logado para realizar o pagamento." });
            }

            // 🎯 ADMIN BYPASS: Admin não paga!
            if (user.role === 'admin') {
                const adminResult = await storage.createUploadSession(
                    user.id,
                    title,
                    description || "Admin Upload - Sem Pagamento",
                    "R$ 0,00",
                    videoUrl || "",
                    allowPublic || false
                );

                // Confirmar pagamento automaticamente para admin
                await storage.confirmPayment(adminResult.paymentId);

                console.log(`[Admin Bypass] Vídeo ${adminResult.videoId} aprovado automaticamente para admin ${user.email}`);

                return res.json({
                    url: `${req.protocol}://${req.get("host")}/community/payment-success?admin=true&paymentId=${adminResult.paymentId}`,
                    adminBypass: true
                });
            }

            const stripeClient = getStripe();

            // 1. Criar a sessão no banco de dados primeiro para ter o ID
            result = await storage.createUploadSession(
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

            // If language is NOT PT, default to USD if price string isn't specific
            if (!isPt) {
                currency = "usd";
                amountInCents = 700; // $7.00 USD
            }

            // Helper to parse price string overrides (if user passed specific string)
            if (price && typeof price === 'string') {
                if (price.includes("$") || price.toLowerCase().includes("usd")) {
                    currency = "usd";
                    amountInCents = 700;
                    // Try to parse number if presented
                    const numeric = parseFloat(price.replace(/[^\d.,]/g, ""));
                    if (!isNaN(numeric) && numeric > 0) amountInCents = Math.round(numeric * 100);
                } else if (price.includes("R$")) {
                    currency = "brl";
                    amountInCents = 3700;
                    const numeric = parseFloat(price.replace(/[^\d.,]/g, "").replace(",", "."));
                    if (!isNaN(numeric) && numeric > 0) amountInCents = Math.round(numeric * 100);
                }
            }

            console.log(`[Stripe] Criando checkout. Moeda: ${currency.toUpperCase()}, Valor: ${amountInCents}, Locale: ${isPt ? 'pt-BR' : 'en'}`);

            const sessionOptions: any = {
                automatic_payment_methods: { enabled: true },
                line_items: [
                    {
                        price_data: {
                            currency: currency,
                            product_data: {
                                name: productName,
                                description: productDesc,
                            },
                            unit_amount: amountInCents,
                        },
                        quantity: 1,
                    },
                ],
                mode: "payment",
                locale: isPt ? 'pt-BR' : 'en', // Força o idioma da página do Stripe
                success_url: `${req.protocol}://${req.get("host")}/community/payment-success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.protocol}://${req.get("host")}/community/payment-cancel`,
                client_reference_id: result.paymentId.toString(),
                metadata: {
                    videoId: result.videoId.toString(),
                    userId: user.id.toString(),
                    paymentId: result.paymentId.toString()
                }
            };

            const session = await (stripeClient.checkout.sessions.create as any)(sessionOptions);

            console.log("[Stripe] Sessão de checkout criada com sucesso.");
            res.json({ url: session.url });
        } catch (error: any) {
            console.error("[Stripe] SDK falhou. Tentando Fallback Manual (Fetch)...", error.message);

            if (!result) {
                console.error("[Stripe] Erro ocorreu antes de criar sessão no DB. Abortando fallback.");
                return res.status(500).json({ error: "Erro interno ao preparar pedido (Banco de Dados)." });
            }

            // FALLBACK: Tentar via REST API direta (bypassing SDK)
            try {
                // SANITIZE KEY AGAIN FOR FALLBACK
                const rawKey = process.env.STRIPE_SECRET_KEY || "";
                const cleanKey = rawKey.replace(/['"]/g, '').trim();

                // Re-calculate price for fallback scope
                let fbCurrency = "brl";
                let fbAmount = "3700";

                if (!isPt) {
                    fbCurrency = "usd";
                    fbAmount = "700";
                }

                if (price && typeof price === 'string') {
                    if (price.includes("$") || price.toLowerCase().includes("usd")) {
                        fbCurrency = "usd";
                        fbAmount = "700";
                    } else if (price.includes("R$")) {
                        fbCurrency = "brl";
                        fbAmount = "3700";
                    }
                }

                const params = new URLSearchParams();
                params.append('mode', 'payment');
                params.append('success_url', `${req.protocol}://${req.get("host")}/community/payment-success?session_id={CHECKOUT_SESSION_ID}`);
                params.append('cancel_url', `${req.protocol}://${req.get("host")}/community/payment-cancel`);
                params.append('client_reference_id', result.paymentId.toString());
                params.append('line_items[0][price_data][currency]', fbCurrency);
                params.append('line_items[0][price_data][product_data][name]', productName);
                params.append('line_items[0][price_data][unit_amount]', fbAmount);
                params.append('line_items[0][quantity]', '1');
                params.append('metadata[videoId]', result.videoId.toString());
                params.append('metadata[paymentId]', result.paymentId.toString());

                // LEGACY MODE: Use explicit types to avoid API Version errors
                params.append('payment_method_types[0]', 'card');

                const fallbackRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${cleanKey}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Stripe-Version': '2023-10-16'
                    },
                    body: params
                });

                const fallbackData = await fallbackRes.json();

                if (!fallbackRes.ok) {
                    // Return the REAL error from Stripe
                    throw new Error(fallbackData.error?.message || JSON.stringify(fallbackData));
                }

                console.log("[Stripe] Sucesso via Fallback Manual!");
                return res.json({ url: fallbackData.url });

            } catch (fallbackErr: any) {
                console.error("[Stripe] Fallback Final falhou:", fallbackErr);
                res.status(500).json({
                    // Mostrar a mensagem REAL do erro para o usuário (ex: Authentication Failed)
                    error: `Erro Stripe: ${fallbackErr.message}`,
                    details: fallbackErr.message,
                    originalError: error.message
                });
            }
        }
    });

    // 2. Webhook do Stripe (Automático)
    app.post("/api/community/webhooks/stripe", async (req, res) => {
        const sig = req.headers["stripe-signature"];
        let event;

        // SANITIZE KEY FOR WEBHOOK TOO
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
