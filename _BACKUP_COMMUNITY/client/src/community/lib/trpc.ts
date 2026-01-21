import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../../server/community/appRouter";

export const trpc = createTRPCReact<AppRouter>();
export const api = trpc;
