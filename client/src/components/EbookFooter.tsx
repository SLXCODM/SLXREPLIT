import { Link } from "wouter";

export function EbookFooter() {
    return (
        <footer className="bg-zinc-950 text-background py-16 border-t border-emerald-500/10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-primary uppercase tracking-tighter" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            O Princípio da Habilidade
                        </h3>
                        <p className="text-zinc-500 leading-relaxed max-w-sm mx-auto md:mx-0">
                            Elevando o nível do cenário competitivo de Call of Duty Mobile através da ciência, técnica e disciplina mental.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-white">Links Rápidos</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-primary transition-colors">Início</button></li>
                            <li><button onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">Conteúdo</button></li>
                            <li><button onClick={() => document.getElementById("author")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">Autor</button></li>
                            <li><button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-primary transition-colors">FAQ</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-white">Legal</h4>
                        <ul className="space-y-3 text-zinc-500">
                            <li><Link href="/privacy" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
                            <li><Link href="/terms" className="hover:text-primary transition-colors">Termos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-12 pt-8 text-center text-zinc-600 text-sm">
                    © {new Date().getFullYear()} O Princípio da Habilidade. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
