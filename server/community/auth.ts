import { type Express, type Request, type Response } from "express";
import { storage } from "../storage";
import { scryptSync, randomBytes, timingSafeEqual } from "node:crypto";

// Password hashing helper
function hashPassword(password: string) {
    const salt = randomBytes(16).toString("hex");
    const buf = scryptSync(password, salt, 64);
    return `${buf.toString("hex")}.${salt}`;
}

function comparePasswords(supplied: string, stored: string) {
    const [hashed, salt] = stored.split(".");
    const hashedBuf = Buffer.from(hashed, "hex");
    const suppliedBuf = scryptSync(supplied, salt, 64) as Buffer;
    return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
    // 1. Registro por Email/Senha (DESATIVADO POR SEGURANÇA)
    app.post("/api/community/auth/register", async (req, res) => {
        return res.status(403).json({
            message: "Registro direto desativado. Use o login pelo Google para sua segurança."
        });
    });

    // 2. Login por Email/Senha (DESATIVADO POR SEGURANÇA)
    app.post("/api/community/auth/login", async (req, res) => {
        return res.status(403).json({
            message: "Login direto desativado. Use o Google Auth."
        });
    });

    // 3. Login Real do Google (OAuth 2.0)
    app.get("/api/community/auth/google", (req, res) => {
        const client_id = process.env.GOOGLE_CLIENT_ID?.trim();

        console.log(`[Google Auth] Initiating redirect with Client ID length: ${client_id?.length || 0}`);
        if (!client_id) {
            console.error("[Google Auth] CRITICAL: GOOGLE_CLIENT_ID is missing in environment variables!");
        }

        // Force HTTPS in production (Vercel)
        const protocol = process.env.VERCEL === "1" ? "https" : req.protocol;
        const redirect_uri = `${protocol}://${req.get("host")}/api/community/auth/google/callback`;
        const scope = "openid email profile";
        const response_type = "code";

        const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}&response_type=${response_type}&access_type=offline&prompt=consent`;

        res.redirect(googleUrl);
    });

    // Callback Real do OAuth
    app.get("/api/community/auth/google/callback", async (req, res) => {
        const { code, error, error_description } = req.query;

        console.log(`[Google OAuth Callback] Query received:`, req.query);

        if (error) {
            console.error(`[Google OAuth Error] ${error}: ${error_description}`);
            return res.status(400).send(`O Google retornou um erro: ${error}. Descrição: ${error_description}`);
        }

        if (!code) {
            console.warn(`[Google OAuth Warning] No code parameter in callback URL.`);
            return res.status(400).send("Código de autorização não fornecido pelo Google. Verifique se o seu Client ID e Redirect URI estão corretos no Google Cloud Console.");
        }

        const client_id = process.env.GOOGLE_CLIENT_ID?.trim();
        const client_secret = process.env.GOOGLE_CLIENT_SECRET?.trim();

        if (!client_id || !client_secret) {
            console.error(`[Google OAuth Error] Missing credentials in environment variables.`);
            return res.status(500).send("Erro interno: Chaves do Google não encontradas no servidor. Verifique o seu arquivo .env.");
        }

        const protocol = process.env.VERCEL === "1" ? "https" : req.protocol;
        const redirect_uri = `${protocol}://${req.get("host")}/api/community/auth/google/callback`;

        try {
            // 1. Trocar código por token
            const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    code: code as string,
                    client_id: client_id!,
                    client_secret: client_secret!,
                    redirect_uri,
                    grant_type: "authorization_code"
                })
            });

            const tokens = await tokenRes.json();
            if (!tokenRes.ok) throw new Error(tokens.error_description || "Erro ao obter token do Google");

            // 2. Obter info do usuário
            const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: { Authorization: `Bearer ${tokens.access_token}` }
            });

            const googleUser = await userRes.json();
            if (!userRes.ok) throw new Error("Erro ao obter perfil do Google");

            const openId = googleUser.sub;
            let user = await storage.getUserByOpenId(openId);

            if (!user) {
                user = await storage.createUser({
                    openId,
                    name: googleUser.name || "Jogador SLX",
                    email: googleUser.email,
                    loginMethod: "google",
                    role: "user"
                });
            }

            // Sessão
            (req.session as any).user = {
                id: user.id,
                role: user.role,
                name: user.name
            };

            res.redirect("/community/dashboard");
        } catch (error: any) {
            console.error("Auth error:", error);
            res.status(500).send(`Erro na autenticação: ${error.message}`);
        }
    });

    // 4. Logout
    app.post("/api/community/auth/logout", (req, res) => {
        req.session.destroy((err) => {
            if (err) return res.status(500).json({ success: false });
            res.json({ success: true });
        });
    });

    // 5. Me (Get current session)
    app.get("/api/community/auth/me", (req, res) => {
        const user = (req.session as any).user;
        if (!user) return res.status(401).json({ loggedIn: false });
        res.json({ loggedIn: true, user });
    });

    // 6. Admin Promotion
    app.post("/api/community/auth/promote-me-to-admin", async (req, res) => {
        let currentUser = (req.session as any).user;

        if (!currentUser) {
            return res.status(401).json({ message: "Você precisa estar logado para se tornar admin." });
        }

        await storage.updateUserRole(currentUser.id, "admin");
        currentUser.role = "admin";

        res.json({ success: true, message: "Você agora é o Analista SLX (Admin)!" });
    });
}

