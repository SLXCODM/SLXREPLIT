// 🚀 Optimized Serverless Handler for Vercel
let server;

export default async (req, res) => {
    try {
        console.log(`[Vercel] Request: ${req.method} ${req.url}`);

        // 🟢 Quick Health/Ping Bypass (No server needed)
        if (req.url === "/api/health" || req.url === "/api/ping") {
            return res.status(200).json({
                status: "alive",
                timestamp: new Date().toISOString(),
                env: process.env.VERCEL ? "production" : "local"
            });
        }

        // 🟠 Delayed Server Loading
        if (!server) {
            console.log("[Vercel] Loading server bundle from ./_server.js...");
            try {
                // Dynamic import of the bundled server
                const module = await import("./_server.js");
                server = module.app;

                // Wait for the internal setup (routes, static dirs, etc.)
                if (module.setupPromise) {
                    await module.setupPromise;
                }
                console.log("[Vercel] Server bundle loaded success.");
            } catch (importErr) {
                console.error("[Vercel] CRITICAL: Failed to load _server.js:", importErr.message);
                throw new Error(`Server module load failure: ${importErr.message}`);
            }
        }

        // 🟢 Call Express App
        return server(req, res);
    } catch (err) {
        console.error("[Vercel] INTERNAL CRASH:", err.message);
        if (err.stack) console.error(err.stack);

        return res.status(500).json({
            error: "Serverless Function Error",
            message: err.message,
            tip: "Check DATABASE_URL and build logs in Vercel dashboard."
        });
    }
};
