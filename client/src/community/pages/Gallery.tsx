import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Trophy,
    Lock,
    Eye,
    Zap,
    ArrowRight,
    Star,
    Sparkles,
    Youtube
} from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Trash2, Loader2 as LoaderIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { api } from "../lib/trpc";
import { CommunityHeader } from "../components/CommunityHeader";
import { useQuery } from "@tanstack/react-query";

export default function Gallery() {
    const { language } = useLanguage();
    const galleryItems = api.upload.getGalleryItems.useQuery();

    const t = {
        badge: language === "pt" ? "Vitrine de Evolução" : "Evolution Showcase",
        title1: language === "pt" ? "Resultados do" : "Results of the",
        title2: language === "pt" ? "Método SLX" : "SLX Method",
        subtitle: language === "pt"
            ? "Veja trechos de análises profissionais e descubra o que separa os amadores dos verdadeiros lendários."
            : "See clips from professional analyses and discover what separates amateurs from true legends.",
        emptyTitle: language === "pt" ? "Nenhuma análise publicada ainda." : "No analyses published yet.",
        errorTitle: language === "pt" ? "Erro ao carregar galeria." : "Error loading gallery.",
        emptyDesc: language === "pt" ? "Seja o primeiro a aparecer aqui!" : "Be the first to appear here!",
        errorDesc: language === "pt" ? "Tente recarregar a página." : "Please try reloading the page.",
        sendButton: language === "pt" ? "Enviar Gameplay" : "Submit Gameplay",
        ctaTitle: language === "pt" ? "Quer ver sua própria gameplay aqui?" : "Want to see your own gameplay here?",
        ctaDesc: language === "pt"
            ? "Sua evolução começa com um feedback profissional. Descubra seus vícios, ajuste sua mente e domine o servidor."
            : "Your evolution starts with professional feedback. Discover your habits, adjust your mind, and dominate the server.",
        ctaButton: language === "pt" ? "Quero Ser Analisado" : "Get My Analysis",
        restricted: language === "pt" ? "Conteúdo Restrito" : "Restricted Content",
        views: language === "pt" ? "acessos" : "views",
        accessMethod: language === "pt" ? "Acessar Metodologia" : "Access Methodology",
        itemUnavailable: language === "pt" ? "Dados do vídeo indisponíveis." : "Video data unavailable.",
        deleteSuccess: language === "pt" ? "Item removido com sucesso!" : "Item removed successfully!",
        deleteError: language === "pt" ? "Erro ao remover" : "Error removing",
        confirmDelete: language === "pt" ? "Deseja realmente excluir este item da vitrine?" : "Are you sure you want to delete this item from the showcase?"
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans relative overflow-hidden">
            <CommunityHeader />

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center space-y-6 mb-20 animate-in fade-in zoom-in-95 duration-1000">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        {t.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                        {t.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.title2}</span>
                    </h1>
                    <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.isLoading ? (
                        [1, 2, 3].map(i => (
                            <div key={i} className="h-[400px] bg-zinc-900/50 rounded-3xl border border-zinc-800 animate-pulse" />
                        ))
                    ) : (
                        // Proteção contra erro "n.map is not a function"
                        // Se não for array, exibe vazio ou mensagem de erro
                        (!galleryItems.data || !Array.isArray(galleryItems.data) || galleryItems.data.length === 0) ? (
                            <div className="col-span-full py-20 text-center space-y-4">
                                <div className="p-4 bg-zinc-900 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                                    <Trophy className="w-6 h-6 text-zinc-700" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-400">
                                    {galleryItems.error ? t.errorTitle : t.emptyTitle}
                                </h3>
                                <p className="text-zinc-600">
                                    {galleryItems.error ? t.errorDesc : t.emptyDesc}
                                </p>
                                <Link href="/community/upload">
                                    <Button size="lg" className="bg-emerald-600 mt-4 rounded-full">{t.sendButton}</Button>
                                </Link>
                                {/* Debug: Show what we received if it's weird */}
                                {!Array.isArray(galleryItems.data) && galleryItems.data && (
                                    <pre className="text-xs text-red-500 mt-4 hidden">
                                        Received type: {typeof galleryItems.data}
                                    </pre>
                                )}
                            </div>
                        ) : (
                            galleryItems.data.map(item => (
                                <GalleryCard key={item.id} item={item} />
                            ))
                        )
                    )}
                </div>

                {/* Final CTA */}
                <div className="mt-32 p-12 rounded-[40px] bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 border border-emerald-500/20 text-center space-y-8 shadow-2xl backdrop-blur-md">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter">{t.ctaTitle}</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        {t.ctaDesc}
                    </p>
                    <Link href="/community/upload">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white h-16 px-12 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-105">
                            {t.ctaButton}
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

function getVideoThumbnail(url: string): string | null {
    if (!url) return null;

    // YouTube
    const ytMatch = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)?([^?&/]+)/);
    if (ytMatch && ytMatch[1]) {
        return `https://img.youtube.com/vi/${ytMatch[1]}/maxresdefault.jpg`;
    }

    // TikTok Detection
    if (url.includes("tiktok.com")) {
        return "TIKTOK_PLACEHOLDER";
    }

    return null;
}

function GalleryCard({ item }: { item: any }) {
    const { language } = useLanguage();
    const { toast } = useToast();
    const queryClient = api.useUtils();
    const thumbnail = item.video ? getVideoThumbnail(item.video.s3Url) : null;

    const t = {
        restricted: language === "pt" ? "Conteúdo Restrito" : "Restricted Content",
        views: language === "pt" ? "acessos" : "views",
        accessMethod: language === "pt" ? "Acessar Metodologia" : "Access Methodology",
        itemUnavailable: language === "pt" ? "Dados do vídeo indisponíveis." : "Video data unavailable.",
        deleteSuccess: language === "pt" ? "Item removido com sucesso!" : "Item removed successfully!",
        deleteError: language === "pt" ? "Erro ao remover" : "Error removing",
        confirmDelete: language === "pt" ? "Deseja realmente excluir este item da vitrine?" : "Are you sure you want to delete this item from the showcase?"
    };

    const { data: auth } = useQuery<any>({
        queryKey: ["/api/community/auth/me"],
        queryFn: async () => {
            const res = await fetch("/api/community/auth/me");
            if (!res.ok) return { loggedIn: false };
            return res.json();
        }
    });

    const deleteItem = api.upload.deleteGalleryItem.useMutation({
        onSuccess: () => {
            toast({ title: t.deleteSuccess });
            queryClient.upload.getGalleryItems.invalidate();
        },
        onError: (err) => {
            toast({ title: t.deleteError, description: err.message, variant: "destructive" });
        }
    });

    const isAdmin = auth?.loggedIn && auth?.user?.role === "admin";

    return (
        <Card className="bg-zinc-900/40 border-zinc-800/60 overflow-hidden group hover:border-emerald-500/30 transition-all duration-700 hover:translate-y-[-8px] backdrop-blur-xl shadow-2xl rounded-[32px] relative">
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Defensive check: Ensure video object exists before rendering */}
            {item.video ? (
                <>
                    <div className="relative aspect-video overflow-hidden">
                        {/* Video Thumbnail or Placeholder */}
                        {thumbnail && thumbnail !== "TIKTOK_PLACEHOLDER" ? (
                            <img
                                src={thumbnail}
                                alt={item.video.title || "Análise SLX"}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale-[0.5] group-hover:grayscale-0"
                            />
                        ) : (
                            <div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center gap-4">
                                {item.video.s3Url && item.video.s3Url.includes("tiktok.com") ? (
                                    <>
                                        <SiTiktok className="w-16 h-16 text-zinc-700 group-hover:text-emerald-500/40 transition-all duration-500 group-hover:scale-110" />
                                        <span className="text-[10px] font-black tracking-widest text-zinc-800 group-hover:text-emerald-900 transition-colors uppercase">Conteúdo TikTok</span>
                                    </>
                                ) : (
                                    <Youtube className="w-16 h-16 text-zinc-700 group-hover:text-emerald-500/40 transition-colors duration-500" />
                                )}
                            </div>
                        )}

                        {/* Admin Delete Button */}
                        {isAdmin && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault(); e.stopPropagation();
                                    if (confirm(t.confirmDelete)) {
                                        deleteItem.mutate({ id: item.id });
                                    }
                                }}
                                className="absolute top-4 right-4 z-50 p-2 bg-red-500/80 hover:bg-red-600 text-white rounded-xl backdrop-blur-md shadow-lg transition-all active:scale-95"
                            >
                                {deleteItem.isPending ? <LoaderIcon className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                            </button>
                        )}

                        {/* Cyberpunk Mesh and Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                        {/* Lock Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 bg-zinc-950/80 backdrop-blur-md translate-y-4 group-hover:translate-y-0">
                            <div className="p-4 bg-emerald-500/20 rounded-full mb-4 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-500/30">
                                <Lock className="w-8 h-8" />
                            </div>
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">Conteúdo Restrito</span>
                            <p className="text-[10px] text-zinc-500 mt-2 font-mono">ENCRYPTED_FEEDBACK_DATA</p>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 transition-transform duration-500 group-hover:translate-y-[-10px]">
                            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md font-bold px-3 py-1">
                                <Star className="w-3 h-3 mr-1 fill-current" /> {item.overallRating}/5
                            </Badge>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">
                                <Eye className="w-3 h-3 text-emerald-500" />
                                <span>{Math.floor(Math.random() * 500) + 1240} {t.views}</span>
                            </div>
                        </div>
                    </div>

                    <CardHeader className="space-y-3 pb-4 relative">
                        <CardTitle className="text-2xl font-black tracking-tight line-clamp-1 group-hover:text-emerald-400 transition-colors duration-500">
                            {item.video.title}
                        </CardTitle>
                        <div className="min-h-20">
                            <p className="text-zinc-400 text-sm leading-relaxed font-light italic border-l-2 border-emerald-500/30 pl-4 py-1 break-words overflow-wrap-anywhere">
                                "{item.teaserText}"
                            </p>
                        </div>
                    </CardHeader>
                </>
            ) : (
                <div className="p-8 text-center text-red-500">
                    {t.itemUnavailable}
                </div>
            )}

            <CardContent className="pt-0 flex gap-2">
                <div className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 rounded-lg text-[9px] text-emerald-500/60 font-black uppercase tracking-widest">Mentalidade</div>
                <div className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/10 rounded-lg text-[9px] text-cyan-500/60 font-black uppercase tracking-widest">Técnico</div>
            </CardContent>

            <CardFooter className="pt-4 pb-8 px-6">
                <Link href="/community/upload" className="w-full">
                    <Button variant="outline" className="w-full border-zinc-800 bg-zinc-900/50 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 rounded-2xl h-14 transition-all duration-500 group/btn relative overflow-hidden">
                        <span className="relative z-10 font-black tracking-widest uppercase text-xs">{t.accessMethod}</span>
                        <Zap className="relative z-10 ml-2 w-4 h-4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

