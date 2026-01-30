import { Link } from "wouter";

export function EbookFooter() {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="font-serif-display text-2xl font-bold mb-4 text-primary">
                            O Princípio da Habilidade
                        </h3>
                        <p className="text-white/60 font-serif-body leading-relaxed max-w-sm">
                            Elevando o nível do cenário competitivo de Call of Duty Mobile através da ciência, técnica e disciplina mental.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-serif-display text-lg font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-3 font-serif-body text-white/60">
                            <li><button onClick={() => window.scrollTo(0, 0)} className="hover:text-primary transition-colors">Início</button></li>
                            <li><button onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">Conteúdo</button></li>
                            <li><button onClick={() => document.getElementById("author")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">Autor</button></li>
                            <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">FAQ</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-serif-display text-lg font-bold mb-4">Legal</h4>
                        <ul className="space-y-3 font-serif-body text-white/60">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm font-serif-body">
                    © {new Date().getFullYear()} O Princípio da Habilidade. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
