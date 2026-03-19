import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Clock,
    CheckCircle2,
    PlayCircle,
    MessageSquare,
    Star,
    ArrowLeft,
    Video as VideoIcon,
    AlertCircle,
    Download,
    ExternalLink,
    Search
} from "lucide-react";
import { CommunityHeader } from "../components/CommunityHeader";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { api } from "../lib/trpc";

export default function StudentDashboard() {
    const { language } = useLanguage();
    const userVideos = api.upload.getUserVideos.useQuery();
    const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

    const t = {
        title: language === "pt" ? "Área do Aluno" : "Student Area",
        subtitle: language === "pt" ? "Acompanhe sua evolução e receba seus feedbacks profissionais." : "Track your evolution and receive your professional feedback.",
        newRequest: language === "pt" ? "Nova Solicitação" : "New Request",
        myOrders: language === "pt" ? "Meus Pedidos" : "My Requests",
        emptyOrders: language === "pt" ? "Você ainda não enviou nenhuma gameplay para análise." : "You haven't submitted any gameplay for analysis yet.",
        feedbackAvailable: language === "pt" ? "Feedback Disponível" : "Feedback Available",
        selectToView: language === "pt" ? "Selecione uma análise ao lado para ver os detalhes" : "Select an analysis on the left to view details",
        loading: language === "pt" ? "Carregando Análise..." : "Loading Analysis...",
        noDescription: language === "pt" ? "Sem descrição disponível." : "No description available.",
        processingTitle: language === "pt" ? "Análise em Processamento" : "Analysis Processing",
        processingDesc: language === "pt" ? "O SLX está estudando sua gameplay. Em breve você receberá um feedback detalhado aqui." : "SLX is studying your gameplay. You will receive detailed feedback here soon.",
        analystSummary: language === "pt" ? "Resumo do Analista" : "Analyst Summary",
        accessFeedback: language === "pt" ? "Acessar Feedback" : "Access Feedback",
        watchVideo: language === "pt" ? "Assistir Vídeo" : "Watch Video",
        textOnly: language === "pt" ? "Esta análise foi feita apenas em texto." : "This analysis was text-only.",
        recommendedTraining: language === "pt" ? "Treino Recomendado" : "Recommended Training",
        studyMaterial: language === "pt" ? "Ver Material de Estudo" : "View Study Material",
        orderId: language === "pt" ? "ID DO PEDIDO" : "ORDER ID",
        needAnother: language === "pt" ? "Precisa de outra análise?" : "Need another analysis?",
        statusAwaiting: language === "pt" ? "Aguardando Pagamento" : "Awaiting Payment",
        statusUploaded: language === "pt" ? "Na Fila" : "In Queue",
        statusAnalyzing: language === "pt" ? "Em Análise" : "Analyzing",
        statusCompleted: language === "pt" ? "Concluída" : "Completed"
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans relative overflow-hidden">
            <CommunityHeader />

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
                <div className="max-w-6xl mx-auto space-y-12">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-emerald-500 pl-6 py-2">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-black tracking-tighter uppercase">{t.title}</h1>
                            <p className="text-zinc-500 font-medium">{t.subtitle}</p>
                        </div>
                        <Link href="/community/upload">
                            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl h-12 px-8 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                                {t.newRequest}
                                <PlayCircle className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* List of Orders */}
                        <div className="lg:col-span-4 space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-widest text-zinc-600 mb-6 flex items-center gap-2">
                                <Search className="w-3 h-3" /> {t.myOrders}
                            </h2>

                            {userVideos.isLoading ? (
                                [1, 2].map(i => (
                                    <div key={i} className="h-24 bg-zinc-900/40 rounded-2xl border border-zinc-800 animate-pulse" />
                                ))
                            ) : userVideos.data?.length === 0 ? (
                                <div className="p-10 text-center bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800 text-zinc-600">
                                    <AlertCircle className="w-8 h-8 mx-auto mb-4 opacity-20" />
                                    <p>{t.emptyOrders}</p>
                                </div>
                            ) : (
                                (Array.isArray(userVideos.data) ? userVideos.data : []).map(video => (
                                    <div
                                        key={video.id}
                                        onClick={() => setSelectedVideoId(video.id)}
                                        className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 group ${selectedVideoId === video.id
                                            ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                                            : "bg-zinc-900/40 border-zinc-900/60 hover:border-zinc-700"
                                            }`}
                                    >
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="font-bold text-zinc-200 line-clamp-1 group-hover:text-emerald-400 transition-colors uppercase text-sm tracking-tight">{video.title}</h3>
                                            <StatusBadge status={video.status || "pending"} />
                                        </div>
                                        <div className="flex items-center justify-between text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {new Date(video.createdAt!).toLocaleDateString()}
                                            </span>
                                            {video.status === "completed" && (
                                                <span className="text-emerald-500 flex items-center gap-1">
                                                    <Star className="w-3 h-3 fill-current" /> {t.feedbackAvailable}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Analysis Detail Viewer */}
                        <div className="lg:col-span-8">
                            {selectedVideoId ? (
                                <AnalysisDetail videoId={selectedVideoId} />
                            ) : (
                                <div className="h-full min-h-[500px] bg-zinc-900/10 rounded-[40px] border border-dashed border-zinc-900 flex flex-col items-center justify-center text-zinc-700 space-y-4">
                                    <div className="p-6 bg-zinc-950 rounded-full">
                                        <ArrowLeft className="w-10 h-10 opacity-20" />
                                    </div>
                                    <p className="font-bold uppercase tracking-widest">{t.selectToView}</p>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const { language } = useLanguage();
    const t = {
        awaiting: language === "pt" ? "Aguardando Pagamento" : "Awaiting Payment",
        uploaded: language === "pt" ? "Na Fila" : "In Queue",
        analyzing: language === "pt" ? "Em Análise" : "Analyzing",
        completed: language === "pt" ? "Concluída" : "Completed"
    };

    switch (status) {
        case "awaiting_payment":
            return <Badge variant="outline" className="text-yellow-500 border-yellow-500/20 bg-yellow-500/5 uppercase text-[9px] font-black">{t.awaiting}</Badge>;
        case "uploaded":
            return <Badge variant="outline" className="text-blue-400 border-blue-400/20 bg-blue-400/5 uppercase text-[9px] font-black">{t.uploaded}</Badge>;
        case "analyzing":
            return <Badge variant="outline" className="text-purple-400 border-purple-400/20 bg-purple-400/5 uppercase text-[9px] font-black">{t.analyzing}</Badge>;
        case "completed":
            return <Badge variant="outline" className="text-emerald-400 border-emerald-400/20 bg-emerald-400/5 uppercase text-[9px] font-black">{t.completed}</Badge>;
        default:
            return <Badge variant="secondary" className="uppercase text-[9px] font-black">{status}</Badge>;
    }
}

function AnalysisDetail({ videoId }: { videoId: number }) {
    const { language } = useLanguage();
    const analysis = api.upload.getAnalysis.useQuery({ videoId });
    const video = api.upload.getVideo.useQuery({ videoId });

    if (analysis.isLoading || video.isLoading) return (
        <div className="p-20 text-center animate-pulse">
            <PlayCircle className="w-12 h-12 mx-auto text-emerald-500 mb-4 animate-spin" />
            <p className="font-bold text-zinc-500 uppercase tracking-widest">{language === "pt" ? "Carregando Análise..." : "Loading Analysis..."}</p>
        </div>
    );

    const data = analysis.data;
    const isCompleted = video.data?.status === "completed";

    return (
        <Card className="bg-zinc-900/40 border-zinc-800 rounded-[32px] overflow-hidden backdrop-blur-md">
            <CardHeader className="p-8 border-b border-zinc-800/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <VideoIcon className="w-24 h-24" />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <StatusBadge status={video.data?.status || "pending"} />
                        {isCompleted && (
                            <div className="flex gap-1">
                                {[...Array(data?.overallRating || 0)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-emerald-400 fill-current" />
                                ))}
                            </div>
                        )}
                    </div>
                    <CardTitle className="text-3xl md:text-5xl font-black tracking-tighter uppercase break-all">
                        {video.data?.title || (language === "pt" ? "Carregando..." : "Loading...")}
                    </CardTitle>
                    <CardDescription className="text-zinc-500 max-w-xl font-medium">
                        {video.data?.description || (language === "pt" ? "Sem descrição disponível." : "No description available.")}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="p-8 space-y-10">

                {!isCompleted ? (
                    <div className="py-20 text-center space-y-6">
                        <div className="w-20 h-20 bg-zinc-950 rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <Clock className="w-8 h-8 text-emerald-500 animate-pulse" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black uppercase tracking-tight">{language === "pt" ? "Análise em Processamento" : "Analysis Processing"}</h3>
                            <p className="text-zinc-500 text-sm max-w-sm mx-auto font-medium">
                                {language === "pt"
                                    ? "O SLX está estudando sua gameplay. Em breve você receberá um feedback detalhado aqui."
                                    : "SLX is studying your gameplay. You will receive detailed feedback here soon."}
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="space-y-4">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> {language === "pt" ? "Resumo do Analista" : "Analyst Summary"}
                            </h3>
                            <div className="p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800/50 leading-relaxed text-zinc-300 font-medium italic break-all">
                                "{data?.summary}"
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Feedback Video Link (Main Asset) */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{language === "pt" ? "Acessar Feedback" : "Access Feedback"}</h3>
                                {data?.feedbackVideoUrl ? (
                                    <a href={data.feedbackVideoUrl} target="_blank" rel="noreferrer">
                                        <Button className="w-full bg-emerald-600 hover:bg-emerald-500 h-16 rounded-2xl text-lg font-black uppercase tracking-widest shadow-lg shadow-emerald-900/20">
                                            {language === "pt" ? "Assistir Vídeo" : "Watch Video"}
                                            <PlayCircle className="ml-2 w-6 h-6" />
                                        </Button>
                                    </a>
                                ) : (
                                    <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 border-dashed text-zinc-600 text-center">
                                        <VideoIcon className="w-6 h-6 mx-auto mb-2 opacity-20" />
                                        <p className="text-[10px] font-black uppercase">Esta análise foi feita apenas em texto.</p>
                                    </div>
                                )}
                            </div>

                            {/* Recommended Training */}
                            {data?.recommendedVideoUrl && (
                                <div className="space-y-4">
                                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">{language === "pt" ? "Treino Recomendado" : "Recommended Training"}</h3>
                                    <a href={data.recommendedVideoUrl} target="_blank" rel="noreferrer">
                                        <Button variant="outline" className="w-full border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 h-16 rounded-2xl text-sm font-black uppercase tracking-widest text-emerald-400">
                                            {language === "pt" ? "Ver Material de Estudo" : "View Study Material"}
                                            <ExternalLink className="ml-2 w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </CardContent>
            <CardFooter className="p-8 bg-zinc-950/30 border-t border-zinc-800/30 flex justify-between items-center">
                <span className="text-[10px] font-black uppercase text-zinc-700 tracking-[0.3em]">{language === "pt" ? "ID DO PEDIDO" : "ORDER ID"}: #{videoId}</span>
                <Link href="/community/upload">
                    <span className="text-[10px] font-black uppercase text-emerald-500 hover:underline cursor-pointer tracking-widest">{language === "pt" ? "Precisa de outra análise?" : "Need another analysis?"}</span>
                </Link>
            </CardFooter>
        </Card>
    );
}
