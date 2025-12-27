import React from 'react';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-primary">Política de Privacidade</h1>
                <p className="mb-4">Última atualização: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">1. Coleta de Dados</h2>
                    <p className="text-gray-300">Respeitamos a sua privacidade. Este site armazena progresso de jogo localmente no seu dispositivo (LocalStorage). Não coletamos nem transmitimos informações pessoais para servidores externos.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">2. Cookies e Anúncios</h2>
                    <p className="text-gray-300">Podemos usar serviços de terceiros, como Google AdSense, que utilizam cookies para exibir anúncios relevantes. Você pode ajustar as configurações de cookies no seu navegador.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">3. Contato</h2>
                    <p className="text-gray-300">Se tiver dúvidas sobre esta política de privacidade, você pode entrar em contato conosco.</p>
                </section>

                <a href="/" className="text-primary hover:underline">Voltar para Home</a>
            </div>
        </div>
    );
}
