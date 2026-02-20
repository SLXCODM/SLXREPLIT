import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { db } from "./db";
import { sql } from "drizzle-orm";
import { insertProjectSchema, insertProductSchema, projectCategories } from "@shared/schema";
import { bootstrapDatabase } from "./db";
import { supabase } from "./lib/supabase";
import { setupAuth } from "./community/auth";
import { setupStripeRoutes } from "./community/stripe";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./community/appRouter";
import { createContext } from "./community/trpc";

import { upload } from "./community/multer-config";

export async function registerRoutes(app: Express): Promise<Server> {
  // Ensure database tables exist
  await bootstrapDatabase();

  // --- COMMUNITY MODULES ---

  // 1. Setup Auth (Google OAuth & Email/Password)
  setupAuth(app);

  // 2. Setup Stripe (Checkouts & Webhooks)
  setupStripeRoutes(app);

  // 3. Setup tRPC
  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  // 4. Manual Payment Confirmation (Analyst Dashboard)
  app.post("/api/community/admin/confirm-payment", async (req, res) => {
    const user = (req.session as any).user;
    if (!user || user.role !== "admin") {
      return res.status(403).json({ error: "Acesso negado. Apenas o Analista SLX pode confirmar pagamentos." });
    }

    const { paymentId } = req.body;
    try {
      await storage.confirmPayment(paymentId);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Erro ao confirmar pagamento." });
    }
  });

  // 5. Video Uploads
  app.post("/api/upload-video", upload.single("video"), async (req, res) => {
    try {
      const videoId = parseInt(req.body.videoId);
      if (!req.file || !videoId) {
        return res.status(400).json({ error: "Missing file or videoId" });
      }

      await storage.updateVideoPath(videoId, req.file.path);
      res.json({ success: true, filePath: req.file.path });
    } catch (err) {
      console.error("Upload error:", err);
      res.status(500).json({ error: "Upload failed" });
    }
  });

  // Health Check to verify server and database
  // Target this for UptimeRobot to keep the database awake
  app.get("/api/health", async (_req, res) => {
    // Ensure no caching for this endpoint to guarantee the hit reaches the server
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    try {
      // Forcefully query the exact table used by the Content page 
      // to keep the Supabase TCP connection and the pgBouncer pool warm
      const dbStatus = await db.execute(sql`SELECT 1 FROM projects LIMIT 1`);

      res.json({
        status: "ok",
        db: dbStatus.length > 0 ? "connected_and_warm" : "empty_but_connected",
        version: "1.3.4-warm-keepalive",
        appName: "SLX Keep Alive", // Included to satisfy UptimeRobot keyword monitor
        time: new Date().toISOString()
      });
    } catch (err: any) {
      console.error("Health Check DB Error:", err.message);
      res.status(200).json({
        status: "alive_no_db",
        error: err.message,
        version: "1.3.4-warm-keepalive"
      });
    }
  });

  // Rankings Routes (Supabase) - MOVED TO TOP FOR PRIORITY
  console.log("Registering ranking routes (priority)...");
  app.get("/api/rankings/:gameId", async (req, res) => {
    try {
      const { gameId } = req.params;
      const { data, error } = await supabase
        .from('game_rankings')
        .select('*')
        .eq('game_id', gameId)
        .order('score', { ascending: false })
        .limit(10);

      if (error) throw error;
      res.json(data);
    } catch (error: any) {
      console.error("RANKING GET ERROR:", error);
      res.status(500).json({ error: "Failed to fetch rankings", message: error.message });
    }
  });

  app.post("/api/rankings", async (req, res) => {
    try {
      const { game_id, username, score } = req.body;

      if (!game_id || !username || score === undefined) {
        return res.status(400).json({ error: "Missing required fields: game_id, username, score" });
      }

      console.log(`Submitting score: ${username} - ${score} for ${game_id}`);
      const { data, error } = await supabase
        .from('game_rankings')
        .insert([{ game_id, username, score }])
        .select();

      if (error) throw error;
      res.status(201).json(data ? data[0] : null);
    } catch (error: any) {
      console.error("RANKING POST ERROR:", error);
      res.status(500).json({ error: "Failed to save ranking", message: error.message });
    }
  });

  // Projects Routes

  // GET /api/projects - Get all projects
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getProjects();
      res.json(projects);
    } catch (error: any) {
      console.error("ROUTE ERROR /api/projects:", error);
      res.status(500).json({
        error: "Failed to fetch projects",
        message: error.message,
        details: process.env.NODE_ENV === "development" ? error.stack : undefined
      });
    }
  });

  // GET /api/projects/:category - Get projects by category
  app.get("/api/projects/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const projects = await storage.getProjectsByCategory(category);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects by category" });
    }
  });

  // GET /api/projects/:id - Get single project
  app.get("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const project = await storage.getProject(id);

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch project" });
    }
  });

  // POST /api/projects - Create new project
  app.post("/api/projects", async (req, res) => {
    try {
      const validatedData = insertProjectSchema.parse(req.body);
      const project = await storage.createProject(validatedData);
      res.status(201).json(project);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Invalid project data" });
      }
    }
  });

  // PATCH /api/projects/:id - Update project
  app.patch("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;

      // Validate partial update with schema
      const partialSchema = insertProjectSchema.partial();
      const validatedUpdates = partialSchema.parse(req.body);

      const project = await storage.updateProject(id, validatedUpdates);

      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json(project);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Failed to update project" });
      }
    }
  });

  // DELETE /api/projects/:id - Delete project
  app.delete("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProject(id);

      if (!deleted) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  // About Content Routes

  // GET /api/about - Get about content
  app.get("/api/about", async (_req, res) => {
    try {
      const content = await storage.getAboutContent();

      if (!content) {
        return res.status(503).json({
          error: "Content temporarily unavailable",
          message: "About content is being updated. Please try again later."
        });
      }

      res.json(content);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch about content" });
    }
  });

  // Note: GET /api/contacts endpoint removed - requires authentication system
  // Will be re-added when auth layer is implemented

  // Weapon Likes Routes

  // GET /api/weapon-likes - Get all weapon likes
  app.get("/api/weapon-likes", async (_req, res) => {
    try {
      const likes = await storage.getAllWeaponLikes();
      res.json(likes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapon likes" });
    }
  });

  // GET /api/weapon-likes/:weaponId - Get likes for specific weapon
  app.get("/api/weapon-likes/:weaponId", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const likes = await storage.getWeaponLikes(weaponId);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapon likes" });
    }
  });

  // POST /api/weapon-likes/:weaponId/like - Increment likes
  app.post("/api/weapon-likes/:weaponId/like", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const likes = await storage.incrementWeaponLikes(weaponId);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to update weapon likes" });
    }
  });

  // POST /api/weapon-likes/:weaponId/unlike - Decrement likes
  app.post("/api/weapon-likes/:weaponId/unlike", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const likes = await storage.decrementWeaponLikes(weaponId);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to update weapon likes" });
    }
  });

  // Products Routes

  // GET /api/products - Get all products
  app.get("/api/products", async (_req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  // GET /api/products/:id - Get single product
  app.get("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await storage.getProduct(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // POST /api/products - Create new product
  app.post("/api/products", async (req, res) => {
    try {
      const validatedData = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validatedData);
      res.status(201).json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Invalid product data" });
      }
    }
  });

  // PATCH /api/products/:id - Update product
  app.patch("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const partialSchema = insertProductSchema.partial();
      const validatedUpdates = partialSchema.parse(req.body);

      const product = await storage.updateProduct(id, validatedUpdates);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: "Failed to update product" });
      }
    }
  });

  // DELETE /api/products/:id - Delete product
  app.delete("/api/products/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await storage.deleteProduct(id);

      if (!deleted) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete product" });
    }
  });


  // --- ANALYTICS MODULE ---

  // 1. Record a visit
  app.post("/api/analytics/track", async (req, res) => {
    try {
      const { path, language } = req.body;
      const userAgent = req.get("User-Agent");
      const referer = req.get("Referer");
      const ip = req.ip || req.headers['x-forwarded-for'];

      // Simple hash for IP anonymization
      const ipHash = ip ? Buffer.from(ip.toString()).toString("base64").substring(0, 10) : null;

      await storage.logVisit({
        path: path || "/",
        language: language || "en",
        userAgent: userAgent || null,
        referer: referer || null,
        ipHash
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Analytics track error:", error);
      res.status(500).json({ error: "Failed to log visit" });
    }
  });

  // 2. Get stats (protected via token)
  app.get("/api/analytics/stats", async (req, res) => {
    const token = req.query.token;
    const analyticsSecret = (process.env.ANALYTICS_SECRET || "1+1 Slxcodmcrypto 1+1").trim();

    if (token !== analyticsSecret) {
      console.warn(`[Analytics] Unauthorized access attempt with token: ${token}`);
      return res.status(403).json({ error: "Unauthorized" });
    }

    try {
      const days = parseInt(req.query.days as string) || 7;
      const stats = await storage.getAnalyticsStats(days);
      res.json(stats);
    } catch (error) {
      console.error("Analytics stats error:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
