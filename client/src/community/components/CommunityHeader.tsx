import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function CommunityHeader() {
    const { language } = useLanguage();

    const t = {
        methodology: language === "pt" ? "Metodologia" : "Methodology",
        analyst: language === "pt" ? "O Analista" : "Analyst",
        faq: language === "pt" ? "Dúvidas" : "FAQ",
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/community">
                    <div className="text-lg md:text-xl font-bold tracking-tighter text-emerald-500 cursor-pointer hover:text-emerald-400 transition-colors">
                        SLX <span className="text-white">Community</span>
                    </div>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <a href="/community#metodologia" className="hover:text-emerald-400 transition-colors">{t.methodology}</a>
                    <a href="/community#analista" className="hover:text-emerald-400 transition-colors">{t.analyst}</a>
                    <a href="/community#faq" className="hover:text-emerald-400 transition-colors">{t.faq}</a>
                </nav>
            </div>
        </header>
    );
}
