import type { Express } from "express";
import { MercadoPagoConfig, Preference } from 'mercadopago';

export function setupMercadoPagoRoutes(app: Express) {
  app.post("/api/mercadopago/create-preference", async (req, res) => {
    try {
      // Initialize client with token from Vercel env
      const client = new MercadoPagoConfig({ 
        accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-TOKEN', 
        options: { timeout: 5000 } 
      });

      const preference = new Preference(client);

      const response = await preference.create({
        body: {
          items: [
            {
              id: "codm-analysis",
              title: "Análise de Gameplay CODM",
              quantity: 1,
              unit_price: 5.00,
              currency_id: "BRL"
            }
          ],
          back_urls: {
            success: "https://slx-codm.vercel.app/community/payment-success",
            failure: "https://slx-codm.vercel.app/community/payment-cancel",
            pending: "https://slx-codm.vercel.app/community/payment-success"
          },
          auto_return: "approved",
          // Excluir boleto se quiser focar no PIX/Cartão para aprovação instantânea
          payment_methods: {
            excluded_payment_types: [
              { id: "ticket" } // Boleto
            ],
            installments: 1
          }
        }
      });

      // Retorna a URL de checkout
      res.json({ id: response.id, init_point: response.init_point });
    } catch (error) {
      console.error("Erro ao criar preferência do Mercado Pago:", error);
      res.status(500).json({ error: "Failed to create preference" });
    }
  });
}
