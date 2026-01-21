import React from "react";
import { Switch, Route, Link } from "wouter";
import HomePublic from "./pages/HomePublic";
import UploadWizard from "./pages/UploadWizard";
import AnalystDashboard from "./pages/AnalystDashboard";
import Gallery from "./pages/Gallery";
import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import CommunityLegal from "./pages/CommunityLegal";
import { PaymentSuccess, PaymentCancel } from "./pages/PaymentStatus";
import { trpc } from "./lib/trpc";
import { useQuery } from "@tanstack/react-query";

export default function CommunityHome() {
    // Health check
    const health = trpc.health.check.useQuery();

    // Auth Check
    const { data: auth, isLoading: isAuthLoading } = useQuery({
        queryKey: ["/api/community/auth/me"],
        queryFn: async () => {
            const res = await fetch("/api/community/auth/me");
            if (!res.ok) return { loggedIn: false };
            return res.json();
        }
    });

    if (health.isLoading || isAuthLoading) return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-emerald-500">
            <span className="animate-pulse font-black tracking-tighter text-2xl">SLX...</span>
        </div>
    );

    const user = auth?.user;
    const isAdmin = user?.role === "admin";

    return (
        <Switch>
            <Route path="/community" component={HomePublic} />
            <Route path="/community/gallery" component={Gallery} />
            <Route path="/community/login" component={LoginPage} />
            <Route path="/community/payment-success" component={PaymentSuccess} />
            <Route path="/community/payment-cancel" component={PaymentCancel} />
            <Route path="/community/legal" component={CommunityLegal} />

            {/* Proteção para o Aluno (Qualquer logado) */}
            <Route path="/community/upload">
                {auth?.loggedIn ? <UploadWizard /> : <LoginPage />}
            </Route>
            <Route path="/community/dashboard">
                {auth?.loggedIn ? <StudentDashboard /> : <LoginPage />}
            </Route>

            {/* Proteção para o Admin (Apenas SLX) */}
            <Route path="/community/admin">
                {isAdmin ? <AnalystDashboard /> : (
                    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white p-10 text-center space-y-4">
                        <h1 className="text-4xl font-black text-red-500">ACESSO NEGADO</h1>
                        <p className="text-zinc-500 max-w-md">Esta área é exclusiva para o analista SLX. Se você é o SLX, certifique-se de estar logado com a conta correta.</p>
                        <a href="/community/login" className="px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all font-bold">
                            Tentar Login
                        </a>
                        <Link href="/community">
                            <span className="text-emerald-500 hover:underline cursor-pointer">Voltar para o Início</span>
                        </Link>
                    </div>
                )}
            </Route>

            {/* Fallback para 404 dentro da comunidade */}
            <Route>
                <div className="text-white p-10 text-center">
                    <h1 className="text-2xl">Página não encontrada na Comunidade</h1>
                    <a href="/community" className="text-emerald-500 hover:underline">Voltar para Início</a>
                </div>
            </Route>
        </Switch>
    );
}
