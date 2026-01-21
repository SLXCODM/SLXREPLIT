import React from "react";
import { CommunityHeader } from "../components/CommunityHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileText, RefreshCcw, ArrowLeft, Scale } from "lucide-react";

export default function CommunityLegal() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans pb-20">
            <CommunityHeader />

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 pt-32 max-w-4xl relative z-10">
                <Link href="/community">
                    <Button variant="ghost" className="mb-8 text-zinc-400 hover:text-emerald-400 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Voltar para o Início
                    </Button>
                </Link>

                <div className="space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        <Scale className="w-3 h-3" />
                        Transparência & Conformidade
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Termos e <span className="text-emerald-500">Políticas</span></h1>
                    <p className="text-zinc-500 text-lg">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
                </div>

                <div className="grid grid-cols-1 gap-12 text-zinc-300 leading-relaxed">

                    {/* Política de Reembolso */}
                    <section id="reembolso" className="space-y-6 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Política de Reembolso</h2>
                        </div>
                        <div className="space-y-4">
                            <p>
                                Entendemos que imprevistos acontecem. Nossa política segue o **Código de Defesa do Consumidor (CDC)** e as particularidades de produtos digitais personalizados:
                            </p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">Direito de Arrependimento (7 dias):</strong> Você tem o direito de desistir da compra em até 7 dias corridos, desde que o analista <span className="text-rose-400 italic font-bold">ainda não tenha iniciado</span> a execução da sua análise.
                                </li>
                                <li>
                                    <strong className="text-white">Serviço Personalizado:</strong> A análise de gameplay é um serviço digital personalizado e de consumo imediato após a entrega. <span className="text-cyan-400">Uma vez que o feedback em vídeo ou texto foi entregue no seu dashboard, o serviço é considerado prestado, não cabendo reembolso por arrependimento.</span>
                                </li>
                                <li>
                                    <strong className="text-white">Problemas Técnicos:</strong> Se houver erro no carregamento do vídeo de feedback ou arquivos corrompidos, garantimos a re-execução ou correção imediata.
                                </li>
                                <li>
                                    <strong className="text-white">Como solicitar:</strong> Envie um e-mail para o suporte ou entre em contato via Instagram caso sua análise ainda esteja com o status "Aguardando Pagamento" ou "Fila de Espera".
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Termos de Uso */}
                    <section id="termos" className="space-y-6 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                                <FileText className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Termos de Uso</h2>
                        </div>
                        <div className="space-y-4">
                            <p>Ao utilizar a plataforma SLX Community, você concorda com os seguintes pontos:</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">Natureza Subjetiva:</strong> A análise é baseada na técnica e experiência profissional do Analista SLX. O feedback é uma orientação subjetiva e não garante vitórias automáticas, dependendo exclusivamente da dedicação e treino do aluno.
                                </li>
                                <li>
                                    <strong className="text-white">Conteúdo do Vídeo:</strong> Você é responsável por enviar um vídeo de sua própria gameplay. Vídeos com conteúdo ofensivo, hacks ou comportamentos tóxicos serão descartados sem direito a reembolso.
                                </li>
                                <li>
                                    <strong className="text-white">Prazos:</strong> O tempo de entrega pode variar conforme a fila de espera, sendo informado estimadamente no dashboard.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Privacidade */}
                    <section id="privacidade" className="space-y-6 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-500">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Privacidade dos Dados</h2>
                        </div>
                        <div className="space-y-4">
                            <p>Sua privacidade é nossa prioridade máxima:</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">Seus Vídeos:</strong> As gameplays enviadas são acessadas apenas pelo Analista SLX para fins de estudo. Elas <span className="text-emerald-400 italic font-bold">nunca</span> serão postadas publicamente sem sua autorização explícita. Ao marcar a opção "Galeria Pública", você <span className="text-cyan-400">autoriza expressamente</span> o uso de trechos da análise em nossas Redes Sociais (TikTok, Instagram, YouTube) e na Galeria Pública para fins de marketing e demonstração educacional da metodologia SLX.
                                </li>
                                <li>
                                    <strong className="text-white">Dados de Login:</strong> Utilizamos autenticação via Google ou E-mail apenas para gerenciar seus pedidos e acessos. Não vendemos seus dados para terceiros.
                                </li>
                                <li>
                                    <strong className="text-white">Segurança:</strong> Utilizamos o Stripe para processamento de pagamentos, o que garante que nunca temos acesso aos seus dados de cartão de crédito.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center space-y-6 p-12 rounded-[40px] bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10">
                    <h3 className="text-2xl font-bold">Ainda tem dúvidas?</h3>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Se algo não ficou claro sobre os reembolsos ou a segurança dos seus dados, entre em contato com o suporte direto do SLX.
                    </p>
                    <Link href="/community">
                        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-10 h-14 font-bold">
                            Entendido, Voltar ao Site
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
