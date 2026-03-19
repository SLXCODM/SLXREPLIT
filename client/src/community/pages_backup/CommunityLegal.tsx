import React from "react";
import { CommunityHeader } from "../components/CommunityHeader";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ShieldCheck, FileText, RefreshCcw, ArrowLeft, Scale } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CommunityLegal() {
    const { language } = useLanguage();

    const t = {
        back: language === "pt" ? "Voltar para o Início" : "Back to Home",
        badge: language === "pt" ? "Transparência & Conformidade" : "Transparency & Compliance",
        title: language === "pt" ? "Termos e Políticas" : "Terms and Policies",
        polTitle: language === "pt" ? "Políticas" : "Policies",
        update: language === "pt" ? "Última atualização:" : "Last updated:",
        refundTitle: language === "pt" ? "Política de Reembolso" : "Refund Policy",
        refundIntro: language === "pt"
            ? "Entendemos que imprevistos acontecem. Nossa política segue o Código de Defesa do Consumidor (CDC) e as particularidades de produtos digitais personalizados:"
            : "We understand that unforeseen events happen. Our policy follows the Consumer Defense Code (CDC) and the particularities of personalized digital products:",
        right7: language === "pt" ? "Direito de Arrependimento (7 dias):" : "Right of Withdrawal (7 days):",
        right7Desc: language === "pt"
            ? "Você tem o direito de desistir da compra em até 7 dias corridos, desde que o analista ainda não tenha iniciado a execução da sua análise."
            : "You have the right to withdraw from the purchase within 7 calendar days, provided the analyst has not yet started performing your analysis.",
        started: language === "pt" ? "ainda não tenha iniciado" : "has not yet started",
        persTitle: language === "pt" ? "Serviço Personalizado:" : "Personalized Service:",
        persDesc: language === "pt"
            ? "A análise de gameplay é um serviço digital personalizado e de consumo imediato após a entrega. Uma vez que o feedback em vídeo ou texto foi entregue no seu dashboard, o serviço é considerado prestado, não cabendo reembolso por arrependimento."
            : "Gameplay analysis is a personalized digital service for immediate consumption upon delivery. Once the video or text feedback has been delivered to your dashboard, the service is considered rendered, and no refund for withdrawal is applicable.",
        techTitle: language === "pt" ? "Problemas Técnicos:" : "Technical Issues:",
        techDesc: language === "pt"
            ? "Se houver erro no carregamento do vídeo de feedback ou arquivos corrompidos, garantimos a re-execução ou correção imediata."
            : "If there is an error in loading the feedback video or corrupted files, we guarantee re-execution or immediate correction.",
        howTitle: language === "pt" ? "Como solicitar:" : "How to request:",
        howDesc: language === "pt"
            ? "Envie um e-mail para o suporte ou entre em contato via Instagram caso sua análise ainda esteja com o status 'Aguardando Pagamento' ou 'Fila de Espera'."
            : "Send an email to support or contact us via Instagram if your analysis is still with the status 'Waiting Payment' or 'Waiting Queue'.",
        termsTitle: language === "pt" ? "Termos de Uso" : "Terms of Use",
        termsIntro: language === "pt" ? "Ao utilizar a plataforma SLX Community, você concorda com os seguintes pontos:" : "By using the SLX Community platform, you agree to the following points:",
        subjTitle: language === "pt" ? "Natureza Subjetiva:" : "Subjective Nature:",
        subjDesc: language === "pt"
            ? "A análise é baseada na técnica e experiência profissional do Analista SLX. O feedback é uma orientação subjetiva e não garante vitórias automáticas, dependendo exclusivamente da dedicação e treino do aluno."
            : "The analysis is based on the technique and professional experience of Analyst SLX. The feedback is a subjective orientation and does not guarantee automatic victories, depending exclusively on the student's dedication and training.",
        videoTitle: language === "pt" ? "Conteúdo do Vídeo:" : "Video Content:",
        videoDesc: language === "pt"
            ? "Você é responsável por enviar um vídeo de sua própria gameplay. Vídeos com conteúdo ofensivo, hacks ou comportamentos tóxicos serão descartados sem direito a reembolso."
            : "You are responsible for submitting a video of your own gameplay. Videos with offensive content, hacks, or toxic behavior will be discarded without right to refund.",
        deadlineTitle: language === "pt" ? "Prazos:" : "Deadlines:",
        deadlineDesc: language === "pt"
            ? "O tempo de entrega pode variar conforme a fila de espera, sendo informado estimadamente no dashboard."
            : "The delivery time may vary depending on the queue, being informed estimation on the dashboard.",
        privTitle: language === "pt" ? "Privacidade dos Dados" : "Data Privacy",
        privIntro: language === "pt" ? "Sua privacidade é nossa prioridade máxima:" : "Your privacy is our top priority:",
        yourVideos: language === "pt" ? "Seus Vídeos:" : "Your Videos:",
        yourVideosDesc: language === "pt"
            ? "As gameplays enviadas são acessadas apenas pelo Analista SLX para fins de estudo. Elas nunca serão postadas publicamente sem sua autorização explícita. Ao marcar a opção \"Galeria Pública\", você autoriza expressamente o uso de trechos da análise em nossas Redes Sociais (TikTok, Instagram, YouTube) e na Galeria Pública para fins de marketing e demonstração educacional da metodologia SLX."
            : "Submitted gameplays are accessed only by Analyst SLX for study purposes. They will never be posted publicly without your explicit authorization. By checking the \"Public Gallery\" option, you expressly authorize the use of clips of the analysis on our Social Networks (TikTok, Instagram, YouTube) and in the Public Gallery for marketing purposes and educational demonstration of the SLX methodology.",
        loginData: language === "pt" ? "Dados de Login:" : "Login Data:",
        loginDataDesc: language === "pt" ? "Utilizamos autenticação via Google ou E-mail apenas para gerenciar seus pedidos e acessos. Não vendemos seus dados para terceiros." : "We use Google or Email authentication only to manage your orders and access. We do not sell your data to third parties.",
        securityTitle: language === "pt" ? "Segurança:" : "Security:",
        securityDesc: language === "pt" ? "Utilizamos o Stripe para processamento de pagamentos, o que garante que nunca temos acesso aos seus dados de cartão de crédito." : "We use Stripe for payment processing, which ensures we never have access to your credit card data.",
        doubtsTitle: language === "pt" ? "Ainda tem dúvidas?" : "Still have questions?",
        doubtsDesc: language === "pt"
            ? "Se algo não ficou claro sobre os reembolsos ou a segurança dos seus dados, entre em contato com o suporte direto do SLX."
            : "If something is not clear about refunds or the security of your data, contact SLX direct support.",
        doubtsBtn: language === "pt" ? "Entendido, Voltar ao Site" : "Understood, Back to Site",
    };

    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-emerald-500/30 font-sans pb-20">
            <CommunityHeader />

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 pt-32 max-w-4xl relative z-10">
                <Link href="/community">
                    <Button variant="ghost" className="mb-8 text-zinc-400 hover:text-emerald-400 gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        {t.back}
                    </Button>
                </Link>

                <div className="space-y-4 mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                        <Scale className="w-3 h-3" />
                        {t.badge}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter">{language === "pt" ? "Termos e" : "Terms and"} <span className="text-emerald-500">{t.polTitle}</span></h1>
                    <p className="text-zinc-500 text-lg">{t.update} {new Date().toLocaleDateString(language === "pt" ? 'pt-BR' : 'en-US')}</p>
                </div>

                <div className="grid grid-cols-1 gap-12 text-zinc-300 leading-relaxed">

                    {/* Política de Reembolso */}
                    <section id="reembolso" className="space-y-6 p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-500">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{t.refundTitle}</h2>
                        </div>
                        <div className="space-y-4">
                            <p>{t.refundIntro}</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">{t.right7}</strong> {t.right7Desc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.persTitle}</strong> {t.persDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.techTitle}</strong> {t.techDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.howTitle}</strong> {t.howDesc}
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
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{t.termsTitle}</h2>
                        </div>
                        <div className="space-y-4">
                            <p>{t.termsIntro}</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">{t.subjTitle}</strong> {t.subjDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.videoTitle}</strong> {t.videoDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.deadlineTitle}</strong> {t.deadlineDesc}
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
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">{t.privTitle}</h2>
                        </div>
                        <div className="space-y-4">
                            <p>{t.privIntro}</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li>
                                    <strong className="text-white">{t.yourVideos}</strong> {t.yourVideosDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.loginData}</strong> {t.loginDataDesc}
                                </li>
                                <li>
                                    <strong className="text-white">{t.securityTitle}</strong> {t.securityDesc}
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className="mt-20 text-center space-y-6 p-12 rounded-[40px] bg-gradient-to-b from-emerald-500/5 to-transparent border border-emerald-500/10">
                    <h3 className="text-2xl font-bold">{t.doubtsTitle}</h3>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        {t.doubtsDesc}
                    </p>
                    <Link href="/community">
                        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-full px-10 h-14 font-bold">
                            {t.doubtsBtn}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
