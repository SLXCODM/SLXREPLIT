import React from "react";
import { Link } from "wouter";
import { CheckCircle2, XCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function PaymentSuccess() {
    const { language } = useLanguage();

    const t = {
        title: language === "pt" ? "ORDEM RECEBIDA!" : "ORDER RECEIVED!",
        desc: language === "pt"
            ? "Seu pagamento foi confirmado com sucesso. O Analista SLX já foi notificado e sua análise começará em breve."
            : "Your payment was successfully confirmed. Analyst SLX has been notified and your analysis will begin shortly.",
        homeBtn: language === "pt" ? "Voltar para Início" : "Back to Home",
        galleryBtn: language === "pt" ? "Ver Galeria" : "View Gallery",
        dashboardBtn: language === "pt" ? "Ir para Dashboard" : "Go to Dashboard"
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="p-6 bg-emerald-500/10 rounded-full mb-6">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">{t.title}</h1>
            <p className="text-zinc-400 max-w-md mb-8">
                {t.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/community/dashboard">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8 h-12 font-bold min-w-[160px]">
                        {t.dashboardBtn}
                    </Button>
                </Link>
                <Link href="/community/gallery">
                    <Button variant="outline" className="border-zinc-800 text-zinc-400 hover:text-white rounded-full px-8 h-12 font-bold min-w-[160px]">
                        {t.galleryBtn} <Play className="w-4 h-4 ml-2 fill-current" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export function PaymentCancel() {
    const { language } = useLanguage();

    const t = {
        title: language === "pt" ? "PAGAMENTO CANCELADO" : "PAYMENT CANCELED",
        desc: language === "pt"
            ? "Não se preocupe, nenhuma cobrança foi realizada. Se tiver dúvidas, estamos à disposição."
            : "Don't worry, no charges were made. If you have any questions, we're here to help.",
        retryBtn: language === "pt" ? "Tentar Novamente" : "Try Again"
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="p-6 bg-red-500/10 rounded-full mb-6">
                <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">{t.title}</h1>
            <p className="text-zinc-400 max-w-md mb-8">
                {t.desc}
            </p>
            <Link href="/community/upload">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-8 h-12 font-bold">
                    {t.retryBtn} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
        </div>
    );
}
