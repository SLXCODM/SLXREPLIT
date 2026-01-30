import { motion } from "framer-motion";
import { EbookHeader } from "@/components/EbookHeader";
import { EbookFooter } from "@/components/EbookFooter";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Zap, TrendingUp, CheckCircle2, ChevronRight, Lock, Globe } from "lucide-react";

const slxImage = "/attached_assets/ebook_v1_cover.jpg";

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
        <div
            className="ebook-theme-wrapper"
            style={{
                // @ts-ignore
                "--background": "36 33% 97%",
                "--foreground": "25 20% 15%",
                "--card": "36 33% 95%",
                "--card-foreground": "25 20% 15%",
                "--popover": "36 33% 97%",
                "--popover-foreground": "25 20% 15%",
                "--primary": "270 50% 60%",
                "--primary-foreground": "36 33% 97%",
                "--secondary": "36 25% 90%",
                "--secondary-foreground": "25 20% 15%",
                "--muted": "36 20% 88%",
                "--muted-foreground": "25 10% 45%",
                "--accent": "270 40% 75%",
                "--accent-foreground": "25 20% 15%",
                "--destructive": "0 84% 60%",
                "--destructive-foreground": "210 40% 98%",
                "--border": "270 20% 85%",
                "--input": "270 20% 85%",
                "--ring": "270 50% 60%",
                "--radius": "0.5rem",
                "--font-serif-display": "'Playfair Display', serif",
                "--font-serif-body": "'Lora', serif",
            } as any}
        >
            <div className="min-h-screen bg-background text-foreground font-serif-body selection:bg-primary/20 antialiased">
                <style>{`
            .ebook-theme-wrapper {
              font-family: var(--font-serif-body);
            }
            .ebook-theme-wrapper h1, 
            .ebook-theme-wrapper h2, 
            .ebook-theme-wrapper h3, 
            .ebook-theme-wrapper .font-serif-display {
              font-family: var(--font-serif-display) !important;
            }
            .ebook-theme-wrapper .font-serif-body {
              font-family: var(--font-serif-body) !important;
            }
          `}</style>

                <EbookHeader />

                {/* HERO SECTION */}
                <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
                                Manual de Alta Performance
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] text-foreground">
                                O Princípio da <span className="text-primary italic">Habilidade</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                                Domine a performance no Call of Duty Mobile através da ciência, técnica e controle mental.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    size="lg"
                                    className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto"
                                    onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                >
                                    Comprar Agora
                                    <ChevronRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="px-8 py-6 text-lg rounded-xl border-2 border-primary/20 hover:bg-primary/5 text-foreground w-full sm:w-auto"
                                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                                >
                                    Saber Mais
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* LEARNING SECTION */}
                <section id="about" className="py-24 bg-white/50">
                    <div className="container mx-auto px-4">
                        <motion.div
                            {...fadeIn}
                            className="max-w-3xl mx-auto text-center pt-12 md:pt-20 mb-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                                A maioria das dicas de CODM não falha por serem ruins. <br />
                                <span className="text-primary italic block mt-4 md:mt-6">Elas falham por estarem atrasadas.</span>
                            </h2>
                            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    Enquanto você ajusta sensi, copia classe e muda HUD, você já ficou pra trás!
                                </p>
                                <p className="font-semibold text-foreground">
                                    O Princípio da Habilidade é um manual direto sobre o que realmente separa quem joga de verdade de quem só replica:
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 py-4">
                                    {["velocidade cognitiva", "controle real", "tomada de decisão"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-primary text-sm font-bold uppercase tracking-wider">
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
                                    title: "Sistema Muscular",
                                    desc: "Entenda a fisiologia por trás da precisão mecânica e desenvolva uma memória muscular infalível."
                                },
                                {
                                    icon: Zap,
                                    title: "Velocidade Cognitiva",
                                    desc: "Técnicas para acelerar sua leitura de jogo e tomada de decisão em frações de segundo."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Treino Eficiente",
                                    desc: "Uma metodologia comprovada para evoluir consistentemente sem desperdiçar horas jogando errado."
                                }
                            ].map((item, i) => (
                                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} key={i}>
                                    <Card className="h-full border-none shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background">
                                        <CardContent className="p-8 text-center">
                                            <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                                <item.icon className="h-7 w-7" />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm">
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
                <section id="content" className="py-24 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <motion.div
                                {...scaleIn}
                                className="lg:w-1/2"
                            >
                                <div className="relative aspect-[4/5] w-full max-w-md mx-auto bg-gradient-to-br from-primary to-primary/80 rounded shadow-2xl rotate-3 border-4 border-white/20 flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-black/10" />
                                    <div className="relative text-center text-primary-foreground border-2 border-white/30 p-8 h-full w-full flex flex-col justify-between">
                                        <div className="text-xs tracking-[0.2em] uppercase opacity-70">Manual Oficial</div>
                                        <div>
                                            <h3 className="text-4xl font-bold mb-2">O Princípio</h3>
                                            <h3 className="text-4xl italic font-bold">da Habilidade</h3>
                                        </div>
                                        <div className="w-12 h-12 bg-white/20 rounded-full mx-auto" />
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    O que está dentro do manual?
                                </h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    não é apenas um guia, é um sistema completo de reestruturação do seu sistema cognitivo com técnicas estudadas
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Fundamentos da mecânica avançada",
                                        "Psicologia do jogador de alta performance",
                                        "Otimização de HUD e sensibilidade personalizada",
                                        "Rotina de aquecimento e prevenção de lesões",
                                        "Comunicação e liderança in-game"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border/50 shadow-sm">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                            <span className="font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
                                        onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                    >
                                        Quero Acessar o Conteúdo Completo
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* AUTHOR SECTION */}
                <section id="author" className="py-24">
                    <div className="container mx-auto px-4">
                        <motion.div
                            {...fadeIn}
                            className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5 border border-primary/10 flex flex-col md:flex-row items-center gap-8 md:gap-12"
                        >
                            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-secondary overflow-hidden border-4 border-background shadow-lg">
                                <img src={slxImage} alt="SLX" className="w-full h-full object-cover" />
                            </div>

                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold mb-2">Quem é o SLX?</h2>
                                <p className="text-primary font-medium mb-4">Estrategista e Especialista em Neurociência Aplicada aos Games</p>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    Como analista e estudioso da performance humana em ambientes digitais, minha trajetória é pautada pela intersecção entre técnica e ciência cognitiva. O "Princípio da Habilidade" não é apenas um compilado de dicas, mas um framework metodológico validado para quem busca a maestria no Call of Duty Mobile. Ao adquirir este manual, você não está apenas comprando um guia, mas investindo em um sistema de treinamento profissional que transforma sua percepção e execução de jogo.
                                </p>
                                <div className="flex gap-4 justify-center md:justify-start">
                                    <a href="https://slx-codm.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer" title="Site Oficial">
                                        <Globe className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faq" className="py-24 bg-secondary/30">
                    <div className="container mx-auto px-4 max-w-3xl">
                        <motion.div
                            {...fadeIn}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
                            <p className="text-muted-foreground">Tire suas dúvidas antes de começar sua jornada.</p>
                        </motion.div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {[
                                { q: "Por quanto tempo tenho acesso?", a: "Você tem acesso por 60 dias após a compra. Após esse período, o acesso expira e você precisará comprar novamente se desejar. Isso garante que você realmente leia e pratique o conteúdo com foco total." },
                                { q: "Posso compartilhar o acesso?", a: "Não. O acesso é pessoal e intransferível. O sistema identifica acessos simultâneos e pode bloquear a conta." },
                                { q: "Qual o formato do conteúdo?", a: "O arquivo é um ebook digital com design minimalista, fundo âmbar estilo livro e tipografia otimizada para leitura confortável. Funciona em qualquer dispositivo." },
                                { q: "Serve para iniciantes?", a: "Sim! O método serve tanto para iniciantes como players já avançados, pois todas as dicas se estruturam numa base científica que serve tanto para dentro do jogo como para a vida." },
                                { q: "Isso funciona para outros jogos?", a: "Os princípios de autenticidade, controle muscular e velocidade cognitiva são universais. Você pode aplicar em qualquer jogo competitivo, mas o conteúdo é focado em Call of Duty Mobile." },
                                { q: "Tem garantia?", a: "Isso depende da política da Kiwify. Recomendo verificar os termos de compra na plataforma." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="bg-background border border-border rounded-lg px-4">
                                    <AccordionTrigger className="font-medium text-left hover:text-primary transition-colors py-4">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pb-4">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-foreground z-0" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="max-w-2xl mx-auto"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                Sua evolução começa agora
                            </h2>
                            <p className="text-xl text-white/70 mb-10 leading-relaxed">
                                Não perca mais tempo tentando adivinhar o que fazer. Tenha o mapa completo para a alta performance.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-10 inline-block">
                                <span className="text-white/60 text-sm uppercase tracking-wider block mb-2">Investimento Único</span>
                                <div className="flex items-end justify-center gap-2 text-white">
                                    <span className="text-xl mb-1.5 opacity-50 line-through">R$ 97,00</span>
                                    <span className="text-5xl font-bold">R$ 47,00</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 max-w-sm mx-auto">
                                <Button
                                    size="lg"
                                    className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg shadow-xl shadow-primary/25 rounded-xl"
                                    onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                >
                                    Comprar Agora - Acesso Imediato
                                </Button>
                                <div className="flex items-center justify-center gap-2 text-white/40 text-sm">
                                    <Lock className="w-3 h-3" />
                                    <span>Pagamento 100% Seguro via Kiwify</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <EbookFooter />
            </div>
        </div>
    );
}
