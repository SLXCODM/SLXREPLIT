import { motion } from "framer-motion";
import { EbookHeader } from "@/components/EbookHeader";
import { EbookFooter } from "@/components/EbookFooter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, TrendingUp, CheckCircle2, ChevronRight, Lock, Globe } from "lucide-react";

// Use the copied image from public assets
const slxImage = "/attached_assets/ebook_cover.jpg";

// Animation variants
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

export default function EbookSkill() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30">
            <EbookHeader />

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Background gradient/texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-zinc-950 to-zinc-950 z-0" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-black tracking-[0.2em] uppercase">
                            Manual de Alta Performance
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[1] text-white tracking-tighter uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            O Princípio da <span className="text-emerald-500 italic">Habilidade</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                            Domine a performance no Call of Duty Mobile através da ciência, técnica e controle mental técnico.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Button
                                size="lg"
                                className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-8 text-lg font-black rounded-2xl shadow-2xl shadow-emerald-600/20 transition-all duration-300 w-full sm:w-auto uppercase"
                                onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                            >
                                Comprar Agora
                                <ChevronRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-10 py-8 text-lg font-bold rounded-2xl border-2 border-emerald-500/20 hover:bg-emerald-500/5 text-white w-full sm:w-auto"
                                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Saber Mais
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="py-32 relative border-t border-white/5">
                <div className="container mx-auto px-4">
                    <motion.div
                        {...fadeIn}
                        className="max-w-3xl mx-auto text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-8 tracking-tighter uppercase">
                            A maioria das dicas de CODM não falha por serem ruins. <br />
                            <span className="text-emerald-500 italic block mt-4">Elas falham por estarem atrasadas.</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
                            <p>
                                Enquanto você ajusta sensi, copia classe e muda HUD, você já ficou pra trás!
                            </p>
                            <p className="font-black text-white uppercase text-sm tracking-widest border-b border-emerald-500/30 inline-block pb-2">
                                O Princípio da Habilidade é um manual direto
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 py-6">
                                {["velocidade cognitiva", "controle real", "tomada de decisão"].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                                        • {skill}
                                    </span>
                                ))}
                            </div>
                            <p>
                                Não é um curso longo. É o princípio central, a psicologia do jogo, o que ninguém treina.
                                Se copiar já não funciona pra você, esse manual é o próximo passo.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            {
                                icon: Target,
                                title: "Autenticidade",
                                desc: "Descubra seu estilo de jogo único e pare de copiar configurações que não funcionam para você."
                            },
                            {
                                icon: Brain,
                                title: "Neurociência",
                                desc: "Entenda a fisiologia por trás da precisão mecânica e desenvolva uma memória muscular infalível."
                            },
                            {
                                icon: Zap,
                                title: "Velocidade",
                                desc: "Técnicas para acelerar sua leitura de jogo e tomada de decisão em frações de segundo."
                            },
                            {
                                icon: TrendingUp,
                                title: "Metodologia",
                                desc: "Treino Eficiente: evolua consistentemente sem desperdiçar horas jogando errado."
                            }
                        ].map((item, i) => (
                            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} key={i}>
                                <Card className="h-full border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                                    <CardContent className="p-8 text-center">
                                        <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-emerald-500/20">
                                            <item.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-xl font-black mb-3 text-white uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed text-sm font-medium">
                                            {item.desc}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CONTENT BREAKDOWN */}
            <section id="content" className="py-32 bg-zinc-900/30">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            {...scaleIn}
                            className="lg:w-1/2"
                        >
                            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto group">
                                {/* 3D-like book mockup */}
                                <div className="absolute inset-0 bg-emerald-500/20 blur-[60px] rounded-full group-hover:bg-emerald-500/30 transition-colors" />
                                <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-emerald-900 rounded-lg shadow-2xl relative z-10 p-8 border-l-[10px] border-emerald-950 flex flex-col justify-between overflow-hidden">
                                    <div className="absolute top-0 right-0 w-full h-full bg-white/5 pointer-events-none" />
                                    <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">SLX Original Manual</div>
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter italic">O PRINCÍPIO</h3>
                                        <h3 className="text-4xl md:text-5xl font-black leading-none uppercase tracking-tighter opacity-60">DA HABILIDADE</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-black">SLX</div>
                                        <div className="h-[2px] flex-1 bg-white/10" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
                                O que está <br /> <span className="text-emerald-500 italic">dentro do manual?</span>
                            </h2>
                            <p className="text-lg text-zinc-400 mb-10 font-medium">
                                Não é apenas um guia, é um sistema completo de reestruturação do seu sistema cognitivo com técnicas avançadas.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Fundamentos da mecânica avançada",
                                    "Psicologia do jogador profissional",
                                    "Otimização de HUD e sensibilidade técnica",
                                    "Rotina de aquecimento baseada em neurociência",
                                    "Tomada de decisão sob pressão extrema"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                                        <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0" />
                                        <span className="font-bold text-white uppercase text-xs tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-500 text-white w-full sm:w-auto px-10 py-8 font-black rounded-2xl uppercase tracking-widest"
                                    onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                >
                                    Garantir Meu Acesso Completo
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* AUTHOR SECTION */}
            <section id="author" className="py-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        {...fadeIn}
                        className="max-w-5xl mx-auto bg-zinc-900 border border-white/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20"
                    >
                        <div className="relative shrink-0">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-[40px] rounded-full" />
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-zinc-800 relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                                <img src={slxImage} alt="SLX" className="w-full h-full object-cover scale-110" />
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Quem é o <span className="text-emerald-500 italic">SLX?</span></h2>
                            <p className="text-zinc-400 font-bold uppercase tracking-[0.2em] text-sm">Neurociência Aplicada aos Games</p>
                            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                                Como analista e estudioso da performance humana em ambientes digitais, minha trajetória é pautada pela intersecção entre técnica e ciência cognitiva. O "Princípio da Habilidade" é um framework metodológico validado para quem busca a maestria real, investindo em um sistema de treinamento profissional que transforma sua percepção e execução de jogo.
                            </p>
                            <div className="flex gap-4 justify-center md:justify-start pt-6">
                                <a href="https://www.instagram.com/slx.wav" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                                    <Globe className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section id="faq" className="py-32 bg-zinc-950 border-t border-white/5">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div {...fadeIn} className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">FAQ</h2>
                        <p className="text-zinc-500 mt-4 font-bold uppercase tracking-widest text-xs">Dúvidas Frequentes</p>
                    </motion.div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {[
                            { q: "Por quanto tempo tenho acesso?", a: "Você tem acesso por 60 dias após a compra. Isso garante que você realmente foque em ler e praticar o conteúdo imediato." },
                            { q: "Qual o formato do conteúdo?", a: "E-book digital com design minimalista, fundo âmbar estilo papel e tipografia otimizada para leitura confortável." },
                            { q: "Serve para iniciantes?", a: "Sim, os fundamentos de neurociência servem para qualquer nível de habilidade." },
                            { q: "Tem garantia?", a: "A política de reembolso é gerida diretamente pela Kiwify em até 7 dias conforme a lei." }
                        ].map((item, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="bg-zinc-900/50 border border-white/5 rounded-2xl px-6">
                                <AccordionTrigger className="font-black uppercase text-xs tracking-widest text-left hover:text-emerald-500 py-6">
                                    {item.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-zinc-400 font-medium pb-6 leading-relaxed">
                                    {item.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            <EbookFooter />
        </div>
    );
}
