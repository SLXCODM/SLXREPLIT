import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
    const { language } = useLanguage();

    const texts = {
        pt: {
            title: "Política de Privacidade",
            lastUpdate: "Última atualização",
            intro: "Esta Política de Privacidade descreve como o site SLX (slx.wav) coleta, usa e protege as informações dos seus visitantes, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018).",

            section1Title: "1. Dados Coletados",
            section1Text: "Este site coleta dados de forma mínima e transparente. O progresso de jogos e preferências de idioma são armazenados localmente no seu dispositivo via LocalStorage, sem envio a servidores externos. Ao navegar pelo site, dados de uso anônimos podem ser coletados para fins de análise de tráfego.",

            section2Title: "2. Google AdSense e Cookies de Publicidade",
            section2Text: "Este site utiliza o Google AdSense para exibir anúncios. O Google AdSense utiliza cookies para personalizar anúncios com base nas suas interações anteriores na web. Os dados coletados pelo Google podem incluir: identificadores de dispositivo, endereço IP (anonimizado), histórico de navegação e preferências de anúncio. O SLX não tem acesso a esses dados — eles são gerenciados exclusivamente pelo Google. Você pode optar por não receber anúncios personalizados em: adssettings.google.com.",

            section3Title: "3. Cookies e Tecnologias de Rastreamento",
            section3Text: "Cookies são pequenos arquivos de texto armazenados no seu navegador. Utilizamos cookies para: (a) lembrar suas preferências de idioma; (b) salvar progresso em mini-jogos; (c) exibir anúncios relevantes via Google AdSense. Você pode gerenciar ou desativar cookies nas configurações do seu navegador, mas algumas funcionalidades do site podem ser afetadas.",

            section4Title: "4. Seus Direitos (LGPD)",
            section4Text: "Como titular de dados, você tem o direito de: acessar os dados que temos sobre você; solicitar correção de dados incorretos; solicitar a exclusão de dados pessoais; revogar o consentimento a qualquer momento; e opor-se ao tratamento de dados para fins de publicidade. Para exercer esses direitos, entre em contato pelo formulário de Contato do site.",

            section5Title: "5. Compartilhamento de Dados",
            section5Text: "Não vendemos, alugamos ou compartilhamos dados pessoais com terceiros para fins comerciais. Dados anônimos de uso podem ser compartilhados com o Google para fins de exibição de anúncios, conforme descrito na Política de Privacidade do Google (policies.google.com/privacy).",

            section6Title: "6. Links Externos",
            section6Text: "Este site contém links para plataformas externas (YouTube, Instagram, TikTok, Substack). Não somos responsáveis pelas práticas de privacidade dessas plataformas. Recomendamos que leia as políticas de privacidade de cada serviço que utilizar.",

            section7Title: "7. Segurança",
            section7Text: "Adotamos medidas técnicas e organizacionais razoáveis para proteger suas informações. No entanto, nenhum sistema de transmissão pela internet é 100% seguro.",

            section8Title: "8. Contato e Responsável",
            section8Text: "Responsável pelo site: SLX (slx.wav). Para dúvidas sobre esta política, entre em contato pelo formulário da página de Contato. Nos comprometemos a responder em até 30 dias úteis.",

            back: "← Voltar para Home"
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last update",
            intro: "This Privacy Policy describes how the SLX website (slx.wav) collects, uses and protects visitor information, in compliance with the Brazilian General Data Protection Law (LGPD — Law 13.709/2018).",

            section1Title: "1. Data Collected",
            section1Text: "This site collects data minimally and transparently. Game progress and language preferences are stored locally on your device via LocalStorage, without being sent to external servers. While browsing, anonymous usage data may be collected for traffic analysis purposes.",

            section2Title: "2. Google AdSense and Advertising Cookies",
            section2Text: "This site uses Google AdSense to display advertisements. Google AdSense uses cookies to personalize ads based on your previous web interactions. Data collected by Google may include: device identifiers, IP address (anonymized), browsing history and ad preferences. SLX does not have access to this data — it is managed exclusively by Google. You can opt out of personalized ads at: adssettings.google.com.",

            section3Title: "3. Cookies and Tracking Technologies",
            section3Text: "Cookies are small text files stored in your browser. We use cookies to: (a) remember your language preferences; (b) save progress in mini-games; (c) display relevant ads via Google AdSense. You can manage or disable cookies in your browser settings, but some site features may be affected.",

            section4Title: "4. Your Rights (LGPD)",
            section4Text: "As a data subject, you have the right to: access the data we hold about you; request correction of incorrect data; request deletion of personal data; withdraw consent at any time; and object to data processing for advertising purposes. To exercise these rights, contact us through the site's Contact form.",

            section5Title: "5. Data Sharing",
            section5Text: "We do not sell, rent or share personal data with third parties for commercial purposes. Anonymous usage data may be shared with Google for advertising display purposes, as described in Google's Privacy Policy (policies.google.com/privacy).",

            section6Title: "6. External Links",
            section6Text: "This site contains links to external platforms (YouTube, Instagram, TikTok, Substack). We are not responsible for the privacy practices of these platforms. We recommend reading the privacy policies of each service you use.",

            section7Title: "7. Security",
            section7Text: "We adopt reasonable technical and organizational measures to protect your information. However, no internet transmission system is 100% secure.",

            section8Title: "8. Contact and Data Controller",
            section8Text: "Site owner: SLX (slx.wav). For questions about this policy, contact us through the Contact page form. We commit to responding within 30 business days.",

            back: "← Back to Home"
        }
    };

    const t = texts[language as keyof typeof texts] || texts.pt;

    const sections = [
        { title: t.section1Title, text: t.section1Text },
        { title: t.section2Title, text: t.section2Text },
        { title: t.section3Title, text: t.section3Text },
        { title: t.section4Title, text: t.section4Text },
        { title: t.section5Title, text: t.section5Text },
        { title: t.section6Title, text: t.section6Text },
        { title: t.section7Title, text: t.section7Text },
        { title: t.section8Title, text: t.section8Text },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-4 border-b border-border pb-8">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{t.title}</h1>
                        <p className="text-sm text-muted-foreground">{t.lastUpdate}: {new Date().toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}</p>
                        <p className="text-muted-foreground leading-relaxed text-base">{t.intro}</p>
                    </div>

                    {/* Sections */}
                    <div className="space-y-8">
                        {sections.map((section, i) => (
                            <section key={i} className="space-y-3">
                                <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{section.text}</p>
                            </section>
                        ))}
                    </div>

                    {/* Google Policy Link */}
                    <div className="p-4 bg-card border border-border rounded-lg text-sm text-muted-foreground">
                        <p>
                            {language === 'pt'
                                ? 'Para saber como o Google usa os dados quando você utiliza sites ou apps dos nossos parceiros, acesse: '
                                : "To learn how Google uses data when you use our partners' sites or apps, visit: "}
                            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
                                policies.google.com
                            </a>
                        </p>
                    </div>

                    <a href="/" className="inline-block text-primary hover:underline underline-offset-2 text-sm font-medium">
                        {t.back}
                    </a>
                </div>
            </div>
        </div>
    );
}
