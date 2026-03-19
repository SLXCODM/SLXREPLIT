import { router, publicProcedure } from "../trpc";

export const healthRouter = router({
    check: publicProcedure.query(async () => {
        const diagnostics = {
            status: "ok",
            timestamp: new Date().toISOString(),
            env: {
                hasDatabaseUrl: !!process.env.DATABASE_URL,
                isVercel: !!process.env.VERCEL,
                databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) + "..." : "MISSING"
            },
            storage: {
                type: process.env.DATABASE_URL ? "Postgres/Database" : "InMemory (Temporary)",
            },
            dbConnection: "Unknown"
        };

        try {
            // Tenta importar o storage para testar conexão
            const { storage } = await import("../../storage");
            const projects = await storage.getProjects();
            diagnostics.dbConnection = `Success (Found ${projects.length} projects)`;
        } catch (error: any) {
            console.error("Health Check DB Error:", error);
            diagnostics.dbConnection = `Failed: ${error.message}`;

            // Se falhar a conexão, o status geral muda
            if (process.env.DATABASE_URL) {
                diagnostics.status = "error_db_connection";
            }
        }

        return diagnostics;
    }),
});
