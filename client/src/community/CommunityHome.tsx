import React from "react";
import { Switch, Route, Link } from "wouter";
import HomePublic from "./pages/HomePublic";
import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import CommunityLegal from "./pages/CommunityLegal";
import { PaymentSuccess, PaymentCancel } from "./pages/PaymentStatus";

export default function CommunityHome() {
    return (
        <Switch>
            <Route path="/community" component={HomePublic} />
            <Route path="/community/login" component={LoginPage} />
            <Route path="/community/payment-success" component={PaymentSuccess} />
            <Route path="/community/payment-cancel" component={PaymentCancel} />
            <Route path="/community/legal" component={CommunityLegal} />

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
