import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Gamepad2,
    ShieldCheck,
    Zap,
    ArrowRight,
    Chrome,
    Mail,
    Lock,
    User as UserIcon,
    Loader2,
    Eye,
    EyeOff
} from "lucide-react";
import { CommunityHeader } from "../components/CommunityHeader";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation, Link } from "wouter";

export default function LoginPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

    // Form States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [, setLocation] = useLocation();

    // Check for existing session
    const { data: auth, isLoading: isCheckingAuth } = useQuery({
        queryKey: ["/api/community/auth/me"],
        queryFn: async () => {
            const res = await fetch("/api/community/auth/me");
            if (!res.ok) return { loggedIn: false };
            return res.json();
        }
    });

    useEffect(() => {
        if (auth?.loggedIn) {
            setLocation("/community/dashboard");
        }
    }, [auth, setLocation]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch("/api/community/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                toast({ title: "Bem-vindo de volta! 🎮", description: "Login realizado com sucesso." });
                setLocation("/community/dashboard");
            } else {
                toast({ title: "Erro no login", description: data.message, variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "Erro de conexão", description: "Não foi possível contatar o servidor.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await fetch("/api/community/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, name })
            });
            const data = await res.json();
            if (res.ok) {
                toast({ title: "Conta criada! 🚀", description: "Sua jornada rumo ao prime começou." });
                setLocation("/community/dashboard");
            } else {
                toast({ title: "Erro no registro", description: data.message, variant: "destructive" });
            }
        } catch (error) {
            toast({ title: "Erro de conexão", description: "Não foi possível contatar o servidor.", variant: "destructive" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = "/api/community/auth/google";
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans relative overflow-hidden flex flex-col items-center justify-center p-4">
            <CommunityHeader />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <Card className="w-full max-w-md bg-zinc-900/40 border-zinc-800/60 backdrop-blur-xl shadow-2xl rounded-[32px] overflow-hidden animate-in fade-in zoom-in-95 duration-700 relative z-10">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-cyan-500" />

                <CardHeader className="space-y-4 pt-8 text-center pb-2">
                    <div className="mx-auto p-3 bg-emerald-500/10 rounded-2xl w-fit">
                        <Gamepad2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <CardTitle className="text-3xl font-black tracking-tighter uppercase">Acesso SLX</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 pb-10">
                    {isLoggedIn || currentUser ? (
                        <div className="space-y-6 py-4 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center space-y-2">
                                <div className="mx-auto w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-xl font-bold">Olá, {currentUser?.name || "Jogador"}!</h3>
                                <p className="text-zinc-500 text-sm">O que você deseja fazer agora?</p>
                            </div>

                            <div className="grid grid-cols-1 gap-3">
                                <Button
                                    onClick={() => window.location.href = "/community/dashboard"}
                                    className="h-14 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-widest rounded-2xl border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 transition-all"
                                >
                                    Ir para Área do Aluno
                                </Button>

                                <Button
                                    variant="outline"
                                    onClick={async () => {
                                        const res = await fetch("/api/community/auth/promote-me-to-admin", { method: "POST" });
                                        if (res.ok) {
                                            toast({ title: "Modo Analista Ativado! 💎" });
                                            window.location.href = "/community/admin";
                                        }
                                    }}
                                    className="h-14 border-zinc-800 bg-zinc-950/50 text-emerald-400 font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-500/10 transition-all"
                                >
                                    Ativar Modo Analista (Admin)
                                </Button>

                                <Button
                                    variant="ghost"
                                    onClick={() => window.location.reload()}
                                    className="text-zinc-600 uppercase text-[10px] font-bold"
                                >
                                    Sair da Conta
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Tabs defaultValue="login" className="w-full">
                                <TabsList className="grid w-full grid-cols-2 bg-zinc-950/50 border border-zinc-800 p-1 h-12 rounded-2xl mb-8">
                                    <TabsTrigger value="login" className="rounded-xl data-[state=active]:bg-zinc-800 data-[state=active]:text-emerald-400 font-bold transition-all">Login</TabsTrigger>
                                    <TabsTrigger value="register" className="rounded-xl data-[state=active]:bg-zinc-800 data-[state=active]:text-emerald-400 font-bold transition-all">Criar Conta</TabsTrigger>
                                </TabsList>

                                <TabsContent value="login" className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500">
                                    <form onSubmit={handleLogin} className="space-y-4">
                                        <div className="space-y-2 group">
                                            <Label className="text-zinc-500 group-focus-within:text-emerald-400 transition-colors text-xs font-black uppercase tracking-widest ml-1">E-mail de Acesso</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
                                                <Input
                                                    type="email"
                                                    required
                                                    className="bg-zinc-950/50 border-zinc-800 h-14 pl-12 rounded-2xl focus:ring-emerald-500/50 transition-all font-medium"
                                                    placeholder="seu@email.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group">
                                            <Label className="text-zinc-500 group-focus-within:text-emerald-400 transition-colors text-xs font-black uppercase tracking-widest ml-1">Senha Secreta</Label>
                                            <div className="relative">
                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    className="bg-zinc-950/50 border-zinc-800 h-14 pl-12 pr-12 rounded-2xl focus:ring-emerald-500/50 transition-all font-medium"
                                                    placeholder="••••••••"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-emerald-500 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>
                                        <Button type="submit" disabled={isLoading} className="w-full h-14 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-1 transition-all group overflow-hidden relative">
                                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Entrar no Portal SLX"}
                                        </Button>
                                    </form>
                                </TabsContent>

                                <TabsContent value="register" className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                                    <form onSubmit={handleRegister} className="space-y-4">
                                        <div className="space-y-2 group">
                                            <Label className="text-zinc-500 group-focus-within:text-emerald-400 transition-colors text-xs font-black uppercase tracking-widest ml-1">Seu Nome / Tag</Label>
                                            <div className="relative">
                                                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />
                                                <Input
                                                    required
                                                    className="bg-zinc-950/50 border-zinc-800 h-14 pl-12 rounded-2xl"
                                                    placeholder="Como quer ser chamado?"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group">
                                            <Label className="text-zinc-500 group-focus-within:text-emerald-400 transition-colors text-xs font-black uppercase tracking-widest ml-1">Melhor E-mail</Label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                <Input
                                                    type="email"
                                                    required
                                                    className="bg-zinc-950/50 border-zinc-800 h-14 pl-12 rounded-2xl"
                                                    placeholder="seu@estudo.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2 group">
                                            <Label className="text-zinc-500 group-focus-within:text-emerald-400 transition-colors text-xs font-black uppercase tracking-widest ml-1">Senha Segura</Label>
                                            <div className="relative">
                                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    required
                                                    className="bg-zinc-950/50 border-zinc-800 h-14 pl-12 pr-12 rounded-2xl"
                                                    placeholder="Mínimo 6 caracteres"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-emerald-500 transition-colors"
                                                >
                                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                </button>
                                            </div>
                                        </div>
                                        <Button type="submit" disabled={isLoading} className="w-full h-14 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl transition-all">
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Finalizar Cadastro"}
                                        </Button>
                                    </form>
                                </TabsContent>
                            </Tabs>

                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-zinc-800" /></div>
                                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-widest">
                                    <span className="bg-zinc-900 px-4 text-zinc-600">Ou use uma rede social</span>
                                </div>
                            </div>

                            <Button
                                onClick={handleGoogleLogin}
                                variant="outline"
                                className="w-full h-14 border-zinc-800 bg-zinc-950/30 text-emerald-400 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-500/10 transition-all"
                            >
                                <Chrome className="w-5 h-5" />
                                Acessar com Google
                            </Button>

                            <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest font-bold px-4">
                                Ao acessar, você concorda com nossos{" "}
                                <Link href="/community/legal">
                                    <span className="text-emerald-500 hover:underline cursor-pointer">Termos de Uso</span>
                                </Link>{" "}
                                e{" "}
                                <Link href="/community/legal#reembolso">
                                    <span className="text-emerald-500 hover:underline cursor-pointer">Política de Reembolso</span>
                                </Link>.
                            </p>
                        </>
                    )}
                </CardContent>
            </Card>

            <div className="mt-8 text-zinc-600 text-sm flex items-center gap-2 group cursor-pointer hover:text-zinc-400 transition-colors">
                <span>Dúvidas sobre o projeto?</span>
                <a href="/community#metodologia" className="text-emerald-500 font-bold hover:underline flex items-center gap-1 font-mono uppercase tracking-tighter text-xs">
                    Nossa Metodologia <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

