import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Privacy() {
    const { language } = useLanguage();

    const texts = {
        pt: {
            title: "Política de Privacidade",
            lastUpdate: "Última atualização",
            section1Title: "1. Coleta de Dados",
            section1Text: "Respeitamos a sua privacidade. Este site armazena progresso de jogo localmente no seu dispositivo (LocalStorage). Não coletamos nem transmitimos informações pessoais para servidores externos.",
            section2Title: "2. Cookies e Anúncios",
            section2Text: "Podemos usar serviços de terceiros, como Google AdSense, que utilizam cookies para exibir anúncios relevantes. Você pode ajustar as configurações de cookies no seu navegador.",
            section3Title: "3. Contato",
            section3Text: "Se tiver dúvidas sobre esta política de privacidade, você pode entrar em contato conosco.",
            back: "Voltar para Home"
        },
        en: {
            title: "Privacy Policy",
            lastUpdate: "Last update",
            section1Title: "1. Data Collection",
            section1Text: "We respect your privacy. This site stores game progress locally on your device (LocalStorage). We do not collect or transmit personal information to external servers.",
            section2Title: "2. Cookies and Ads",
            section2Text: "We may use third-party services, such as Google AdSense, which use cookies to display relevant ads. You can adjust your cookie settings in your browser.",
            section3Title: "3. Contact",
            section3Text: "If you have questions about this privacy policy, you may contact us.",
            back: "Back to Home"
        }
    };

    const t = texts[language as keyof typeof texts] || texts.pt;

    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-primary">{t.title}</h1>
                <p className="mb-4">{t.lastUpdate}: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">{t.section1Title}</h2>
                    <p className="text-gray-300">{t.section1Text}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">{t.section2Title}</h2>
                    <p className="text-gray-300">{t.section2Text}</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">{t.section3Title}</h2>
                    <p className="text-gray-300">{t.section3Text}</p>
                </section>

                <a href="/" className="text-primary hover:underline">{t.back}</a>
            </div>
        </div>
    );
}
