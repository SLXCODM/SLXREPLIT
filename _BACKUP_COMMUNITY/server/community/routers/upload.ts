import { z } from "zod";
import { router, publicProcedure, protectedProcedure, adminProcedure } from "../trpc";
import { storage } from "../../storage";

export const uploadRouter = router({
    // Procedimentos de Upload e Pagamento
    createUploadSession: protectedProcedure
        .input(z.object({
            title: z.string().min(1),
            description: z.string().optional(),
            price: z.string(),
            videoUrl: z.string().optional()
        }))
        .mutation(async ({ input, ctx }) => {
            const userId = ctx.user.id;

            const session = await storage.createUploadSession(
                userId,
                input.title,
                input.description || "",
                input.price,
                input.videoUrl
            );

            return {
                success: true,
                paymentId: session.paymentId,
                videoId: session.videoId,
                message: "Session created"
            };
        }),
    getPendingVideos: adminProcedure
        .query(async () => {
            return await storage.getPendingVideos();
        }),
    getVideo: adminProcedure
        .input(z.object({ videoId: z.number() }))
        .query(async ({ input }) => {
            return await storage.getVideo(input.videoId);
        }),
    submitAnalysis: adminProcedure
        .input(z.object({
            videoId: z.number(),
            overallRating: z.number().min(1).max(5),
            summary: z.string(),
            feedbackVideoUrl: z.string().url().optional().or(z.literal("")),
            recommendedVideoUrl: z.string().optional(),
            teaserText: z.string(),
            isPublic: z.boolean().default(false)
        }))
        .mutation(async ({ input, ctx }) => {
            const ANALYST_ID = ctx.user.id;
            return await storage.submitAnalysis({
                ...input,
                analystId: ANALYST_ID,
                feedbackVideoUrl: input.feedbackVideoUrl || null
            });
        }),
    getGalleryItems: publicProcedure
        .query(async () => {
            return await storage.getPublicAnalyses();
        }),
    getUserVideos: protectedProcedure
        .query(async ({ ctx }) => {
            return await storage.getUserVideos(ctx.user.id);
        }),
    getAnalysis: protectedProcedure
        .input(z.object({ videoId: z.number() }))
        .query(async ({ input }) => {
            return await storage.getAnalysisByVideoId(input.videoId);
        }),
    getPendingPayments: adminProcedure
        .query(async () => {
            return await storage.getPendingPayments();
        }),
    confirmPayment: adminProcedure
        .input(z.object({ paymentId: z.number() }))
        .mutation(async ({ input }) => {
            await storage.confirmPayment(input.paymentId);
            return { success: true };
        }),
    createManualGalleryPost: adminProcedure
        .input(z.object({
            title: z.string().min(1),
            description: z.string(),
            videoUrl: z.string().min(1),
            rating: z.number().min(1).max(5),
            summary: z.string(),
            feedbackVideoUrl: z.string().optional().or(z.literal("")),
            teaserText: z.string(),
        }))
        .mutation(async ({ input, ctx }) => {
            const analystId = ctx.user.id;
            return await storage.createManualAnalysis({
                ...input,
                analystId,
                feedbackVideoUrl: input.feedbackVideoUrl || null
            });
        }),
    deleteGalleryItem: adminProcedure
        .input(z.object({ id: z.number() }))
        .mutation(async ({ input }) => {
            return await storage.deleteGalleryItem(input.id);
        }),
});
