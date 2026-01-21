import { router } from "./trpc";
import { healthRouter } from "./routers/health";
import { uploadRouter } from "./routers/upload";

export const appRouter = router({
    health: healthRouter,
    upload: uploadRouter,
});

export type AppRouter = typeof appRouter;
