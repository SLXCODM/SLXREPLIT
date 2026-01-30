import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function EbookHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const NavItems = () => (
        <>
            <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium font-serif-body"
            >
                Sobre
            </button>
            <button
                onClick={() => scrollToSection("content")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium font-serif-body"
            >
                Conteúdo
            </button>
            <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium font-serif-body"
            >
                FAQ
            </button>
        </>
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b ${isScrolled
                    ? "bg-background/90 backdrop-blur-md border-border shadow-sm py-3"
                    : "bg-transparent border-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-serif-display text-primary tracking-tight">
                    O Princípio da Habilidade
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <NavItems />
                    <Button
                        className="bg-primary hover:bg-primary/90 text-white font-serif-body px-6"
                        onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                    >
                        Comprar Agora
                    </Button>
                </nav>

                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-background border-l-primary/20">
                            <div className="flex flex-col gap-6 mt-10">
                                <NavItems />
                                <Button
                                    className="bg-primary hover:bg-primary/90 text-white w-full"
                                    onClick={() => window.open("https://pay.kiwify.com.br/25YEnTk", "_blank")}
                                >
                                    Comprar Agora
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
