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

export default function HomePublic() {
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
                        <span>A plataforma #1 de Análise de gameplay CODM</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-5xl mx-auto leading-tight">
                        Analise de Gameplay, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 animate-gradient-x">
                            Melhore no CODM
                        </span>
                    </h1>

                    <p className="text-zinc-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
                        "Não analiso se você é bom, <span className="text-emerald-400 font-bold italic">analiso por que você ainda não é.</span>"
                    </p>
                    <p className="text-zinc-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                        Receba feedback detalhado, correções de habitos ruins e o mapa para o seu prime no CODM.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 w-full max-w-md mx-auto sm:max-w-none">
                        <Link href="/community/upload">
                            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white h-16 px-10 text-xl font-bold rounded-full w-full sm:w-auto shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105 transition-all duration-300 border border-emerald-500/50">
                                Enviar Vídeo Agora
                                <ArrowRight className="ml-2 w-6 h-6" />
                            </Button>
                        </Link>

                        <Link href="/community/gallery">
                            <Button variant="ghost" size="lg" className="text-zinc-300 hover:text-white hover:bg-zinc-900/80 h-16 px-8 text-lg rounded-full w-full sm:w-auto flex items-center gap-3 border border-zinc-800 hover:border-zinc-700 transition-all group backdrop-blur-sm">
                                <PlayCircle className="w-6 h-6 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                Ver Galeria Pública
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 border-b border-zinc-800/50">
                    <FeatureCard
                        icon={<Target className="w-8 h-8 text-cyan-400" />}
                        title="Análise de Precisão"
                        description="Análise detalhada da sua movimentação e da sua mira."
                        delay={0}
                    />
                    <FeatureCard
                        icon={<Video className="w-8 h-8 text-emerald-400" />}
                        title="Feedback em Vídeo"
                        description="Receba um vídeo resposta com pausas, desenhos e explicações, além de dicas e um treino específico para melhorar sua gameplay ao máximo."
                        delay={100}
                    />
                    <FeatureCard
                        icon={<Zap className="w-8 h-8 text-purple-400" />}
                        title="Evolução Acelerada"
                        description="Identifique vícios de jogabilidade e corrija hábitos ruins que impedem que você melhore, usando técnicas avançadas de psicologia e sistema muscular."
                        delay={200}
                    />
                </div>

                {/* Metodologia Section */}
                <div id="metodologia" className="py-24 space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
                            A Metodologia <span className="text-emerald-500">Tríade SLX</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Não é apenas "jogar mais". É jogar certo. Nossa metodologia foca nos 3 pilares fundamentais da alta performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <MethodologyCard
                            icon={<Crosshair className="w-10 h-10 text-rose-500" />}
                            title="1. Aim & Mechanics"
                            description="Ajuste fino de sensibilidade, controle de recoil, tracking, quickscope e pre-aim. Transforme sua mira como parte de você mesmo."
                            color="rose"
                        />
                        <MethodologyCard
                            icon={<Brain className="w-10 h-10 text-cyan-500" />}
                            title="2. Game Sense"
                            description="Leitura de gameplay avançada, entenda o movimento do seu inimigo antes mesmo deles acontecerem, evite movimentações desnecessarias e ataque sem se preocupar com cravados."
                            color="cyan"
                        />
                        <MethodologyCard
                            icon={<Rocket className="w-10 h-10 text-emerald-500" />}
                            title="3. Movimentação"
                            description="Domine o slide-cancel, backslide, zigzag eficiente. Movimentação fluida que te torna um alvo difícil e imprevisível, sem cair no truque do inimigo ou na mira de campers."
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
                                    HEAD ANALYST
                                </div>
                                <h2 className="text-4xl font-bold tracking-tight">Conheça o SLX</h2>
                                <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
                                    <p>
                                        Com anos de experiência no call of duty mobile, SLX juntou gameplay + psicologia e transformou o que era um hiperfoco, num verdadeiro terror para os inimigos, aprendeu a usar a calma como arma mental, controlando até mesmo o nervosismo dos inimigos.
                                    </p>
                                    <p>
                                        SLX já nao previa os movimentos dos inimigos, ele manipulava para que o inimigo fizesse exatamente o que ele queria que o inimigo fizesse, sem estresse, sem distração. SLX já enfrentou diversos players em x1 e ficou mais de 2 anos sem perder nenhum x1.
                                    </p>
                                    <p>
                                        Aprendeu a usar 6 dedos no celular, descobriu bugs de como retirar a skin das snipers por exemplo, bugs na movimentação, ele ESTUDOU o jogo. E A diferença não está no tempo jogado, está na disciplina de quem trabalha 12 horas e joga apenas 2h com foco absoluto.
                                    </p>
                                    <p>
                                        SLX ama caçar streamers que se acham superiores, pessoas com ego frágil, ficou conhecido por amassar streamers toxicos. SLX nasceu de um cansaço. Da recusa em ser mais do mesmo. A promessa é simples:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                                        <li>Nunca jogar no automático.</li>
                                        <li>Nunca seguir o fácil.</li>
                                        <li>Nunca alimentar o próprio ego.</li>
                                    </ul>
                                    <p className="font-semibold text-zinc-200">
                                        SLX não vence por jogar bem ele vence pela mente.
                                    </p>
                                    <p className="italic border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-500/5">
                                        "Eu não vou apenas te dizer o que você fez de errado. Vou te ensinar como pensar como um proplay de verdade. Cada movimento tem um propósito, cada tiro tem uma intenção."
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Performance baseada em mente</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Análise além do óbvio</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Disciplina &gt; talento</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Decisão antes do tiro</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Movimento com intenção</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-zinc-300">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                                        <span>Todos os modos de jogo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing & What's Included */}
                <div id="pricing" className="py-24 border-t border-zinc-800/50">
                    <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800/60 rounded-[40px] overflow-hidden backdrop-blur-md shadow-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-10 md:p-14 space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black tracking-tighter uppercase">O que você ganha</h3>
                                    <p className="text-zinc-400 text-sm font-medium">Investimento único para uma vida inteira de skill.</p>
                                </div>
                                <ul className="space-y-5">
                                    {[
                                        "Análise em Vídeo de 10-15min",
                                        "Feedback de Movimentação Pro",
                                        "Correção de Vícios de Mira",
                                        "Treino Específico Personalizado",
                                        "Vídeo Sugerido para Treino",
                                        "Visualização de Análises de Elite"
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
                            <div className="bg-emerald-500/5 p-10 md:p-14 flex flex-col justify-center items-center text-center border-l border-zinc-800/50 space-y-6">
                                <div className="space-y-1">
                                    <span className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Investimento</span>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-5xl font-black text-white tracking-tighter">R$ 37,00</span>
                                        <span className="text-zinc-500 font-bold">/ ou $ 6.99</span>
                                    </div>
                                </div>
                                <Link href="/community/upload">
                                    <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white h-14 px-10 text-lg font-black rounded-2xl shadow-lg shadow-emerald-900/40 transition-all active:scale-95 group">
                                        REIVINDICAR MINHA ANÁLISE
                                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                                    Acesso vitalício ao seu feedback
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="py-24 max-w-3xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center">Perguntas Frequentes</h2>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        <FAQItem
                            value="item-1"
                            question="Como envio meu vídeo?"
                            answer="Após o pagamento, você terá acesso à nossa área exclusiva de upload. Você pode enviar o link do seu vídeo do YouTube ou TikTok. Consulte nossos Termos para ver o que é permitido."
                        />
                        <FAQItem
                            value="item-5"
                            question="Qual a política de reembolso?"
                            answer="Conforme o CDC, você tem 7 dias para cancelamento caso o analista ainda não tenha iniciado o serviço. Após a entrega da análise concluída, por ser um produto digital personalizado, não cabe reembolso. Veja detalhes em nossa página de Políticas."
                        />
                        <FAQItem
                            value="item-2"
                            question="Qual o prazo de entrega da análise?"
                            answer="Garantimos a entrega da análise completa em vídeo em até alguns dias após o envio. Você receberá uma notificação por e-mail e na plataforma, lembre-se, SLX trabalha 12h por dia, então agradecemos a paciência."
                        />
                        <FAQItem
                            value="item-3"
                            question="Sou iniciante, isso é para mim?"
                            answer="Com certeza. A análise é personalizada para o SEU nível. Se você é iniciante, focaremos nos fundamentos. Se é avançado, focaremos em detalhes de alto nível."
                        />
                        <FAQItem
                            value="item-4"
                            question="Posso enviar vídeo de qualquer modo?"
                            answer="Sim! Hardpoint, Localizar e Destruir (SND), Dominação ou Battle Royale. O SLX é especialista em todos os modos competitivos."
                        />
                    </Accordion>
                </div>

                {/* Final CTA */}
                <div className="py-20 text-center space-y-12 bg-gradient-to-b from-transparent to-emerald-900/10 rounded-3xl mb-12 border border-zinc-800/50">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">
                        Pronto para se tornar uma lenda?
                    </h2>
                    <Link href="/community/upload">
                        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white h-16 px-12 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300">
                            Começar Minha Evolução
                        </Button>
                    </Link>
                </div>

                {/* Footer info */}
                <div className="py-12 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                    <p className="text-zinc-600 text-sm">&copy; 2026 SLX Community. Built for Champions.</p>
                    <div className="flex flex-wrap justify-center gap-6 text-xs uppercase font-black tracking-widest">
                        <Link href="/community/legal#termos">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">Termos de Uso</span>
                        </Link>
                        <Link href="/community/legal#reembolso">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">Política de Reembolso</span>
                        </Link>
                        <Link href="/community/legal#privacidade">
                            <span className="text-zinc-500 hover:text-emerald-400 cursor-pointer transition-colors">Privacidade</span>
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
