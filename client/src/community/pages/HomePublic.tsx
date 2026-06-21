import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Video, Zap, Trophy, ArrowRight, CheckCircle2, Crosshair, Brain, Rocket, ChevronDown } from "lucide-react";
import { CommunityHeader } from "../components/CommunityHeader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePublic() {
    const { language } = useLanguage();
    const { toast } = useToast();
    const [isLoadingCheckout, setIsLoadingCheckout] = React.useState(false);

    const handleCheckout = async () => {
        try {
            setIsLoadingCheckout(true);
            const res = await fetch("/api/mercadopago/create-preference", { method: "POST" });
            const data = await res.json();
            
            if (data.init_point) {
                window.location.href = data.init_point;
            } else {
                throw new Error("Erro ao gerar link de pagamento");
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Erro de Conexão",
                description: "Não foi possível conectar ao Mercado Pago. Tente novamente."
            });
            setIsLoadingCheckout(false);
        }
    };

    const t = {
        badge: language === "pt" ? "Análise de Gameplay CODM" : "CODM Gameplay Analysis",
        headline: language === "pt" ? <>Envie sua gameplay,<br />receba feedback real.</> : <>Send your gameplay,<br />get real feedback.</>,
        subheadline: language === "pt" ? "Análise em vídeo feita pelo SLX com correções, dicas e treino personalizado." : "Video analysis by SLX with corrections, tips and personalized training.",
        ctaMain: language === "pt" ? "Quero Minha Análise" : "Get My Analysis",
        ctaSecondary: language === "pt" ? "Ver como funciona ↓" : "See how it works ↓",

        // Features
        feature1Title: language === "pt" ? "Análise de Mira e Movimento" : "Aim & Movement Analysis",
        feature1Desc: language === "pt" ? "Revisão detalhada da sua mira, recoil e movimentação em partida real." : "Detailed review of your aim, recoil and movement in a real match.",
        feature2Title: language === "pt" ? "Feedback em Vídeo" : "Video Feedback",
        feature2Desc: language === "pt" ? "Você recebe um vídeo com pausas, explicações e dicas práticas para aplicar imediatamente." : "You receive a video with pauses, explanations and practical tips to apply immediately.",
        feature3Title: language === "pt" ? "Treino Personalizado" : "Personalized Training",
        feature3Desc: language === "pt" ? "Receba exercícios e rotinas de treino feitos especificamente para os seus pontos fracos." : "Receive exercises and training routines made specifically for your weak points.",

        // Methodology
        methodologyTitle: language === "pt" ? "O que é analisado" : "What is analyzed",
        methodologySub: language === "pt" ? "Três pilares que definem o desempenho no CODM." : "Three pillars that define CODM performance.",
        methodology1Title: language === "pt" ? "Mira e Mecânica" : "Aim & Mechanics",
        methodology1Desc: language === "pt" ? "Sensibilidade, controle de recoil, tracking, quickscope e pre-aim." : "Sensitivity, recoil control, tracking, quickscope and pre-aim.",
        methodology2Title: language === "pt" ? "Leitura de Jogo" : "Game Sense",
        methodology2Desc: language === "pt" ? "Posicionamento, leitura do mapa, previsão do inimigo e tomada de decisão." : "Positioning, map reading, enemy prediction and decision making.",
        methodology3Title: language === "pt" ? "Movimentação" : "Movement",
        methodology3Desc: language === "pt" ? "Slide-cancel, backslide, zigzag, fluência de movimento e imprevisibilidade." : "Slide-cancel, backslide, zigzag, movement fluency and unpredictability.",

        // Analyst Bio
        bioTitle: language === "pt" ? "Quem analisa" : "Your analyst",
        headAnalyst: "SLX",
        bioP1: language === "pt" ? "Anos de experiência no CODM, estudando gameplay, psicologia de combate e mecânicas avançadas. Aprendeu a usar 6 dedos no celular, descobriu bugs de movimentação, e passou mais de 2 anos sem perder um x1." : "Years of experience in CODM, studying gameplay, combat psychology and advanced mechanics. Learned to use 6 fingers on mobile, discovered movement bugs, and went over 2 years without losing a 1v1.",
        bioP2: language === "pt" ? "Trabalha 12h por dia e joga apenas 2h com foco absoluto. Ficou conhecido por amassar streamers tóxicos em x1." : "Works 12h a day and plays only 2h with absolute focus. Became known for crushing toxic streamers in 1v1.",
        bioQuote: language === "pt" ? "\"Vou te mostrar o que você faz de errado e como pensar como um pro de verdade.\"" : "\"I'll show you what you're doing wrong and how to think like a real pro.\"",

        bioBadge1: language === "pt" ? "Análise de mira e mecânica" : "Aim & mechanics analysis",
        bioBadge2: language === "pt" ? "Correção de vícios" : "Habit correction",
        bioBadge3: language === "pt" ? "Treino personalizado" : "Custom training",
        bioBadge4: language === "pt" ? "Todos os modos de jogo" : "All game modes",

        // Pricing
        pricingTitle: language === "pt" ? "O que está incluído" : "What's included",
        pricingSub: language === "pt" ? "Tudo isso por um valor simbólico." : "All of this for a symbolic price.",
        pricingList1: language === "pt" ? "Análise em vídeo de 10-15min" : "10-15min video analysis",
        pricingList2: language === "pt" ? "Feedback de movimentação" : "Movement feedback",
        pricingList3: language === "pt" ? "Correção de vícios de mira" : "Aim habit correction",
        pricingList4: language === "pt" ? "Treino específico personalizado" : "Custom specific training",
        pricingList5: language === "pt" ? "Vídeo sugerido para treino" : "Suggested training video",
        pricingInvestLabel: language === "pt" ? "Investimento" : "Investment",
        pricingCta: language === "pt" ? "QUERO MINHA ANÁLISE" : "GET MY ANALYSIS",
        pricingLifetime: language === "pt" ? "Acesso vitalício ao seu feedback" : "Lifetime access to your feedback",

        // FAQ
        faqTitle: language === "pt" ? "Dúvidas" : "FAQ",
        faq1Q: language === "pt" ? "Como funciona?" : "How does it work?",
        faq1A: language === "pt" ? "Você paga pelo Mercado Pago, envia o link do seu vídeo do YouTube ou TikTok pelo formulário, e recebe a análise em vídeo em alguns dias." : "You pay through Mercado Pago, submit your YouTube or TikTok video link through the form, and receive your video analysis within a few days.",
        faq2Q: language === "pt" ? "Quanto tempo demora?" : "How long does it take?",
        faq2A: language === "pt" ? "A análise é entregue em até alguns dias após o envio. SLX trabalha 12h por dia, então agradecemos a paciência." : "The analysis is delivered within a few days after submission. SLX works 12h a day, so we appreciate your patience.",
        faq3Q: language === "pt" ? "Sou iniciante, serve pra mim?" : "I'm a beginner, is this for me?",
        faq3A: language === "pt" ? "Sim. A análise é personalizada pro seu nível. Iniciante foca nos fundamentos, avançado foca em detalhes de alto nível." : "Yes. The analysis is personalized to your level. Beginners focus on fundamentals, advanced players focus on high-level details.",
        faq4Q: language === "pt" ? "Qual modo de jogo posso enviar?" : "What game modes can I send?",
        faq4A: language === "pt" ? "Qualquer um: Hardpoint, SND, Dominação ou Battle Royale." : "Any: Hardpoint, SND, Domination or Battle Royale.",
        faq5Q: language === "pt" ? "Posso pedir reembolso?" : "Can I get a refund?",
        faq5A: language === "pt" ? "Você tem 7 dias para cancelamento caso a análise ainda não tenha sido iniciada. Após a entrega, por ser um produto digital personalizado, não cabe reembolso." : "You have 7 days to cancel if the analysis hasn't been started yet. After delivery, as it is a personalized digital product, no refunds are applicable.",

        // Final CTA & Footer
        finalTitle: language === "pt" ? "Bora melhorar sua gameplay?" : "Ready to improve your gameplay?",
        finalCta: language === "pt" ? "Quero Minha Análise" : "Get My Analysis",
        footerRights: language === "pt" ? "© 2026 SLX Community." : "© 2026 SLX Community.",
        terms: language === "pt" ? "Termos" : "Terms",
        refund: language === "pt" ? "Reembolso" : "Refund",
        privacy: language === "pt" ? "Privacidade" : "Privacy",
    };

    return (
        <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-emerald-500/30 font-sans">
            <CommunityHeader />

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 pt-24">

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center pt-8 pb-16 text-center space-y-6 animate-in fade-in zoom-in-95 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-sm text-sm text-emerald-400 font-medium shadow-lg shadow-emerald-900/20">
                        <Trophy className="w-4 h-4" />
                        <span>{t.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter max-w-4xl mx-auto leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500">
                            {t.headline}
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {t.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full max-w-md mx-auto sm:max-w-none">
                        <Button 
                            size="lg" 
                            onClick={handleCheckout}
                            disabled={isLoadingCheckout}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white h-14 px-10 text-lg font-bold rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 border border-emerald-500/50">
                            {isLoadingCheckout ? "Gerando PIX/Cartão..." : t.ctaMain}
                            {!isLoadingCheckout && <ArrowRight className="ml-2 w-5 h-5" />}
                        </Button>

                        <a href="#como-funciona">
                            <Button variant="ghost" size="lg" className="text-zinc-400 hover:text-white hover:bg-zinc-900/80 h-14 px-8 text-base rounded-full w-full sm:w-auto border border-zinc-800 hover:border-zinc-700 transition-all backdrop-blur-sm">
                                {t.ctaSecondary}
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div id="como-funciona" className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 border-b border-zinc-800/50">
                    <FeatureCard
                        icon={<Target className="w-8 h-8 text-cyan-400" />}
                        title={t.feature1Title}
                        description={t.feature1Desc}
                        delay={0}
                    />
                    <FeatureCard
                        icon={<Video className="w-8 h-8 text-emerald-400" />}
                        title={t.feature2Title}
                        description={t.feature2Desc}
                        delay={100}
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-purple-400" />}
                        title={t.feature3Title}
                        description={t.feature3Desc}
                        delay={200}
                    />
                </div>

                {/* Methodology Section */}
                <div id="metodologia" className="py-24 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            {t.methodologyTitle}
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                            {t.methodologySub}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <MethodologyCard
                            icon={<Crosshair className="w-10 h-10 text-rose-500" />}
                            title={t.methodology1Title}
                            description={t.methodology1Desc}
                            color="rose"
                        />
                        <MethodologyCard
                            icon={<Brain className="w-10 h-10 text-cyan-500" />}
                            title={t.methodology2Title}
                            description={t.methodology2Desc}
                            color="cyan"
                        />
                        <MethodologyCard
                            icon={<Rocket className="w-10 h-10 text-emerald-500" />}
                            title={t.methodology3Title}
                            description={t.methodology3Desc}
                            color="emerald"
                        />
                    </div>
                </div>

                {/* Analyst Bio Section */}
                <div id="analista" className="py-24 border-y border-zinc-800/50 bg-zinc-900/20 -mx-4 px-4 md:px-0">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-zinc-800 overflow-hidden border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] relative group">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                                <img
                                    src="/attached_assets/slx_analyst.png"
                                    alt="SLX"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="w-full md:w-2/3 space-y-6 text-left">
                                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20">
                                    {t.headAnalyst}
                                </div>
                                <h2 className="text-3xl font-bold tracking-tight">{t.bioTitle}</h2>
                                <div className="space-y-4 text-zinc-400 text-base leading-relaxed">
                                    <p>{t.bioP1}</p>
                                    <p>{t.bioP2}</p>
                                    <p className="italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-500/5 text-zinc-300">
                                        {t.bioQuote}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-3 mt-6">
                                    {[
                                        t.bioBadge1, t.bioBadge2, t.bioBadge3, t.bioBadge4
                                    ].map((badge, i) => (
                                        <div key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                            <span>{badge}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing & What's Included */}
                <div id="pricing" className="py-24 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800/60 rounded-[32px] overflow-hidden backdrop-blur-md shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 md:p-12 space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black tracking-tighter uppercase">{t.pricingTitle}</h3>
                                    <p className="text-zinc-400 text-sm">{t.pricingSub}</p>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        t.pricingList1, t.pricingList2, t.pricingList3,
                                        t.pricingList4, t.pricingList5
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm font-medium">
                                            <div className="p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                            </div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-emerald-500/5 p-6 md:p-12 flex flex-col justify-center items-center text-center border-l-0 md:border-l border-zinc-800/50 space-y-5">
                                <div className="space-y-1">
                                    <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">{t.pricingInvestLabel}</span>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-5xl font-black text-white tracking-tighter">R$ 5</span>
                                    </div>
                                </div>
                                <Button 
                                    size="lg" 
                                    onClick={handleCheckout}
                                    disabled={isLoadingCheckout}
                                    className="border-none w-full bg-emerald-600 hover:bg-emerald-500 text-white h-12 md:h-14 px-4 md:px-10 text-sm md:text-lg font-black rounded-2xl shadow-lg shadow-emerald-900/40 transition-all active:scale-95 group outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none">
                                    {isLoadingCheckout ? "Aguarde..." : t.pricingCta}
                                    {!isLoadingCheckout && <ArrowRight className="ml-1 md:ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />}
                                </Button>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                    {t.pricingLifetime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="py-24 max-w-3xl mx-auto space-y-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-center">{t.faqTitle}</h2>

                    <Accordion type="single" collapsible className="w-full space-y-3">
                        <FAQItem value="item-1" question={t.faq1Q} answer={t.faq1A} />
                        <FAQItem value="item-2" question={t.faq2Q} answer={t.faq2A} />
                        <FAQItem value="item-3" question={t.faq3Q} answer={t.faq3A} />
                        <FAQItem value="item-4" question={t.faq4Q} answer={t.faq4A} />
                        <FAQItem value="item-5" question={t.faq5Q} answer={t.faq5A} />
                    </Accordion>
                </div>



                {/* Footer info */}
                <div className="py-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                    <p className="text-zinc-600 text-sm">{t.footerRights}</p>
                    <div className="flex flex-wrap justify-center gap-6 text-xs uppercase font-black tracking-widest">
                        <Link href="/community/legal#termos">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">{t.terms}</span>
                        </Link>
                        <Link href="/community/legal#reembolso">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">{t.refund}</span>
                        </Link>
                        <Link href="/community/legal#privacidade">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">{t.privacy}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
    return (
        <div
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-500 group backdrop-blur-sm hover:translate-y-[-4px]"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="mb-5 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 inline-flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-400 transition-colors tracking-tight">{title}</h3>
            <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">{description}</p>
        </div>
    );
}

function MethodologyCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
    const borderColor = {
        rose: "hover:border-rose-500/50",
        cyan: "hover:border-cyan-500/50",
        emerald: "hover:border-emerald-500/50",
    }[color] || "hover:border-zinc-500";

    return (
        <div className={`p-8 rounded-3xl bg-zinc-950 border border-zinc-800 ${borderColor} transition-colors duration-300 group`}>
            <div className="mb-5">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-zinc-100">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
    )
}

function FAQItem({ value, question, answer }: { value: string, question: string, answer: string }) {
    return (
        <AccordionItem value={value} className="border-zinc-800 px-5 rounded-2xl bg-zinc-900/30 data-[state=open]:bg-zinc-900/50 transition-colors">
            <AccordionTrigger className="text-base font-medium text-zinc-200 hover:text-white hover:no-underline py-5">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-base pb-5 leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}
