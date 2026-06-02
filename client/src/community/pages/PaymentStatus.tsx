import React from "react";
import { Link } from "wouter";
import { CheckCircle2, XCircle, ArrowRight, AlertTriangle, FileText, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdmSSfGP-JgrGqnMMMmJFqXFE1Q5FPk7N7lxpCbqlj7_CxLhA/viewform";

export function PaymentSuccess() {
    const { language } = useLanguage();

    const t = {
        title: language === "pt" ? "PAGAMENTO CONFIRMADO!" : "PAYMENT CONFIRMED!",
        desc: language === "pt"
            ? "Obrigado! Agora falta só enviar sua gameplay pelo formulário abaixo."
            : "Thank you! Now just submit your gameplay through the form below.",
        warningTitle: language === "pt" ? "Antes de continuar:" : "Before continuing:",
        warningText: language === "pt"
            ? "Tire um print/screenshot do seu comprovante de pagamento AGORA. Você precisará enviá-lo no formulário."
            : "Take a screenshot of your payment receipt NOW. You will need to upload it in the form.",
        formBtn: language === "pt" ? "Abrir Formulário de Envio" : "Open Submission Form",
        homeBtn: language === "pt" ? "Voltar para Início" : "Back to Home",
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-lg w-full space-y-8">
                {/* Success Icon */}
                <div className="flex flex-col items-center gap-4">
                    <div className="p-5 bg-emerald-500/10 rounded-full">
                        <CheckCircle2 className="w-14 h-14 text-emerald-500" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter">{t.title}</h1>
                    <p className="text-zinc-400 text-lg">{t.desc}</p>
                </div>

                {/* Warning Card */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 text-left space-y-3">
                    <div className="flex items-center gap-3">
                        <Camera className="w-6 h-6 text-amber-400 flex-shrink-0" />
                        <p className="font-bold text-amber-300 text-base">{t.warningTitle}</p>
                    </div>
                    <p className="text-amber-200/80 text-sm leading-relaxed pl-9">
                        {t.warningText}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4">
                    <a href={GOOGLE_FORMS_URL} target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white h-14 text-lg font-black rounded-2xl shadow-lg shadow-emerald-900/40 transition-all group">
                            <FileText className="w-5 h-5 mr-2" />
                            {t.formBtn}
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                    <Link href="/community">
                        <Button variant="ghost" className="w-full text-zinc-500 hover:text-zinc-300 h-12 rounded-2xl">
                            {t.homeBtn}
                        </Button>
                    </Link>
                </div>
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
        retryBtn: language === "pt" ? "Voltar para Início" : "Back to Home"
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
            <Link href="/community">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-white rounded-full px-8 h-12 font-bold">
                    {t.retryBtn} <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
        </div>
    );
}
