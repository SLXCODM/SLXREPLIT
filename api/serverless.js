import { app, setupPromise } from '../../dist/index.js';

export default async (req, res) => {
    try {
        console.log("Serverless request received:", req.method, req.url);

        // Wait for the server setup (DB connection, etc.)
        await setupPromise;

        // Handle request
        app(req, res);
    } catch (err) {
        console.error("SERVERLESS CRASH:", err.message);
        if (err.stack) console.error(err.stack);

        res.status(500).json({
            error: "Serverless Function Crashed",
            message: err.message,
            code: "INIT_FAILURE"
        });
    }
};
