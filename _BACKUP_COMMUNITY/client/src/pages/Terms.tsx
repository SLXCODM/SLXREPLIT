import React from 'react';
import { useLanguage } from "@/contexts/LanguageContext";

export default function Terms() {
    const { language } = useLanguage();

    const texts = {
        pt: {
            title: "Termos de Uso",
            lastUpdate: "Última atualização",
            section1Title: "1. Aceitação dos Termos",
            section1Text: "Ao acessar e usar o SLX Training Hub, você concorda em cumprir estes termos de serviço. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.",
            section2Title: "2. Uso de Licença",
            section2Text: "É concedida permissão para jogar os jogos disponíveis no site para uso pessoal e não comercial apenas. Esta é a concessão de uma licença, não uma transferência de título.",
            section3Title: "3. Isenção de Responsabilidade",
            section3Text: "Os materiais no site da SLX são fornecidos 'como estão'. O SLX não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.",
            back: "Voltar para Home"
        },
        en: {
            title: "Terms of Use",
            lastUpdate: "Last update",
            section1Title: "1. Acceptance of Terms",
            section1Text: "By accessing and using the SLX Training Hub, you agree to comply with these terms of service. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
            section2Title: "2. License Use",
            section2Text: "Permission is granted to play the games available on the site for personal, non-commercial use only. This is the grant of a license, not a transfer of title.",
            section3Title: "3. Disclaimer",
            section3Text: "The materials on the SLX website are provided 'as is'. SLX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.",
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
