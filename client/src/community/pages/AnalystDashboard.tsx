import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Loader2,
    Video as VideoIcon,
    Clock,
    ChevronRight,
    Plus,
    Star,
    CheckCircle2,
    Youtube,
    Link as LinkIcon,
    ArrowLeft
} from "lucide-react";
import { api } from "../lib/trpc";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnalystDashboard() {
    const { language } = useLanguage();
    const { toast } = useToast();
    const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const t = {
        back: language === "pt" ? "Voltar para Comunidade" : "Back to Community",
        title: language === "pt" ? "Painel do Analista" : "Analyst Dashboard",
        subtitle: language === "pt" ? "Mantenha o padrão de psicanalista: profundo, atento e profissional." : "Maintain the psychoanalyst standard: deep, attentive, and professional.",
        tabRequests: language === "pt" ? "Pedidos de Clientes" : "Customer Requests",
        tabPayments: language === "pt" ? "Pagamentos Pendentes" : "Pending Payments",
        tabManual: language === "pt" ? "Postar Exemplo Manual" : "Post Manual Example",
        noPayments: language === "pt" ? "Nenhum pagamento aguardando aprovação. 👋" : "No payments awaiting approval. 👋",
        noRequests: language === "pt" ? "Nenhuma gameplay pendente. Ótimo trabalho!" : "No pending gameplays. Great job!",
        waitingPayment: language === "pt" ? "Aguardando PIX/Cartão" : "Awaiting PIX/Card",
        simulateStripe: language === "pt" ? "🚀 Simular Automação (Stripe)" : "🚀 Simulate Automation (Stripe)",
        confirmManual: language === "pt" ? "Confirmar Recebimento Manual" : "Confirm Manual Receipt",
        queue: language === "pt" ? "Fila de Espera" : "Waiting Queue",
        pendingItems: language === "pt" ? "Pendentes" : "Pending",
        selectToStart: language === "pt" ? "Selecione uma gameplay na fila ao lado para iniciar a análise." : "Select a gameplay from the queue to start analysis.",
        successSubmit: language === "pt" ? "Análise enviada com sucesso!" : "Analysis submitted successfully!",
        errorSubmit: language === "pt" ? "Erro ao enviar" : "Submit error",
        paymentApproved: language === "pt" ? "Pagamento aprovado!" : "Payment approved!",
        paymentApprovedDesc: language === "pt" ? "A gameplay agora está na sua fila de análise." : "The gameplay is now in your analysis queue.",
        errorApprove: language === "pt" ? "Erro ao aprovar" : "Approval error"
    };

    // Queries
    const pendingVideos = api.upload.getPendingVideos.useQuery();
    const pendingPayments = api.upload.getPendingPayments.useQuery();
    const selectedVideo = api.upload.getVideo.useQuery(
        { videoId: selectedVideoId! },
        { enabled: !!selectedVideoId }
    );

    // Mutation
    const submit = api.upload.submitAnalysis.useMutation({
        onSuccess: () => {
            toast({ title: t.successSubmit, variant: "default" });
            setSelectedVideoId(null);
            pendingVideos.refetch();
        },
        onError: (err) => {
            toast({ title: t.errorSubmit, description: err.message, variant: "destructive" });
        }
    });

    const approvePayment = api.upload.confirmPayment.useMutation({
        onSuccess: () => {
            toast({ title: t.paymentApproved, description: t.paymentApprovedDesc, variant: "default" });
            pendingPayments.refetch();
            pendingVideos.refetch();
        },
        onError: (err) => {
            toast({ title: t.errorApprove, description: err.message, variant: "destructive" });
        }
    });

    const isSubmitting = submit.isPending;

    if (pendingVideos.isLoading) return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-emerald-500">
            <Loader2 className="w-10 h-10 animate-spin" />
        </div>
    );

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
                    <div>
                        <Link href="/community">
                            <Button variant="ghost" size="sm" className="mb-2 -ml-2 text-zinc-500 hover:text-white">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                {t.back}
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-black tracking-tighter">{t.title} <span className="text-emerald-500">SLX</span></h1>
                        <p className="text-zinc-500">{t.subtitle}</p>
                    </div>
                </div>

                <Tabs defaultValue="requests" className="w-full">
                    <TabsList className="bg-zinc-900 border border-zinc-800 p-1 rounded-xl h-12 mb-8">
                        <TabsTrigger value="requests" className="rounded-lg data-[state=active]:bg-emerald-500 data-[state=active]:text-white px-6">
                            {t.tabRequests}
                        </TabsTrigger>
                        <TabsTrigger value="payments" className="rounded-lg data-[state=active]:bg-emerald-500 data-[state=active]:text-white px-6 flex items-center gap-2">
                            {t.tabPayments}
                            {pendingPayments.data && pendingPayments.data.length > 0 && (
                                <Badge className="bg-red-500 text-white border-none h-5 min-w-5 flex items-center justify-center p-0.5 text-[10px]">{pendingPayments.data.length}</Badge>
                            )}
                        </TabsTrigger>
                        <TabsTrigger value="manual" className="rounded-lg data-[state=active]:bg-emerald-500 data-[state=active]:text-white px-6 flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            {t.tabManual}
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="payments">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
                            {pendingPayments.isLoading ? (
                                <div className="col-span-full py-20 text-center text-zinc-500 animate-pulse">{language === "pt" ? "Carregando pagamentos..." : "Loading payments..."}</div>
                            ) : pendingPayments.data?.length === 0 ? (
                                <div className="col-span-full p-12 text-center bg-zinc-900/40 rounded-3xl border border-dashed border-zinc-800 text-zinc-600">
                                    {t.noPayments}
                                </div>
                            ) : (
                                (Array.isArray(pendingPayments.data) ? pendingPayments.data : []).map((payment) => (
                                    <Card key={payment.id} className="bg-zinc-900/60 border-zinc-800 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all">
                                        <CardHeader>
                                            <div className="flex items-center justify-between mb-2">
                                                <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 uppercase text-[10px] font-black">{t.waitingPayment}</Badge>
                                                <span className="text-xl font-black text-white">R$ {payment.amount}</span>
                                            </div>
                                            <CardTitle className="text-lg font-bold truncate">{payment.video.title}</CardTitle>
                                            <CardDescription className="text-zinc-500 text-xs break-all">{payment.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="p-3 bg-zinc-950/50 rounded-2xl border border-zinc-800 text-xs text-zinc-400">
                                                ID: <span className="text-zinc-500 font-mono">{payment.stripePaymentIntentId}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Button
                                                    onClick={() => {
                                                        if (confirm("Deseja simular o Stripe avisando o site agora? Isso é o que acontecerá automaticamente no futuro.")) {
                                                            fetch("/api/community/webhooks/stripe", {
                                                                method: "POST",
                                                                headers: { "Content-Type": "application/json" },
                                                                body: JSON.stringify({
                                                                    type: "checkout.session.completed",
                                                                    data: { object: { client_reference_id: payment.id.toString() } }
                                                                })
                                                            }).then(() => {
                                                                toast({ title: "Simulação de Automação Enviada!", description: "O sistema agiu como se o Stripe tivesse aprovado." });
                                                                pendingPayments.refetch();
                                                                pendingVideos.refetch();
                                                            });
                                                        }
                                                    }}
                                                    variant="outline"
                                                    className="w-full border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold text-[10px] h-10 rounded-2xl"
                                                >
                                                    {t.simulateStripe}
                                                </Button>

                                                <Button
                                                    onClick={() => {
                                                        if (confirm(language === "pt" ? "Você confirmou o recebimento deste valor no seu Stripe?" : "Have you confirmed receipt of this amount in your Stripe?")) {
                                                            approvePayment.mutate({ paymentId: payment.id });
                                                        }
                                                    }}
                                                    disabled={approvePayment.isPending}
                                                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase text-xs tracking-widest h-12 rounded-2xl"
                                                >
                                                    {approvePayment.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : t.confirmManual}
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="requests">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
                            {/* Left: Pending List */}
                            <div className="lg:col-span-1 space-y-4">
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-500">{t.queue}</h2>
                                        <Badge variant="outline" className="border-emerald-500/20 text-emerald-400">
                                            {pendingVideos.data?.length || 0} {t.pendingItems}
                                        </Badge>
                                    </div>
                                    <Input
                                        placeholder={language === "pt" ? "Buscar por título..." : "Search by title..."}
                                        className="bg-zinc-900/50 border-zinc-800 h-10 text-xs"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-3">
                                    {pendingVideos.data?.length === 0 ? (
                                        <div className="p-8 text-center bg-zinc-900/40 rounded-2xl border border-dashed border-zinc-800 text-zinc-600">
                                            {t.noRequests}
                                        </div>
                                    ) : (
                                        (Array.isArray(pendingVideos.data) ? pendingVideos.data : [])
                                            .filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()))
                                            .map((video) => (
                                                <div
                                                    key={video.id}
                                                    onClick={() => setSelectedVideoId(video.id)}
                                                    className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 group ${selectedVideoId === video.id
                                                        ? "bg-emerald-500/10 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                                        : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700"
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <h3 className="font-bold text-zinc-200 group-hover:text-white transition-colors capitalize line-clamp-1">{video.title}</h3>
                                                        <Clock className="w-4 h-4 text-zinc-600" />
                                                    </div>
                                                    <div className="text-xs text-zinc-500 flex items-center gap-2">
                                                        <VideoIcon className="w-3 h-3" />
                                                        <span>{language === "pt" ? "Submetido" : "Submitted"} {new Date(video.createdAt!).toLocaleDateString()}</span>
                                                    </div>
                                                </div>
                                            ))
                                    )}
                                </div>
                            </div>

                            {/* Right: Detail & Form */}
                            <div className="lg:col-span-2">
                                {selectedVideoId ? (
                                    <AnalysisForm
                                        video={selectedVideo.data!}
                                        isSubmitting={isSubmitting}
                                        onSubmit={(data) => submit.mutate({ ...data, videoId: selectedVideoId })}
                                        isLoading={selectedVideo.isLoading}
                                    />
                                ) : (
                                    <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-zinc-900/20 rounded-3xl border border-dashed border-zinc-800/50 text-zinc-600 space-y-4">
                                        <div className="p-4 rounded-full bg-zinc-900">
                                            <ChevronRight className="w-8 h-8 opacity-20" />
                                        </div>
                                        <p>{t.selectToStart}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="manual">
                        <ManualGalleryPostForm />
                    </TabsContent>
                </Tabs>
            </div>
        </div >
    );
}

function AnalysisForm({ video, isSubmitting, onSubmit, isLoading }: { video: any, isSubmitting: boolean, onSubmit: (data: any) => void, isLoading: boolean }) {
    const { language } = useLanguage();
    const [rating, setRating] = useState(5);
    const [summary, setSummary] = useState("");
    const [feedbackVideoUrl, setFeedbackVideoUrl] = useState("");
    const [trainingUrl, setTrainingUrl] = useState("");
    const [teaserText, setTeaserText] = useState("");
    const [isPublic, setIsPublic] = useState(video?.allowPublic || false);

    const t = {
        session: language === "pt" ? "Sessão" : "Session",
        noDesc: language === "pt" ? "Sem descrição do cliente." : "No customer description.",
        watchButton: language === "pt" ? "Assistir Gameplay" : "Watch Gameplay",
        feedbackLabel: language === "pt" ? "Link do Vídeo de Feedback (Opcional)" : "Feedback Video Link (Optional)",
        feedbackPlaceholder: language === "pt" ? "Link do YouTube/TikTok (Deixe em branco se for apenas texto)" : "YouTube/TikTok Link (Leave blank if text only)",
        feedbackHint: language === "pt" ? "Se não houver vídeo, o cliente receberá apenas o resumo em texto abaixo." : "If no video, the customer will receive only the text summary below.",
        ratingLabel: language === "pt" ? "Nota Geral da Performance" : "Overall Performance Rating",
        extraLabel: language === "pt" ? "Conteúdo Recomendado (Extra)" : "Recommended Content (Extra)",
        extraPlaceholder: language === "pt" ? "Link de um treino ou dica (TikTok/YouTube)" : "Link to training or tip (TikTok/YouTube)",
        summaryLabel: language === "pt" ? "Feedback Profissional (Texto Profundo)" : "Professional Feedback (Deep Text)",
        summaryPlaceholder: language === "pt" ? "Descreva a mentalidade, os erros invisíveis e os pontos de melhora com profundidade intelectual..." : "Describe the mindset, invisible errors, and areas for improvement with intellectual depth...",
        galleryTitle: language === "pt" ? "Publicar na Galeria?" : "Publish to Gallery?",
        galleryDesc: language === "pt" ? "Visibilidade pública para marketing" : "Public visibility for marketing",
        authorized: language === "pt" ? "Cliente Autorizou" : "Client Authorized",
        notAuthorized: language === "pt" ? "Cliente NÃO autorizou explicitamente" : "Client did NOT explicitly authorize",
        teaserLabel: language === "pt" ? "Texto de Chamada (Teaser)" : "Teaser Text (Teaser)",
        teaserPlaceholder: language === "pt" ? "Ex: Um exemplo perfeito de movimentação..." : "Ex: A perfect example of movement...",
        submitBtn: language === "pt" ? "Enviar Análise para o Aluno" : "Send Analysis to Student"
    };

    // Update isPublic when video changes (e.g. when selecting a different video)
    React.useEffect(() => {
        if (video) {
            setIsPublic(video.allowPublic || false);
        }
    }, [video]);

    if (isLoading) return <div className="p-20 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto text-emerald-500" /></div>;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            overallRating: rating,
            summary,
            feedbackVideoUrl,
            recommendedVideoUrl: trainingUrl,
            teaserText: teaserText || (summary ? summary.substring(0, 50) + "..." : ""),
            isPublic
        });
    };

    return (
        <Card className="bg-zinc-900/60 border-zinc-800 text-white backdrop-blur-sm shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500">
            <CardHeader className="border-b border-zinc-800/50 pb-6">
                <div className="flex justify-between items-start">
                    <div>
                        <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 mb-2">{t.session} # {video?.id}</Badge>
                        <CardTitle className="text-2xl font-bold">{video?.title}</CardTitle>
                        <CardDescription className="text-zinc-400 mt-1 break-all">{video?.description || t.noDesc}</CardDescription>
                    </div>
                    <a href={video?.s3Url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20">
                            <Youtube className="w-4 h-4 mr-2" />
                            {t.watchButton}
                        </Button>
                    </a>
                </div>
            </CardHeader>
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Feedback Video Link (Crucial for User) */}
                    <div className="space-y-2 group">
                        <Label htmlFor="feedbackVideoUrl" className="text-zinc-400 group-focus-within:text-emerald-400">{t.feedbackLabel}</Label>
                        <Input
                            id="feedbackVideoUrl"
                            placeholder={t.feedbackPlaceholder}
                            className="bg-zinc-950 border-zinc-800 focus:border-emerald-500 h-12"
                            value={feedbackVideoUrl}
                            onChange={(e) => setFeedbackVideoUrl(e.target.value)}
                        />
                        <p className="text-[10px] text-zinc-600">{t.feedbackHint}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Rating */}
                        <div className="space-y-3">
                            <Label className="text-zinc-400">{t.ratingLabel}</Label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        onClick={() => setRating(s)}
                                        className={`p-3 rounded-lg border transition-all ${rating >= s ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-600"
                                            }`}
                                    >
                                        <Star className={`w-5 h-5 ${rating >= s ? "fill-current" : ""}`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Extra Content */}
                        <div className="space-y-2">
                            <Label className="text-zinc-400">{t.extraLabel}</Label>
                            <Input
                                placeholder={t.extraPlaceholder}
                                className="bg-zinc-950 border-zinc-800 h-12"
                                value={trainingUrl}
                                onChange={(e) => setTrainingUrl(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Summary (Deep Psicanalist Feedback) */}
                    <div className="space-y-2">
                        <Label className="text-zinc-400">{t.summaryLabel}</Label>
                        <Textarea
                            placeholder={t.summaryPlaceholder}
                            className="min-h-[150px] bg-zinc-950 border-zinc-800 focus:ring-emerald-500/40"
                            required
                            value={summary}
                            onChange={(e) => setSummary(e.target.value)}
                        />
                    </div>

                    <div className="pt-6 border-t border-zinc-800 space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label className="text-base text-zinc-200 uppercase font-black tracking-tighter">{t.galleryTitle}</Label>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">{t.galleryDesc}</p>
                                {video?.allowPublic ? (
                                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[9px] mt-1">
                                        <CheckCircle2 className="w-3 h-3 mr-1" /> {t.authorized}
                                    </Badge>
                                ) : (
                                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20 text-[9px] mt-1">
                                        ⚠️ {t.notAuthorized}
                                    </Badge>
                                )}
                            </div>
                            <Switch checked={isPublic} onCheckedChange={setIsPublic} />
                        </div>

                        {isPublic && (
                            <div className="space-y-2 animate-in fade-in slide-in-from-top-2">
                                <Label className="text-zinc-400">{t.teaserLabel}</Label>
                                <Textarea
                                    placeholder={t.teaserPlaceholder}
                                    className="bg-zinc-950 border-zinc-800"
                                    value={teaserText}
                                    onChange={(e) => setTeaserText(e.target.value)}
                                />
                                <p className="text-[10px] text-zinc-600 italic">
                                    {language === "pt" ? "Este texto aparecerá na galeria pública. Mantenha o mistério para incentivar a compra." : "This text will appear in the public gallery. Maintain the mystery to encourage purchase."}
                                </p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-emerald-900/20"
                        >
                            {isSubmitting ? (
                                <><Loader2 className="w-5 h-5 animate-spin mr-2" /> {language === "pt" ? "Enviando..." : "Sending..."}</>
                            ) : (
                                <><CheckCircle2 className="w-5 h-5 mr-2" /> {t.submitBtn}</>
                            )}
                        </Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    );
}

function ManualGalleryPostForm() {
    const { language } = useLanguage();
    const { toast } = useToast();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [rating, setRating] = useState(5);
    const [summary, setSummary] = useState("");
    const [feedbackVideoUrl, setFeedbackVideoUrl] = useState("");
    const [teaserText, setTeaserText] = useState("");

    const t = {
        title: language === "pt" ? "Criar Novo Exemplo Público" : "Create New Public Example",
        desc: language === "pt" ? "Use esta seção para popular a galeria com gameplays de exemplo sem depender de um pedido de cliente." : "Use this section to populate the gallery with example gameplays without relying on a customer order.",
        labelTitle: language === "pt" ? "Título do Exemplo" : "Example Title",
        placeholderTitle: language === "pt" ? "Ex: Rush Insano no Rebirth" : "Ex: Insane Rush on Rebirth",
        labelOriginal: language === "pt" ? "URL da Gameplay Original" : "Original Gameplay URL",
        placeholderOriginal: language === "pt" ? "Link do YouTube ou TikTok" : "YouTube or TikTok link",
        labelHappened: language === "pt" ? "Pequena Descrição (O que aconteceu?)" : "Short Description (What happened?)",
        labelFeedback: language === "pt" ? "Link do Seu Feedback (Opcional)" : "Your Feedback Link (Optional)",
        placeholderOptional: language === "pt" ? "Sua análise gravada (Opcional)" : "Your recorded analysis (Optional)",
        labelRating: language === "pt" ? "Nota da Gameplay" : "Gameplay Rating",
        labelFinalSummary: language === "pt" ? "Resumo Final (Psicanálise)" : "Final Summary (Psychoanalysis)",
        placeholderFinalSummary: language === "pt" ? "Texto profundo sobre o que foi analisado..." : "Deep text about what was analyzed...",
        labelTeaser: language === "pt" ? "Texto Teaser (Galeria)" : "Teaser Text (Gallery)",
        placeholderTeaser: language === "pt" ? "Texto para atrair cliques..." : "Text to attract clicks...",
        submitBtn: language === "pt" ? "Publicar Exemplo Profissional" : "Publish Professional Example",
        successMsg: language === "pt" ? "Exemplo postado com sucesso!" : "Example posted successfully!",
        errorMsg: language === "pt" ? "Erro ao postar" : "Error posting",
        postingMsg: language === "pt" ? "Publicando..." : "Publishing..."
    };

    const submit = api.upload.createManualGalleryPost.useMutation({
        onSuccess: () => {
            toast({ title: t.successMsg, variant: "default" });
            setTitle(""); setDescription(""); setVideoUrl(""); setSummary(""); setFeedbackVideoUrl(""); setTeaserText("");
        },
        onError: (err) => {
            console.error("Erro ao postar exemplo:", err);
            // Tenta extrair erro de validação (Zod) se existir
            const zodErrors = (err as any).data?.zodError?.fieldErrors;
            const detail = zodErrors ?
                Object.entries(zodErrors).map(([field, msgs]) => `${field}: ${(msgs as string[]).join(", ")}`).join(" | ") :
                err.message;

            toast({
                title: t.errorMsg,
                description: detail || "Erro desconhecido no servidor",
                variant: "destructive"
            });
        }
    });

    const isSubmitting = submit.isPending;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload = {
            title, description, videoUrl, rating, summary, feedbackVideoUrl, teaserText
        };
        console.log("[FRONTEND] Sending payload:", payload);
        console.log("[FRONTEND] Payload type:", typeof payload);
        console.log("[FRONTEND] Payload JSON:", JSON.stringify(payload));
        submit.mutate(payload);
    };

    return (
        <Card className="bg-zinc-900/60 border-zinc-800 text-white backdrop-blur-sm shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <Plus className="w-6 h-6 text-emerald-500" />
                    {t.title}
                </CardTitle>
                <CardDescription>{t.desc}</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>{t.labelTitle}</Label>
                            <Input value={title} onChange={e => setTitle(e.target.value)} required placeholder={t.placeholderTitle} className="bg-zinc-950 border-zinc-800" />
                        </div>
                        <div className="space-y-2">
                            <Label>{t.labelOriginal}</Label>
                            <Input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} required placeholder={t.placeholderOriginal} className="bg-zinc-950 border-zinc-800" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>{t.labelHappened}</Label>
                        <Textarea value={description} onChange={e => setDescription(e.target.value)} className="bg-zinc-950 border-zinc-800" />
                    </div>

                    <div className="pt-6 border-t border-zinc-800">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>{t.labelFeedback}</Label>
                                <Input value={feedbackVideoUrl} onChange={e => setFeedbackVideoUrl(e.target.value)} placeholder={t.placeholderOptional} className="bg-zinc-950 border-zinc-800 border-emerald-500/20" />
                            </div>
                            <div className="space-y-2">
                                <Label>{t.labelRating}</Label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <button key={s} type="button" onClick={() => setRating(s)} className={`p-2 rounded border ${rating >= s ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-600"}`}>
                                            <Star className={`w-4 h-4 ${rating >= s ? "fill-current" : ""}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>{t.labelFinalSummary}</Label>
                        <Textarea value={summary} onChange={e => setSummary(e.target.value)} required placeholder={t.placeholderFinalSummary} className="min-h-[120px] bg-zinc-950 border-zinc-800" />
                    </div>

                    <div className="space-y-2">
                        <Label>{t.labelTeaser}</Label>
                        <Textarea value={teaserText} onChange={e => setTeaserText(e.target.value)} required placeholder={t.placeholderTeaser} className="bg-zinc-950 border-zinc-800" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-emerald-600 hover:bg-emerald-500 font-bold text-lg rounded-xl">
                        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> {t.postingMsg}</> : <><Plus className="w-5 h-5 mr-2" /> {t.submitBtn}</>}
                    </Button>
                </form>
            </CardContent>
        </Card >
    );
}
