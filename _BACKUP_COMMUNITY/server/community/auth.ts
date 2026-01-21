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
    // 1. Registro por Email/Senha
    app.post("/api/community/auth/register", async (req, res) => {
        const { email, password, name } = req.body;

        try {
            const existingUser = await storage.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ message: "Este e-mail já está em uso." });
            }

            const hashedPassword = hashPassword(password);
            const user = await storage.createUser({
                email,
                password: hashedPassword,
                name: name || "Jogador SLX",
                loginMethod: "local",
                role: "user"
            });

            // Login automático após registro
            (req.session as any).user = {
                id: user.id,
                role: user.role,
                name: user.name
            };

            res.json({ success: true, user: (req.session as any).user });
        } catch (error) {
            console.error("Register error:", error);
            res.status(500).json({ message: "Erro ao criar conta." });
        }
    });

    // 2. Login por Email/Senha
    app.post("/api/community/auth/login", async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await storage.getUserByEmail(email);
            if (!user || !user.password) {
                return res.status(401).json({ message: "E-mail ou senha incorretos." });
            }

            const isMatch = comparePasswords(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "E-mail ou senha incorretos." });
            }

            (req.session as any).user = {
                id: user.id,
                role: user.role,
                name: user.name
            };

            res.json({ success: true, user: (req.session as any).user });
        } catch (error) {
            console.error("Login error:", error);
            res.status(500).json({ message: "Erro ao realizar login." });
        }
    });

    // 3. Login Real do Google (OAuth 2.0)
    app.get("/api/community/auth/google", (req, res) => {
        const client_id = process.env.GOOGLE_CLIENT_ID;
        const redirect_uri = `${req.protocol}://${req.get("host")}/api/community/auth/google/callback`;
        const scope = "openid email profile";
        const response_type = "code";

        const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}&response_type=${response_type}&access_type=offline&prompt=consent`;

        res.redirect(googleUrl);
    });

    // Callback Real do OAuth
    app.get("/api/community/auth/google/callback", async (req, res) => {
        const { code } = req.query;
        if (!code) return res.status(400).send("Código de autorização não fornecido.");

        const client_id = process.env.GOOGLE_CLIENT_ID;
        const client_secret = process.env.GOOGLE_CLIENT_SECRET;
        const redirect_uri = `${req.protocol}://${req.get("host")}/api/community/auth/google/callback`;

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

