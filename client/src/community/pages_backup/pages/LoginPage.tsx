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

import { useLanguage } from "@/contexts/LanguageContext";

export default function LoginPage() {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const { language } = useLanguage();

    // Form States
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [, setLocation] = useLocation();

    const t = {
        title: language === "pt" ? "Acesso SLX" : "SLX Access",
        welcomeBack: language === "pt" ? "Bem-vindo de volta! 🎮" : "Welcome back! 🎮",
        loginSuccess: language === "pt" ? "Login realizado com sucesso." : "Login successful.",
        loginError: language === "pt" ? "Erro no login" : "Login error",
        connError: language === "pt" ? "Erro de conexão" : "Connection error",
        connDesc: language === "pt" ? "Não foi possível contatar o servidor." : "Could not contact the server.",
        accountCreated: language === "pt" ? "Conta criada! 🚀" : "Account created! 🚀",
        journeyStarted: language === "pt" ? "Sua jornada rumo ao prime começou." : "Your journey to the prime has started.",
        regError: language === "pt" ? "Erro no registro" : "Registration error",
        login: language === "pt" ? "Login" : "Login",
        register: language === "pt" ? "Criar Conta" : "Create Account",
        emailLabel: language === "pt" ? "E-mail de Acesso" : "Access Email",
        registerEmailLabel: language === "pt" ? "Melhor E-mail" : "Best Email",
        passwordLabel: language === "pt" ? "Senha Secreta" : "Secret Password",
        passwordPlaceholder: language === "pt" ? "••••••••" : "••••••••",
        submitLogin: language === "pt" ? "Entrar no Portal SLX" : "Enter SLX Portal",
        submitRegister: language === "pt" ? "Finalizar Cadastro" : "Finish Registration",
        nameLabel: language === "pt" ? "Seu Nome / Tag" : "Your Name / Tag",
        namePlaceholder: language === "pt" ? "Como quer ser chamado?" : "How should we call you?",
        googleLogin: language === "pt" ? "Acessar com Google" : "Access with Google",
        socialTitle: language === "pt" ? "Ou use uma rede social" : "Or use a social network",
        termsText: language === "pt" ? "Ao acessar, você concorda com nossos" : "By accessing, you agree to our",
        termsLink: language === "pt" ? "Termos de Uso" : "Terms of Use",
        policyLink: language === "pt" ? "Política de Reembolso" : "Refund Policy",
        doubts: language === "pt" ? "Dúvidas sobre o projeto?" : "Questions about the project?",
        ourMethod: language === "pt" ? "Nossa Metodologia" : "Our Methodology",
    };

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
                toast({ title: t.welcomeBack, description: t.loginSuccess });
                // Use replace to prevent back-button loops
                window.location.replace("/community/dashboard");
            } else {
                toast({ title: t.loginError, description: data.message, variant: "destructive" });
            }
        } catch (error) {
            toast({ title: t.connError, description: t.connDesc, variant: "destructive" });
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
                toast({ title: t.accountCreated, description: t.journeyStarted });
                // Use replace to prevent back-button loops
                window.location.replace("/community/dashboard");
            } else {
                toast({ title: t.regError, description: data.message, variant: "destructive" });
            }
        } catch (error) {
            toast({ title: t.connError, description: t.connDesc, variant: "destructive" });
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
                    <CardTitle className="text-3xl font-black tracking-tighter uppercase">{t.title}</CardTitle>
                    <CardDescription className="text-zinc-400 font-medium pt-2">
                        {language === "pt"
                            ? "Acesse sua conta de forma segura utilizando sua Identidade Google."
                            : "Access your account securely using your Google Identity."}
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 pb-10 pt-6">
                    <Button
                        onClick={handleGoogleLogin}
                        className="w-full h-16 bg-white text-zinc-950 hover:bg-zinc-200 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                        <Chrome className="w-6 h-6" />
                        {t.googleLogin}
                    </Button>

                    <div className="space-y-4">
                        <p className="text-[10px] text-zinc-600 text-center uppercase tracking-widest font-black px-4 leading-relaxed">
                            {t.termsText}{" "}
                            <Link href="/community/legal">
                                <span className="text-emerald-500 hover:underline cursor-pointer">{t.termsLink}</span>
                            </Link>{" "}
                            {language === "pt" ? "e" : "&"}{" "}
                            <Link href="/community/legal#reembolso">
                                <span className="text-emerald-500 hover:underline cursor-pointer">{t.policyLink}</span>
                            </Link>.
                        </p>

                        <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                            <p className="text-[10px] text-zinc-500 font-medium">
                                {language === "pt"
                                    ? "Para sua segurança, desativamos o login por senha. Suas informações agora são protegidas pela criptografia do Google."
                                    : "For your security, password login is disabled. Your information is now protected by Google encryption."}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-8 text-zinc-600 text-sm flex items-center gap-2 group cursor-pointer hover:text-zinc-400 transition-colors">
                <span>{t.doubts}</span>
                <a href="/community#metodologia" className="text-emerald-500 font-bold hover:underline flex items-center gap-1 font-mono uppercase tracking-tighter text-xs">
                    {t.ourMethod} <ArrowRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    );
}

