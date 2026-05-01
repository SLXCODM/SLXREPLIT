import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function EbookNanoCard() {
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        if (language !== 'pt') return;

        // Show after 2 seconds delay
        const timer = setTimeout(() => {
            const hasClosed = sessionStorage.getItem("slx_ebook_promo_closed");
            if (!hasClosed) {
                setIsVisible(true);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [language]);

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsVisible(false);
        sessionStorage.setItem("slx_ebook_promo_closed", "true");
    };

    const handleLink = () => {
        window.location.href = "/ebook";
    };

    if (language !== 'pt') return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 100, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 100, scale: 0.9 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    onClick={handleLink}
                    className="fixed bottom-4 left-4 w-[calc(100vw-32px)] md:left-auto md:bottom-6 md:right-6 z-[100] md:w-[340px] p-4 bg-zinc-950/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl shadow-2xl shadow-emerald-500/10 cursor-pointer group hover:border-emerald-500 transition-colors"
                >
                    <button
                        onClick={handleClose}
                        className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 hover:text-white hover:bg-red-500 transition-all z-10"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="flex gap-4 items-center">
                        {/* Visual Book Representation */}
                        <div className="w-16 h-20 shrink-0 bg-gradient-to-br from-emerald-500 to-emerald-900 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden ring-2 ring-white/5">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                            <div className="absolute inset-y-0 left-0 w-1 bg-white/20" />
                            <BookOpen className="w-8 h-8 text-white/40" />
                        </div>

                        <div className="flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Manual Oficial SLX</span>
                            </div>

                            <h3 className="text-sm font-black text-white leading-tight uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                                O Princípio da <span className="text-emerald-500 italic">Habilidade</span>
                            </h3>

                            <div className="flex items-center justify-between pt-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-zinc-500 line-through">R$ 97</span>
                                    <span className="text-sm font-black text-white">R$ 47,00</span>
                                </div>
                                <div className="w-6 h-6 rounded-full bg-zinc-800 group-hover:bg-emerald-500 flex items-center justify-center transition-all group-hover:translate-x-1">
                                    <ChevronRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
