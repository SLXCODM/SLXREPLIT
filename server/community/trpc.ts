import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError } from "zod";
import superjson from "superjson";
import { type Request, type Response } from "express";

// Community Context
export interface Context {
    req: Request;
    res: Response;
    user?: {
        id: number;
        role: string;
        name?: string;
    };
}

export const createContext = async ({
    req,
    res,
}: {
    req: Request;
    res: Response;
}): Promise<Context> => {
    // @ts-ignore - session might not be typed on Request
    const user = req.session?.user;

    return {
        req,
        res,
        user,
    };
};

const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        if (error.code === 'BAD_REQUEST') {
            console.error("tRPC BAD_REQUEST Error:", error.message);
            if (error.cause instanceof ZodError) {
                console.error("Zod Validation Details:", JSON.stringify(error.cause.flatten(), null, 2));
            }
        } else {
            console.error("tRPC Error:", error.code, error.message);
        }

        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const router = t.router;
export const publicProcedure = t.procedure;

// Requere que o usuário esteja logado
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Você precisa estar logado para acessar esta área."
        });
    }
    return next({
        ctx: {
            ...ctx,
            user: ctx.user,
        },
    });
});

// Requere que o usuário seja ADMIN
export const adminProcedure = t.procedure.use(async ({ ctx, next }) => {
    if (!ctx.user || ctx.user.role !== "admin") {
        throw new TRPCError({
            code: "FORBIDDEN",
            message: "Acesso restrito. Apenas o analista SLX pode acessar esta área."
        });
    }
    return next({
        ctx: {
            ...ctx,
            user: ctx.user,
        },
    });
});
