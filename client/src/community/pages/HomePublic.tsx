import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Target, Video, Zap, Trophy, PlayCircle, ArrowRight, CheckCircle2, Crosshair, Brain, Rocket, ChevronDown } from "lucide-react";
import { CommunityHeader } from "../components/CommunityHeader";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HomePublic() {
    const { language } = useLanguage();

    const t = {
        badge: language === "pt" ? "A plataforma #1 de Análise de gameplay CODM" : "#1 CODM Gameplay Analysis Platform",
        headline: language === "pt" ? <>Analise de Gameplay, <br />Melhore no CODM</> : <>Analyze Gameplay, <br />Improve in CODM</>,
        subheadline: language === "pt" ? "\"Não analiso se você é bom, analiso por que você ainda não é.\"" : "\"I don't analyze if you're good, I analyze why you aren't yet.\"",
        caption: language === "pt" ? "Receba feedback detalhado, correções de habitos ruins e o mapa para o seu prime no CODM." : "Get detailed feedback, fix bad habits, and find the map to your CODM prime.",
        ctaMain: language === "pt" ? "Enviar Vídeo Agora" : "Submit Video Now",
        ctaSecondary: language === "pt" ? "Ver Galeria Pública" : "View Public Gallery",
        feature1Title: language === "pt" ? "Análise de Precisão" : "Precision Analysis",
        feature1Desc: language === "pt" ? "Análise detalhada da sua movimentação e da sua mira." : "Detailed analysis of your movement and aim.",
        feature2Title: language === "pt" ? "Feedback em Vídeo" : "Video Feedback",
        feature2Desc: language === "pt" ? "Receba um vídeo resposta com pausas, desenhos e explicações, além de dicas e um treino específico para melhorar sua gameplay ao máximo." : "Receive a video response with pauses, drawings, and explanations, plus tips and a specific training to maximize your gameplay.",
        feature3Title: language === "pt" ? "Evolução Acelerada" : "Accelerated Evolution",
        feature3Desc: language === "pt" ? "Identifique vícios de jogabilidade e corrija hábitos ruins que impedem que você melhore, usando técnicas avançadas de psicologia e sistema muscular." : "Identify gameplay habits and correct bad habits that stop you from improving, using advanced psychology and muscle memory techniques.",
        methodologyTitle: language === "pt" ? "A Metodologia Tríade SLX" : "The SLX Triad Methodology",
        methodologySub: language === "pt" ? "Não é apenas \"jogar mais\". É jogar certo. Nossa metodologia foca nos 3 pilares fundamentais da alta performance." : "It's not just \"playing more\". It's playing right. Our methodology focuses on the 3 fundamental pillars of high performance.",
        methodology1Title: language === "pt" ? "1. Aim & Mechanics" : "1. Aim & Mechanics",
        methodology1Desc: language === "pt" ? "Ajuste fino de sensibilidade, controle de recoil, tracking, quickscope e pre-aim. Transforme sua mira como parte de você mesmo." : "Fine adjustment of sensitivity, recoil control, tracking, quickscope and pre-aim. Transform your aim as part of yourself.",
        methodology2Title: language === "pt" ? "2. Game Sense" : "2. Game Sense",
        methodology2Desc: language === "pt" ? "Leitura de gameplay avançada, entenda o movimento do seu inimigo antes mesmo deles acontecerem, evite movimentações desnecessarias e ataque sem se preocupar com cravados." : "Advanced gameplay reading, understand your enemy's movement before they even happen, avoid unnecessary movements and attack without worrying about campers.",
        methodology3Title: language === "pt" ? "3. Movimentação" : "3. Movement",
        methodology3Desc: language === "pt" ? "Domine o slide-cancel, backslide, zigzag eficiente. Movimentação fluida que te torna um alvo difícil e imprevisível, sem cair no truque do inimigo ou na mira de campers." : "Master slide-cancel, backslide, efficient zigzag. Fluid movement that makes you a difficult and unpredictable target, without falling for the enemy's tricks or campers' aim.",

        // Analyst Bio
        bioTitle: language === "pt" ? "Conheça o SLX" : "Meet SLX",
        headAnalyst: language === "pt" ? "HEAD ANALYST" : "HEAD ANALYST",
        bioP1: language === "pt" ? "Com anos de experiência no call of duty mobile, SLX juntou gameplay + psicologia e transformou o que era um hiperfoco, num verdadeiro terror para os inimigos, aprendeu a usar a calma como arma mental, controlando até mesmo o nervosismo dos inimigos." : "With years of experience in Call of Duty Mobile, SLX combined gameplay + psychology and turned what was a hyperfocus into a true terror for enemies, learning to use calm as a mental weapon, controlling even the nervousness of opponents.",
        bioP2: language === "pt" ? "SLX já nao previa os movimentos dos inimigos, ele manipulava para que o inimigo fizesse exatamente o que ele queria que o inimigo fizesse, sem estresse, sem distração. SLX já enfrentou diversos players em x1 e ficou mais de 2 anos sem perder nenhum x1." : "SLX no longer predicted enemy movements; he manipulated them to do exactly what he wanted, without stress or distraction. SLX has faced many players in 1v1 and went over 2 years without losing a single duel.",
        bioP3: language === "pt" ? "Aprendeu a usar 6 dedos no celular, descobriu bugs de como retirar a skin das snipers por exemplo, bugs na movimentação, ele ESTUDOU o jogo. E A diferença não está no tempo jogado, está na disciplina de quem trabalha 12 horas e joga apenas 2h com foco absoluto." : "He learned to use 6 fingers on mobile, discovered bugs like removing sniper skins, movement bugs, he STUDIED the game. And the difference is not in time played, but in the discipline of someone who works 12 hours and plays only 2h with absolute focus.",
        bioP4: language === "pt" ? "SLX ama caçar streamers que se acham superiores, pessoas com ego frágil, ficou conhecido por amassar streamers toxicos. SLX nasceu de um cansaço. Da recusa em ser mais do mesmo. A promessa é simples:" : "SLX loves hunting streamers who think they are superior, people with fragile egos, became known for crushing toxic streamers. SLX was born from fatigue. From the refusal to be just another one. The promise is simple:",
        bioList1: language === "pt" ? "Nunca jogar no automático." : "Never play on autopilot.",
        bioList2: language === "pt" ? "Nunca seguir o fácil." : "Never follow the easy path.",
        bioList3: language === "pt" ? "Nunca alimentar o próprio ego." : "Never feed your own ego.",
        bioConclusion: language === "pt" ? "SLX não vence por jogar bem ele vence pela mente." : "SLX doesn't win by playing well, he wins by the mind.",
        bioQuote: language === "pt" ? "\"Eu não vou apenas te dizer o que você fez de errado. Vou te ensinar como pensar como um proplay de verdade. Cada movimento tem um propósito, cada tiro tem uma intenção.\"" : "\"I won't just tell you what you did wrong. I'll teach you how to think like a real pro player. Every movement has a purpose, every shot has an intention.\"",

        bioBadge1: language === "pt" ? "Performance baseada em mente" : "Mind-based performance",
        bioBadge2: language === "pt" ? "Análise além do óbvio" : "Analysis beyond the obvious",
        bioBadge3: language === "pt" ? "Disciplina > talento" : "Discipline > talent",
        bioBadge4: language === "pt" ? "Decisão antes do tiro" : "Decision before the shot",
        bioBadge5: language === "pt" ? "Movimento com intenção" : "Movement with intention",
        bioBadge6: language === "pt" ? "Todos os modos de jogo" : "All game modes",

        // Pricing
        pricingTitle: language === "pt" ? "O que você ganha" : "What you get",
        pricingSub: language === "pt" ? "Investimento único para uma vida inteira de skill." : "One-time investment for a lifetime of skill.",
        pricingList1: language === "pt" ? "Análise em Vídeo de 10-15min" : "10-15min Video Analysis",
        pricingList2: language === "pt" ? "Feedback de Movimentação Pro" : "Pro Movement Feedback",
        pricingList3: language === "pt" ? "Correção de Vícios de Mira" : "Aim Habit Correction",
        pricingList4: language === "pt" ? "Treino Específico Personalizado" : "Custom Specific Training",
        pricingList5: language === "pt" ? "Vídeo Sugerido para Treino" : "Suggested Training Video",
        pricingList6: language === "pt" ? "Visualização de Análises de Elite" : "Elite Analysis Viewing",
        pricingInvestLabel: language === "pt" ? "Investimento" : "Investment",
        pricingCta: language === "pt" ? "REIVINDICAR MINHA ANÁLISE" : "CLAIM MY ANALYSIS",
        pricingLifetime: language === "pt" ? "Acesso vitalício ao seu feedback" : "Lifetime access to your feedback",

        // FAQ
        faqTitle: language === "pt" ? "Perguntas Frequentes" : "Frequently Asked Questions",
        faq1Q: language === "pt" ? "Como envio meu vídeo?" : "How do I send my video?",
        faq1A: language === "pt" ? "Após o pagamento, você terá acesso à nossa área exclusiva de upload. Você pode enviar o link do seu vídeo do YouTube ou TikTok. Consulte nossos Termos para ver o que é permitido." : "After payment, you will have access to our exclusive upload area. You can send your YouTube or TikTok video link. Check our Terms to see what is allowed.",
        faq5Q: language === "pt" ? "Qual a política de reembolso?" : "What is the refund policy?",
        faq5A: language === "pt" ? "Conforme o CDC, você tem 7 dias para cancelamento caso o analista ainda não tenha iniciado o serviço. Após a entrega da análise concluída, por ser um produto digital personalizado, não cabe reembolso. Veja detalhes em nossa página de Políticas." : "According to consumer laws, you have 7 days to cancel if the analyst hasn't started the service yet. After the completed analysis is delivered, as it is a personalized digital product, no refunds are applicable. See details on our Policy page.",
        faq2Q: language === "pt" ? "Qual o prazo de entrega da análise?" : "What is the analysis delivery time?",
        faq2A: language === "pt" ? "Garantimos a entrega da análise completa em vídeo em até alguns dias após o envio. Você receberá uma notificação por e-mail e na plataforma, lembre-se, SLX trabalha 12h por dia, então agradecemos a paciência." : "We guarantee delivery of the complete video analysis within a few days after submission. You will receive a notification by email and on the platform. Remember, SLX works 12h a day, so we appreciate your patience.",
        faq3Q: language === "pt" ? "Sou iniciante, isso é para mim?" : "I'm a beginner, is this for me?",
        faq3A: language === "pt" ? "Com certeza. A análise é personalizada para o SEU nível. Se você é iniciante, focaremos nos fundamentos. Se é avançado, focaremos em detalhes de alto nível." : "Absolutely. The analysis is personalized to YOUR level. If you are a beginner, we will focus on fundamentals. If advanced, we will focus on high-level details.",
        faq4Q: language === "pt" ? "Posso enviar vídeo de qualquer modo?" : "Can I send video of any mode?",
        faq4A: language === "pt" ? "Sim! Hardpoint, Localizar e Destruir (SND), Dominação ou Battle Royale. O SLX é especialista em todos os modos competitivos." : "Yes! Hardpoint, Search and Destroy (SND), Domination or Battle Royale. SLX is an expert in all competitive modes.",

        // Final CTA & Footer
        finalTitle: language === "pt" ? "Pronto para se tornar uma lenda?" : "Ready to become a legend?",
        finalCta: language === "pt" ? "Começar Minha Evolução" : "Start My Evolution",
        footerRights: language === "pt" ? "© 2026 SLX Community. Feito para Campeões." : "© 2026 SLX Community. Built for Champions.",
        terms: language === "pt" ? "Termos de Uso" : "Terms of Use",
        refund: language === "pt" ? "Política de Reembolso" : "Refund Policy",
        privacy: language === "pt" ? "Privacidade" : "Privacy",
    };

    return (
        <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden selection:bg-emerald-500/30 font-sans">
            <CommunityHeader />

            {/* Background Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 pt-24">

                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center pt-8 pb-16 text-center space-y-8 animate-in fade-in zoom-in-95 duration-1000">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-sm text-sm text-emerald-400 font-medium mb-4 shadow-lg shadow-emerald-900/20">
                        <Trophy className="w-4 h-4" />
                        <span>{t.badge}</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-5xl mx-auto leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 animate-gradient-x">
                            {t.headline}
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
                        {t.subheadline}
                    </p>
                    <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        {t.caption}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 w-full max-w-md mx-auto sm:max-w-none">
                        <Link href="/community/upload">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white h-16 px-10 text-xl font-bold rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 border border-emerald-500/50">
                                {t.ctaMain}
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>

                        <Link href="/community/gallery">
                            <Button variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-zinc-900/80 h-16 px-8 text-lg rounded-full w-full sm:w-auto flex items-center gap-3 border border-zinc-800 hover:border-zinc-700 transition-all group backdrop-blur-sm">
                                <PlayCircle className="w-6 h-6 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                {t.ctaSecondary}
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 border-b border-zinc-800/50">
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

                {/* Metodologia Section */}
                <div id="metodologia" className="py-24 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            {t.methodologyTitle}
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            {t.methodologySub}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                                    alt="Analista SLX"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="w-full md:w-2/3 space-y-6 text-left">
                                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20">
                                    {t.headAnalyst}
                                </div>
                                <h2 className="text-4xl font-bold tracking-tight">{t.bioTitle}</h2>
                                <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                                    <p>{t.bioP1}</p>
                                    <p>{t.bioP2}</p>
                                    <p>{t.bioP3}</p>
                                    <p>{t.bioP4}</p>
                                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                                        <li>{t.bioList1}</li>
                                        <li>{t.bioList2}</li>
                                        <li>{t.bioList3}</li>
                                    </ul>
                                    <p className="font-semibold text-zinc-200">
                                        {t.bioConclusion}
                                    </p>
                                    <p className="italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-500/5">
                                        {t.bioQuote}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    {[
                                        t.bioBadge1, t.bioBadge2, t.bioBadge3,
                                        t.bioBadge4, t.bioBadge5, t.bioBadge6
                                    ].map((badge, i) => (
                                        <div key={i} className="flex items-center gap-2 text-zinc-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
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
                    <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800/60 rounded-[40px] overflow-hidden backdrop-blur-md shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 md:p-14 space-y-6 md:space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black tracking-tighter uppercase">{t.pricingTitle}</h3>
                                    <p className="text-zinc-400 text-sm font-medium">{t.pricingSub}</p>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        t.pricingList1, t.pricingList2, t.pricingList3,
                                        t.pricingList4, t.pricingList5, t.pricingList6
                                    ].map((benefit, i) => (
                                        <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                                            <div className="p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-emerald-500/5 p-6 md:p-14 flex flex-col justify-center items-center text-center border-l-0 md:border-l border-zinc-800/50 space-y-6">
                                <div className="space-y-1">
                                    <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">{t.pricingInvestLabel}</span>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-5xl font-black text-white tracking-tighter">R$ 37,00</span>
                                        <span className="text-zinc-500 font-bold">/ ou $ 6.99</span>
                                    </div>
                                </div>
                                <Link href="/community/upload">
                                    <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white h-12 md:h-14 px-4 md:px-10 text-sm md:text-lg font-black rounded-2xl shadow-lg shadow-emerald-900/40 transition-all active:scale-95 group">
                                        {t.pricingCta}
                                        <ArrowRight className="ml-1 md:ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                    {t.pricingLifetime}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="py-24 max-w-3xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">{t.faqTitle}</h2>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <FAQItem
                            value="item-1"
                            question={t.faq1Q}
                            answer={t.faq1A}
                        />
                        <FAQItem
                            value="item-5"
                            question={t.faq5Q}
                            answer={t.faq5A}
                        />
                        <FAQItem
                            value="item-2"
                            question={t.faq2Q}
                            answer={t.faq2A}
                        />
                        <FAQItem
                            value="item-3"
                            question={t.faq3Q}
                            answer={t.faq3A}
                        />
                        <FAQItem
                            value="item-4"
                            question={t.faq4Q}
                            answer={t.faq4A}
                        />
                    </Accordion>
                </div>

                {/* Final CTA */}
                <div className="py-20 text-center space-y-12 bg-gradient-to-b from-transparent to-emerald-900/10 rounded-3xl mb-12 border border-zinc-800/50">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">
                        {t.finalTitle}
                    </h2>
                    <Link href="/community/upload">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white h-16 px-12 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300">
                            {t.finalCta}
                        </Button>
                    </Link>
                </div>

                {/* Footer info */}
                <div className="py-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
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
            className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 hover:border-emerald-500/30 hover:bg-zinc-900/60 transition-all duration-500 group backdrop-blur-sm hover:translate-y-[-5px]"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="mb-6 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 inline-flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-emerald-900/20 transition-all duration-500">
                {icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-zinc-100 group-hover:text-emerald-400 transition-colors tracking-tight">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">{description}</p>
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
            <div className="mb-6">{icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-zinc-100">{title}</h3>
            <p className="text-zinc-400 leading-relaxed">{description}</p>
        </div>
    )
}

function FAQItem({ value, question, answer }: { value: string, question: string, answer: string }) {
    return (
        <AccordionItem value={value} className="border-zinc-800 px-6 rounded-2xl bg-zinc-900/30 data-[state=open]:bg-zinc-900/50 transition-colors">
            <AccordionTrigger className="text-lg font-medium text-zinc-200 hover:text-white hover:no-underline py-6">
                {question}
            </AccordionTrigger>
            <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                {answer}
            </AccordionContent>
        </AccordionItem>
    )
}
