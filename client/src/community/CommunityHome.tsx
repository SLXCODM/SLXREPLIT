import React from "react";
import { Switch, Route, Link } from "wouter";
import HomePublic from "./pages/HomePublic";
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
    const isAdmin = !!(auth?.loggedIn && user?.role === "admin");

    console.log("[CommunityHome] Auth Status:", { loggedIn: auth?.loggedIn, role: user?.role });

    return (
        <Switch>
            <Route path="/community" component={HomePublic} />
            <Route path="/community/login" component={LoginPage} />
            <Route path="/community/payment-success" component={PaymentSuccess} />
            <Route path="/community/payment-cancel" component={PaymentCancel} />
            <Route path="/community/legal" component={CommunityLegal} />

            {/* Proteção para o Aluno (Qualquer logado) */}
            <Route path="/community/dashboard">
                {auth?.loggedIn ? <StudentDashboard /> : <LoginPage />}
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
