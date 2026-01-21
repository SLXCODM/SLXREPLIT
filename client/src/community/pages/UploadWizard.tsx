import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2, UploadCloud, CheckCircle2, Youtube, CreditCard, ArrowRight } from "lucide-react";
import { api } from "../lib/trpc";
import { useToast } from "@/hooks/use-toast";

export default function UploadWizard() {
    const [, setLocation] = useLocation();
    const { toast } = useToast();

    // Verificar se é admin via session
    const [isAdmin, setIsAdmin] = React.useState(false);

    React.useEffect(() => {
        fetch('/api/community/auth/me')
            .then(res => res.json())
            .then(data => {
                if (data.user?.role === 'admin') {
                    setIsAdmin(true);
                }
            })
            .catch(() => setIsAdmin(false));
    }, []);

    // Form State
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [allowPublic, setAllowPublic] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Mutation (Deprecated - Using direct fetch for Stripe redirect)
    // const createSession = api.upload.createUploadSession.useMutation({...});



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic YouTube URL Validation
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be|tiktok\.com)\/.+$/;
        if (!youtubeRegex.test(videoUrl)) {
            toast({
                title: "Link Inválido",
                description: "Por favor, insira um link válido do YouTube ou TikTok.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);
        try {
            console.log("[Checkout] Iniciando processo de pagamento...");
            // 1. Chamar o Checkout do Stripe (O backend agora cria o registro no DB e a sessão do Stripe juntos)
            const checkoutRes = await fetch("/api/community/create-checkout-session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    videoUrl: videoUrl,
                    price: "R$ 37,00",
                    allowPublic: allowPublic
                })
            });

            const checkoutData = await checkoutRes.json();

            if (checkoutData.url) {
                // Redireciona para o Stripe
                window.location.href = checkoutData.url;
            } else {
                throw new Error(checkoutData.error || "Erro ao iniciar pagamento.");
            }

        } catch (error: any) {
            toast({
                title: "Falha ao processar",
                description: error.message || "Ocorreu um erro inesperado.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0% { transform: translateX(-200%); }
                    100% { transform: translateX(200%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
                .neon-text-glow {
                    filter: drop-shadow(0 0 8px rgba(52, 211, 153, 0.6)) drop-shadow(0 0 20px rgba(6, 182, 212, 0.4));
                }
            `}} />

            <Card className="w-full max-w-2xl bg-zinc-900/80 border-zinc-800 text-zinc-100 backdrop-blur-md relative z-10 animate-in fade-in zoom-in-95 duration-500 shadow-2xl">
                <CardHeader className="space-y-1 text-center border-b border-zinc-800/50 pb-8">
                    <CardTitle className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 neon-text-glow">
                        Enviar Gameplay
                    </CardTitle>
                    {isAdmin && (
                        <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-emerald-400 text-sm font-bold">
                            🎯 ADMIN MODE - ENVIO SEM PAGAMENTO
                        </div>
                    )}
                    <CardDescription className="text-zinc-400 text-lg">
                        {isAdmin
                            ? "Como admin, você pode testar TUDO sem pagar!"
                            : "Preencha os dados e realize o pagamento para receber sua análise profissional."
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-2 group">
                            <Label htmlFor="title" className="text-zinc-300 group-focus-within:text-emerald-400 transition-colors">Título do Vídeo</Label>
                            <Input
                                id="title"
                                placeholder="Ex: Rankeada Lendário - Hardpoint"
                                className="bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-emerald-500/50 focus:border-emerald-500/50 h-12 transition-all duration-300 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="space-y-2 group">
                            <Label htmlFor="description" className="text-zinc-300 group-focus-within:text-emerald-400 transition-colors">Descrição / Foco da Análise</Label>
                            <Textarea
                                id="description"
                                placeholder="Ex: Quero melhorar meu posicionamento e entender o que estou fazendo de errado."
                                className="min-h-[120px] bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="space-y-4 group">
                            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-4 space-y-3">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-emerald-500/10 rounded-lg shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-emerald-400 font-medium text-sm">Como enviar seu vídeo?</h4>
                                        <ol className="text-xs text-zinc-400 space-y-1 list-decimal list-inside">
                                            <li>Faça upload do seu vídeo no <strong>YouTube</strong> ou <strong>TikTok</strong>.</li>
                                            <li>Se for no YouTube, pode deixar como <strong>"Não Listado"</strong> para manter sua privacidade.</li>
                                            <li>Copie o link gerado e cole no campo abaixo.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="videoUrl" className="text-zinc-300 group-focus-within:text-emerald-400 transition-colors flex items-center gap-2">
                                    Link do Vídeo
                                </Label>
                                <div className="relative">
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                                    </div>
                                    <Input
                                        id="videoUrl"
                                        placeholder="Cole aqui o link (Ex: https://youtu.be/...)"
                                        className="pl-10 bg-zinc-950/50 border-zinc-800 text-white placeholder:text-zinc-600 focus:ring-emerald-500/50 focus:border-emerald-500/50 h-12 transition-all duration-300 focus:shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                                        required
                                        value={videoUrl}
                                        onChange={(e) => setVideoUrl(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 p-4 bg-zinc-950/30 border border-zinc-800 rounded-xl group hover:border-emerald-500/30 transition-all duration-300">
                            <Switch
                                id="allowPublic"
                                checked={allowPublic}
                                onCheckedChange={setAllowPublic}
                                className="data-[state=checked]:bg-emerald-500"
                            />
                            <div className="space-y-1 cursor-pointer" onClick={() => setAllowPublic(!allowPublic)}>
                                <Label htmlFor="allowPublic" className="text-zinc-200 font-bold cursor-pointer group-hover:text-emerald-400 transition-colors">
                                    Autorizar Uso em Redes Sociais
                                </Label>
                                <p className="text-[10px] text-zinc-500 leading-tight">
                                    Ao marcar, você autoriza o SLX a postar trechos desta análise na Galeria Pública e em Redes Sociais (TikTok, Instagram, YouTube) para fins educativos e de marketing.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-zinc-800/50">
                            <div className="flex items-center justify-between mb-6 p-6 bg-gradient-to-r from-emerald-900/20 to-zinc-900/50 rounded-xl border border-emerald-500/20 shadow-inner">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-full bg-emerald-500/10">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-emerald-100 uppercase tracking-tighter">Investimento Requerido</span>
                                        <span className="text-[10px] text-emerald-500/70 uppercase tracking-widest font-black">Triade SLX: Pro Analysis</span>
                                    </div>
                                </div>
                                <span className="text-3xl font-black text-white tracking-tight">R$ 37,00</span>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white h-14 text-lg font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transform hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 border border-emerald-400/30 relative overflow-hidden group"
                                disabled={isSubmitting}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] animate-shimmer" />
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Processando...
                                    </>
                                ) : (
                                    "Finalizar Pedido e Pagar"
                                )}
                                <CreditCard className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
