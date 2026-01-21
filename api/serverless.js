import { app, setupPromise } from '../../dist/index.js';

export default async (req, res) => {
    try {
        // Wait for the server setup (DB connection, etc.)
        await setupPromise;
        // Handle request
        app(req, res);
    } catch (err) {
        console.error("Serverless Function Crash:", err);
        res.status(500).json({
            error: "Serverless Function Crashed",
            details: err.message,
            stack: err.stack
        });
    }
};
