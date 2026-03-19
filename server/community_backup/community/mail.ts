import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email do Analista SLX (Para receber notificações de novos pedidos)
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'analista.slx@gmail.com';

export async function sendOrderNotificationToAdmin(orderId: number, clientName: string) {
    console.log(`[MAIL] Notificando Admin sobre novo pedido: #${orderId} de ${clientName}`);

    if (!resend) {
        console.warn("[MAIL] Resend API Key ausente. Email simulado no log.");
        return;
    }

    try {
        await resend.emails.send({
            from: 'SLX Community <notifications@slxcommunity.xyz>',
            to: ADMIN_EMAIL,
            subject: `🔥 Novo Pedido de Análise: #${orderId}`,
            html: `
                <div style="font-family: sans-serif; background: #09090b; color: #fff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #10b981; font-size: 24px;">Novo Pedido Recebido!</h1>
                    <p>O cliente <strong>${clientName}</strong> acaba de confirmar um pagamento.</p>
                    <p>ID do Pedido: <strong>#${orderId}</strong></p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
                    <a href="https://vitoria-psicanalise.replit.app/community/admin" style="background: #10b981; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ver no Painel do Analista</a>
                </div>
            `
        });
    } catch (err) {
        console.error("[MAIL] Erro ao enviar email para admin:", err);
    }
}

export async function sendPaymentConfirmedToClient(clientEmail: string, clientName: string) {
    console.log(`[MAIL] Notificando Cliente sobre confirmação de pagamento: ${clientEmail}`);

    if (!resend) return;

    try {
        await resend.emails.send({
            from: 'SLX Community <notifications@slxcommunity.xyz>',
            to: clientEmail,
            subject: '✅ Pagamento Confirmado - Academia SLX',
            html: `
                <div style="font-family: sans-serif; background: #09090b; color: #fff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #10b981; font-size: 24px;">Olá, ${clientName}!</h1>
                    <p>Seu pagamento foi confirmado com sucesso. Sua gameplay já está na fila para o SLX analisar.</p>
                    <p>Fique de olho na sua <strong>Área do Aluno</strong> para o feedback.</p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
                    <a href="https://vitoria-psicanalise.replit.app/community/dashboard" style="background: #10b981; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ir para Área do Aluno</a>
                </div>
            `
        });
    } catch (err) {
        console.error("[MAIL] Erro ao enviar email para cliente:", err);
    }
}

export async function sendAnalysisFinishedToClient(clientEmail: string, clientName: string, videoTitle: string) {
    console.log(`[MAIL] Notificando Cliente sobre conclusão de análise: ${clientEmail}`);

    if (!resend) return;

    try {
        await resend.emails.send({
            from: 'SLX Community <notifications@slxcommunity.xyz>',
            to: clientEmail,
            subject: '🎮 Sua Análise SLX está Pronta!',
            html: `
                <div style="font-family: sans-serif; background: #09090b; color: #fff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #10b981; font-size: 24px;">${clientName}, sua análise chegou!</h1>
                    <p>O SLX terminou de analisar sua gameplay: <strong>${videoTitle}</strong>.</p>
                    <p>Acesse agora sua Área do Aluno para conferir as notas, resumo e os treinos recomendados.</p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
                    <a href="https://vitoria-psicanalise.replit.app/community/dashboard" style="background: #10b981; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ver Meu Feedback</a>
                </div>
            `
        });
    } catch (err) {
        console.error("[MAIL] Erro ao enviar email de conclusão para cliente:", err);
    }
}
