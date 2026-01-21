import { app, setupPromise } from '../dist/index.js';

export default async (req, res) => {
    try {
        console.log(`[Vercel] Request: ${req.method} ${req.url}`);

        // Step 1: Check Environment
        if (!process.env.DATABASE_URL) {
            console.error("[Vercel] CRITICAL: DATABASE_URL is not defined!");
        }

        // Step 2: Health Check Bypass
        if (req.url === "/api/health" || req.url === "/api/ping") {
            return res.status(200).json({ status: "alive", time: new Date().toISOString() });
        }

        // Step 3: Wait for Server Initialization
        console.log("[Vercel] Waiting for setupPromise...");
        await setupPromise;
        console.log("[Vercel] setupPromise resolved successfully.");

        // Step 3: Handle Request
        app(req, res);
    } catch (err) {
        console.error("[Vercel] SERVERLESS FATAL ERROR:", err.message);
        if (err.stack) console.error(err.stack);

        res.status(500).json({
            error: "Serverless Function Crashed during initialization",
            message: err.message,
            code: "INIT_FAILURE"
        });
    }
};
