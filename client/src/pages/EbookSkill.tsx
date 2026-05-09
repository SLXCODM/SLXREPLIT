import { motion } from "framer-motion";
import { EbookHeader } from "@/components/EbookHeader";
import { EbookFooter } from "@/components/EbookFooter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Lock } from "lucide-react";

// Animation variants
const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
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
                "--accent-border": "hsl(270 40% 80%)",
                "--destructive": "0 84% 60%",
                "--destructive-foreground": "210 40% 98%",
                "--border": "270 20% 85%",
                "--input": "270 20% 85%",
                "--ring": "270 50% 60%",
                "--radius": "0.5rem",
                "--primary-border": "hsl(270 50% 65%)",
                "--secondary-border": "hsl(36 25% 85%)",
                "--button-outline": "rgba(155, 107, 206, 0.2)",
                "--font-serif-display": "'Playfair Display', serif",
                "--font-serif-body": "'Lora', serif",
            } as any}
        >
            <div className="min-h-screen bg-background text-foreground font-serif-body selection:bg-primary/20 antialiased flex flex-col">
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

                {/* HERO SECTION - DIRETO E RETO */}
                <section className="relative flex-1 flex items-center justify-center pt-20 pb-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-6xl mx-auto">
                            
                            {/* TEXT & CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="lg:w-1/2 text-center lg:text-left"
                            >
                                <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
                                    Manual Oficial SLX
                                </div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-[1.1] text-foreground">
                                    O Princípio da <span className="text-primary italic">Habilidade</span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    A base científica e técnica para evoluir de verdade no Call of Duty Mobile. Chega de focar apenas em HUD e sensi.
                                </p>

                                <div className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0 text-left">
                                    {[
                                        "Fundamentos da mecânica e precisão",
                                        "Controle de estresse e cognição rápida",
                                        "Configurações que importam (sem mitos)",
                                        "Rotina de aquecimento direto ao ponto"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                            <span className="font-medium text-lg text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-col items-center lg:items-start gap-4">
                                    <div className="flex items-end gap-3 text-foreground mb-2">
                                        <span className="text-xl opacity-50 line-through mb-1">R$ 97,00</span>
                                        <span className="text-4xl font-bold">R$ 23,00</span>
                                    </div>
                                    <Button
                                        size="lg"
                                        className="bg-primary hover:bg-primary/90 text-white px-8 py-7 text-xl rounded-xl shadow-[0_10px_30px_-10px_rgba(155,107,206,0.5)] border-primary transition-all duration-300 w-full max-w-md focus-visible:ring-[#9B6BCE]"
                                        onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                    >
                                        Comprar Agora
                                        <ChevronRight className="ml-2 h-6 w-6" />
                                    </Button>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                                        <Lock className="w-4 h-4" />
                                        <span>Acesso imediato e seguro via Kiwify</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* EBOOK MOCKUP */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="lg:w-1/2 flex justify-center"
                            >
                                <div className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-gradient-to-br from-primary to-[#7D4BA3] rounded shadow-2xl rotate-2 border-4 border-white/20 flex items-center justify-center p-8 hover:rotate-0 transition-transform duration-500">
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
                        </div>
                    </div>
                </section>

                <EbookFooter />
            </div>
        </div>
    );
}
