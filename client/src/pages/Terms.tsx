import React from 'react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-primary">Termos de Uso</h1>
                <p className="mb-4">Última atualização: {new Date().toLocaleDateString()}</p>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">1. Aceitação dos Termos</h2>
                    <p className="text-gray-300">Ao acessar e usar o SLX Training Hub, você concorda em cumprir estes termos de serviço. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">2. Uso de Licença</h2>
                    <p className="text-gray-300">É concedida permissão para jogar os jogos disponíveis no site para uso pessoal e não comercial apenas. Esta é a concessão de uma licença, não uma transferência de título.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-3">3. Isenção de Responsabilidade</h2>
                    <p className="text-gray-300">Os materiais no site da SLX são fornecidos 'como estão'. O SLX não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.</p>
                </section>

                <a href="/" className="text-primary hover:underline">Voltar para Home</a>
            </div>
        </div>
    );
}
