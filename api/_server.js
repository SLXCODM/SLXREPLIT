var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  aboutContent: () => aboutContent,
  analyses: () => analyses,
  analysisComments: () => analysisComments,
  analyticsVisits: () => analyticsVisits,
  galleryItems: () => galleryItems,
  insertAboutContentSchema: () => insertAboutContentSchema,
  insertAnalysisSchema: () => insertAnalysisSchema,
  insertAnalyticsVisitSchema: () => insertAnalyticsVisitSchema,
  insertPaymentSchema: () => insertPaymentSchema,
  insertProductSchema: () => insertProductSchema,
  insertProjectSchema: () => insertProjectSchema,
  insertUserSchema: () => insertUserSchema,
  insertVideoSchema: () => insertVideoSchema,
  insertWeaponIndividualLikeSchema: () => insertWeaponIndividualLikeSchema,
  insertWeaponLikeSchema: () => insertWeaponLikeSchema,
  payments: () => payments,
  products: () => products,
  projectCategories: () => projectCategories,
  projects: () => projects,
  users: () => users,
  videos: () => videos,
  weaponIndividualLikes: () => weaponIndividualLikes,
  weaponLikes: () => weaponLikes
});
import { pgTable, text, varchar, timestamp, boolean, serial, integer, uniqueIndex } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";
var projectCategories, projects, aboutContent, insertProjectSchema, insertAboutContentSchema, weaponLikes, weaponIndividualLikes, insertWeaponLikeSchema, insertWeaponIndividualLikeSchema, users, videos, payments, analyses, analysisComments, galleryItems, insertUserSchema, insertVideoSchema, insertPaymentSchema, insertAnalysisSchema, products, insertProductSchema, analyticsVisits, insertAnalyticsVisitSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    projectCategories = ["gaming", "agriculture", "photography", "development", "writer"];
    projects = pgTable("projects", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      title: text("title").notNull(),
      category: text("category").notNull(),
      // must be one of projectCategories
      description: text("description").notNull(),
      imageUrl: text("image_url"),
      externalUrl: text("external_url"),
      featured: boolean("featured").default(false),
      order: text("order").default("0")
      // numeric string for sorting
    });
    aboutContent = pgTable("about_content", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      content: text("content").notNull(),
      lastUpdated: timestamp("last_updated").defaultNow().notNull()
    });
    insertProjectSchema = createInsertSchema(projects).omit({
      id: true
    }).extend({
      category: z.enum(projectCategories, {
        errorMap: () => ({ message: "Categoria deve ser: gaming, agriculture, photography ou development" })
      }),
      order: z.string().regex(/^\d+$/, "Order deve ser um n\xFAmero em formato string").optional()
    });
    insertAboutContentSchema = createInsertSchema(aboutContent).omit({
      id: true,
      lastUpdated: true
    });
    weaponLikes = pgTable("weapon_likes", {
      weaponId: varchar("weapon_id").primaryKey(),
      likes: text("likes").default("0").notNull()
    });
    weaponIndividualLikes = pgTable("weapon_individual_likes", {
      id: serial("id").primaryKey(),
      weaponId: varchar("weapon_id").notNull(),
      fingerprint: text("fingerprint").notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull()
    }, (table) => ({
      weaponFingerprintIdx: uniqueIndex("weapon_fingerprint_idx").on(table.weaponId, table.fingerprint)
    }));
    insertWeaponLikeSchema = createInsertSchema(weaponLikes);
    insertWeaponIndividualLikeSchema = createInsertSchema(weaponIndividualLikes).omit({ id: true, createdAt: true });
    users = pgTable("users", {
      id: serial("id").primaryKey(),
      email: text("email").unique().notNull(),
      password: text("password"),
      name: text("name"),
      openId: text("open_id"),
      loginMethod: text("login_method"),
      // "google", "local"
      role: text("role").default("user").notNull(),
      // "user", "analyst", "admin"
      lastSignedIn: timestamp("last_signed_in").defaultNow(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    videos = pgTable("videos", {
      id: serial("id").primaryKey(),
      paymentId: integer("payment_id"),
      clientId: integer("client_id").notNull(),
      title: text("title").notNull(),
      description: text("description").notNull(),
      s3Key: text("s3_key").notNull(),
      s3Url: text("s3_url").notNull(),
      fileSize: integer("file_size"),
      duration: integer("duration"),
      status: text("status").default("awaiting_payment").notNull(),
      // "awaiting_payment", "uploaded", "processing", "completed", "failed"
      allowPublic: boolean("allow_public").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    payments = pgTable("payments", {
      id: serial("id").primaryKey(),
      userId: integer("user_id").notNull(),
      amount: text("amount").notNull(),
      currency: text("currency").default("BRL").notNull(),
      status: text("status").notNull(),
      // "pending", "succeeded", "failed"
      stripePaymentIntentId: text("stripe_payment_intent_id"),
      description: text("description"),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    analyses = pgTable("analyses", {
      id: serial("id").primaryKey(),
      videoId: integer("video_id").notNull().unique(),
      analystId: integer("analyst_id").notNull(),
      overallRating: integer("overall_rating").notNull(),
      summary: text("summary").notNull(),
      feedbackVideoUrl: text("feedback_video_url"),
      recommendedVideoUrl: text("recommended_video_url"),
      teaserText: text("teaser_text"),
      isPublic: boolean("is_public").default(false).notNull(),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    analysisComments = pgTable("analysis_comments", {
      id: serial("id").primaryKey(),
      analysisId: integer("analysis_id").notNull(),
      timestamp: integer("timestamp").notNull(),
      // timestamp in seconds from start of video
      comment: text("comment").notNull(),
      type: text("type").default("general").notNull()
      // "aim", "positioning", "decision", "general"
    });
    galleryItems = pgTable("gallery_items", {
      id: serial("id").primaryKey(),
      analysisId: integer("analysis_id").notNull().unique(),
      featured: boolean("featured").default(false).notNull(),
      category: text("category"),
      // "clutch", "movement", "tactical"
      order: integer("order").default(0).notNull()
    });
    insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true, updatedAt: true, lastSignedIn: true });
    insertVideoSchema = createInsertSchema(videos).omit({ id: true, createdAt: true, updatedAt: true });
    insertPaymentSchema = createInsertSchema(payments).omit({ id: true, createdAt: true, updatedAt: true });
    insertAnalysisSchema = createInsertSchema(analyses).omit({ id: true, createdAt: true, updatedAt: true });
    products = pgTable("products", {
      id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
      name: text("name").notNull(),
      description: text("description").notNull(),
      price: text("price").notNull(),
      // em centavos para evitar decimais
      imageUrl: text("image_url"),
      category: text("category").notNull(),
      // digital, preset, course, etc
      featured: boolean("featured").default(false),
      active: boolean("active").default(true),
      stripeProductId: text("stripe_product_id"),
      stripePriceId: text("stripe_price_id"),
      order: text("order").default("0"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertProductSchema = createInsertSchema(products).omit({
      id: true,
      createdAt: true,
      stripeProductId: true,
      stripePriceId: true
    }).extend({
      name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(200),
      description: z.string().min(10, "Descri\xE7\xE3o deve ter pelo menos 10 caracteres").max(2e3),
      price: z.string().regex(/^\d+$/, "Pre\xE7o deve ser um n\xFAmero em centavos"),
      category: z.string().min(3),
      featured: z.boolean().optional(),
      active: z.boolean().optional(),
      order: z.string().optional()
    });
    analyticsVisits = pgTable("analytics_visits", {
      id: serial("id").primaryKey(),
      path: text("path").notNull(),
      language: text("language").notNull(),
      // "pt" or "en"
      userAgent: text("user_agent"),
      referer: text("referer"),
      ipHash: text("ip_hash"),
      // anonymized IP for basic unique counting
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertAnalyticsVisitSchema = createInsertSchema(analyticsVisits).omit({
      id: true,
      createdAt: true
    });
  }
});

// server/db.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { sql as sql2 } from "drizzle-orm";
async function bootstrapDatabase() {
  const isVercel3 = process.env.VERCEL === "1";
  const isProduction = process.env.NODE_ENV === "production";
  const forceBootstrap = process.env.DB_BOOTSTRAP === "true";
  if ((isVercel3 || isProduction) && !forceBootstrap) {
    console.log("[Bootstrap] Skipping database check in production to optimize cold start.");
    return;
  }
  console.log("[Bootstrap] Verifying database tables...");
  if (!process.env.DATABASE_URL) {
    console.warn("Bootstrap skipped: DATABASE_URL is not set.");
    return;
  }
  if (!db) {
    console.error("Bootstrap failed: Database object is null.");
    return;
  }
  try {
    console.log("Starting database bootstrap...");
    console.log("Checking projects table...");
    await db.execute(sql2`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        category TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT,
        external_url TEXT,
        featured BOOLEAN DEFAULT false,
        "order" TEXT DEFAULT '0'
      )
    `);
    console.log("Checking about_content table...");
    await db.execute(sql2`
      CREATE TABLE IF NOT EXISTS about_content (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL,
        last_updated TIMESTAMP DEFAULT now() NOT NULL
      )
    `);
    console.log("Checking weapon_likes table...");
    await db.execute(sql2`
      CREATE TABLE IF NOT EXISTS weapon_likes (
        weapon_id TEXT PRIMARY KEY,
        likes TEXT DEFAULT '0' NOT NULL
      )
    `);
    console.log("Checking products table...");
    await db.execute(sql2`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price TEXT NOT NULL,
        image_url TEXT,
        category TEXT NOT NULL,
        featured BOOLEAN DEFAULT false,
        active BOOLEAN DEFAULT true,
        stripe_product_id TEXT,
        stripe_price_id TEXT,
        "order" TEXT DEFAULT '0',
        created_at TIMESTAMP DEFAULT now() NOT NULL
      )
    `);
    console.log("Checking analytics_visits table...");
    await db.execute(sql2`
      CREATE TABLE IF NOT EXISTS analytics_visits (
        id SERIAL PRIMARY KEY,
        path TEXT NOT NULL,
        language TEXT NOT NULL,
        user_agent TEXT,
        referer TEXT,
        ip_hash TEXT,
        created_at TIMESTAMP DEFAULT now() NOT NULL
      )
    `);
    console.log("All tables checked/created.");
    const result = await db.execute(sql2`SELECT count(*) FROM projects`);
    const count = result[0]?.count;
    console.log("CRITICAL: Ensuring Handcam link is correct...");
    try {
      await db.execute(sql2`
        DELETE FROM projects 
        WHERE (title ILIKE '%Handcam%' OR description ILIKE '%handcam%')
          AND id != 'proj-gaming-3'
      `);
      await db.execute(sql2`
        UPDATE projects 
        SET external_url = 'https://www.tiktok.com/@slxcodm_/collection/Handcam-7505932826018990854?is_from_webapp=1&sender_device=pc',
            title = 'Handcam',
            description = 'Gameplay revelada com handcam',
            image_url = '/attached_assets/generated_images/smartphone_icon_handcam_button_background.png'
        WHERE id = 'proj-gaming-3' OR title ILIKE '%Handcam%'
      `);
      console.log("CRITICAL: Handcam link sync finished.");
    } catch (err) {
      console.error("Failed to force update Handcam:", err);
    }
    if (count === "0" || count === 0) {
      console.log("Seeding initial projects because count is:", count);
      const initialProjects = [
        {
          id: "proj-gaming-0",
          title: "Melhores Classes",
          description: "Classes de armas profissionais do SLX",
          category: "gaming",
          image_url: "/attached_assets/generated_images/weapon_icon_gaming_classes_button.png",
          external_url: "/classes",
          featured: true,
          order: "0"
        },
        {
          id: "proj-gaming-1",
          title: "Meus Tutoriais Exclusivos",
          description: "Conte\xFAdo exclusivo para melhorar sua gameplay",
          category: "gaming",
          image_url: "/attached_assets/generated_images/notebook_icon_tutorials_button_background.png",
          external_url: JSON.stringify({
            type: "links",
            links: [
              { label: "TikTok", url: "https://www.tiktok.com/@slxcodm_/collection/Dicas%20e%20tutoriais-7505787344423766790?is_from_webapp=1&sender_device=pc" },
              { label: "YouTube", url: "https://youtube.com/playlist?list=PLNjPit_9myAFBhDzh635QGPgzukbXRYLg&si=Y6MVgx8GJG0Fq8" }
            ]
          }),
          featured: true,
          order: "1"
        },
        {
          id: "proj-gaming-2",
          title: "Minhas Configura\xE7\xF5es",
          description: "HUD, Sensibilidade e Configura\xE7\xF5es Gerais",
          category: "gaming",
          image_url: "/attached_assets/generated_images/gear_icon_settings_button_background.png",
          external_url: JSON.stringify({
            type: "links",
            links: [
              { label: "TikTok", url: "https://www.tiktok.com/@slxcodm_/collection/Configs,%20loadouts,%20sensi%20etc-7510645794769668869?is_from_webapp=1&sender_device=pc" },
              { label: "YouTube", url: "https://youtube.com/playlist?list=PLNjPit_9myAFwYgp2zNBJs6EzzZ-qs839&si=2mEzeWonPFB5Leen" }
            ]
          }),
          featured: true,
          order: "2"
        },
        {
          id: "proj-gaming-3",
          title: "Handcam",
          description: "Gameplay revelada com handcam",
          category: "gaming",
          image_url: "/attached_assets/generated_images/smartphone_icon_handcam_button_background.png",
          external_url: "https://www.tiktok.com/@slxcodm_/collection/Handcam-7505932826018990854?is_from_webapp=1&sender_device=pc",
          featured: true,
          order: "3"
        },
        {
          id: "proj-agriculture-0",
          title: "Acompanhe meu trabalho rural",
          description: "Vem ver a experiencia de morar no campo, trago videos sobre o meu trabalho aqui",
          category: "agriculture",
          image_url: "/attached_assets/photo-rural-harvest.jpg",
          external_url: "https://www.instagram.com/slx.wav",
          featured: true,
          order: "0"
        }
      ];
      for (const p of initialProjects) {
        if (p.id === "proj-gaming-3") continue;
        await db.execute(sql2`
          INSERT INTO projects (id, title, category, description, image_url, external_url, featured, "order")
          VALUES (${p.id}, ${p.title}, ${p.category}, ${p.description}, ${p.image_url}, ${p.external_url}, ${p.featured}, ${p.order})
          ON CONFLICT (id) DO UPDATE SET 
            external_url = EXCLUDED.external_url,
            title = EXCLUDED.title,
            description = EXCLUDED.description,
            image_url = EXCLUDED.image_url
        `);
      }
      console.log("Seeding complete.");
    } else {
      await db.execute(sql2`
        INSERT INTO projects (id, title, category, description, image_url, external_url, featured, "order")
        VALUES ('proj-gaming-3', 'Handcam', 'gaming', 'Gameplay revelada com handcam', '/attached_assets/generated_images/smartphone_icon_handcam_button_background.png', 'https://www.tiktok.com/@slxcodm_/collection/Handcam-7505932826018990854?is_from_webapp=1&sender_device=pc', true, '3')
        ON CONFLICT (id) DO UPDATE SET external_url = EXCLUDED.external_url
      `);
    }
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
  }
}
var _db, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
      console.warn("DATABASE_URL environment variable is not set. Database functionality will be disabled.");
    }
    _db = null;
    db = new Proxy({}, {
      get(_target, prop) {
        if (!_db) {
          const url = process.env.DATABASE_URL;
          if (!url) {
            console.error("DATABASE_URL is missing!");
            throw new Error("Missing DATABASE_URL");
          }
          try {
            const maskedUrl = url.replace(/:([^:@]+)@/, ":****@");
            console.log(`Initializing database connection with: ${maskedUrl}`);
            const client = postgres(url, {
              ssl: { rejectUnauthorized: false },
              max: 10,
              // Back to a reasonable number to prevent queueing
              idle_timeout: 5,
              // VERY FAST drop. Closes connections after 5s idle to prevent silent TCP drops by firewalls
              connect_timeout: 5,
              // Fail FAST if Supabase is unreachable instead of hanging for 10-30s
              max_lifetime: 60 * 5,
              // Force kill connections every 5 minutes to keep pool perfectly fresh
              prepare: false
              // Required for Supabase transaction poolers
            });
            _db = drizzle(client, { schema: schema_exports });
            console.log("Database client initialized successfully.");
          } catch (err) {
            let helpMessage = err.message;
            if (err.message.includes("ENOTFOUND")) {
              helpMessage = `DICA SUPABASE: O banco ${url.split("@")[1].split(":")[0]} n\xE3o foi encontrado. Verifique se o projeto n\xE3o est\xE1 PAUSADO no Supabase ou se a URL est\xE1 correta.`;
            }
            console.error("CRITICAL: Database initialization failed:", helpMessage);
            throw new Error(helpMessage);
          }
        }
        return _db[prop];
      }
    });
  }
});

// server/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";
var supabaseUrl, supabaseAnonKey, supabaseClient, supabase;
var init_supabase = __esm({
  "server/lib/supabase.ts"() {
    "use strict";
    supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (supabaseUrl && supabaseAnonKey) {
      supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    } else {
      console.warn("Backend Supabase credentials missing. Ranking features will be disabled.");
      supabaseClient = null;
    }
    supabase = supabaseClient;
  }
});

// server/community/mail.ts
import { Resend } from "resend";
async function sendOrderNotificationToAdmin(orderId, clientName) {
  console.log(`[MAIL] Notificando Admin sobre novo pedido: #${orderId} de ${clientName}`);
  if (!resend) {
    console.warn("[MAIL] Resend API Key ausente. Email simulado no log.");
    return;
  }
  try {
    await resend.emails.send({
      from: "SLX Community <notifications@slxcommunity.xyz>",
      to: ADMIN_EMAIL,
      subject: `\u{1F525} Novo Pedido de An\xE1lise: #${orderId}`,
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
async function sendPaymentConfirmedToClient(clientEmail, clientName) {
  console.log(`[MAIL] Notificando Cliente sobre confirma\xE7\xE3o de pagamento: ${clientEmail}`);
  if (!resend) return;
  try {
    await resend.emails.send({
      from: "SLX Community <notifications@slxcommunity.xyz>",
      to: clientEmail,
      subject: "\u2705 Pagamento Confirmado - Academia SLX",
      html: `
                <div style="font-family: sans-serif; background: #09090b; color: #fff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #10b981; font-size: 24px;">Ol\xE1, ${clientName}!</h1>
                    <p>Seu pagamento foi confirmado com sucesso. Sua gameplay j\xE1 est\xE1 na fila para o SLX analisar.</p>
                    <p>Fique de olho na sua <strong>\xC1rea do Aluno</strong> para o feedback.</p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
                    <a href="https://vitoria-psicanalise.replit.app/community/dashboard" style="background: #10b981; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ir para \xC1rea do Aluno</a>
                </div>
            `
    });
  } catch (err) {
    console.error("[MAIL] Erro ao enviar email para cliente:", err);
  }
}
async function sendAnalysisFinishedToClient(clientEmail, clientName, videoTitle) {
  console.log(`[MAIL] Notificando Cliente sobre conclus\xE3o de an\xE1lise: ${clientEmail}`);
  if (!resend) return;
  try {
    await resend.emails.send({
      from: "SLX Community <notifications@slxcommunity.xyz>",
      to: clientEmail,
      subject: "\u{1F3AE} Sua An\xE1lise SLX est\xE1 Pronta!",
      html: `
                <div style="font-family: sans-serif; background: #09090b; color: #fff; padding: 40px; border-radius: 20px;">
                    <h1 style="color: #10b981; font-size: 24px;">${clientName}, sua an\xE1lise chegou!</h1>
                    <p>O SLX terminou de analisar sua gameplay: <strong>${videoTitle}</strong>.</p>
                    <p>Acesse agora sua \xC1rea do Aluno para conferir as notas, resumo e os treinos recomendados.</p>
                    <hr style="border: 0; border-top: 1px solid #27272a; margin: 20px 0;" />
                    <a href="https://vitoria-psicanalise.replit.app/community/dashboard" style="background: #10b981; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ver Meu Feedback</a>
                </div>
            `
    });
  } catch (err) {
    console.error("[MAIL] Erro ao enviar email de conclus\xE3o para cliente:", err);
  }
}
var resend, ADMIN_EMAIL;
var init_mail = __esm({
  "server/community/mail.ts"() {
    "use strict";
    resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
    ADMIN_EMAIL = process.env.ADMIN_EMAIL || "analista.slx@gmail.com";
  }
});

// server/storage.ts
var storage_exports = {};
__export(storage_exports, {
  DatabaseStorage: () => DatabaseStorage,
  MemStorage: () => MemStorage,
  storage: () => storage
});
import { randomUUID } from "crypto";
import { eq, desc, ne, and, sql as sql3 } from "drizzle-orm";
import path from "path";
var DatabaseStorage, MemStorage, storage;
var init_storage = __esm({
  "server/storage.ts"() {
    "use strict";
    init_schema();
    init_db();
    init_supabase();
    init_mail();
    DatabaseStorage = class {
      async getProjects() {
        try {
          if (supabase) {
            const { data, error } = await supabase.from("projects").select("*").order("order", { ascending: true });
            if (!error && data && data.length > 0) {
              return data;
            }
            if (error) console.error("Supabase HTTP REST Fallback error:", error.message);
          }
        } catch (e) {
          console.error("Failed to read from Supabase REST API, falling back to Drizzle TCP...", e.message);
        }
        return await db.select().from(projects).orderBy(projects.order);
      }
      async getProject(id) {
        const [project] = await db.select().from(projects).where(eq(projects.id, id));
        return project;
      }
      async getProjectsByCategory(category) {
        try {
          if (supabase) {
            const { data, error } = await supabase.from("projects").select("*").eq("category", category).order("order", { ascending: true });
            if (!error && data && data.length > 0) {
              return data;
            }
            if (error) console.error("Supabase HTTP REST Fallback error:", error.message);
          }
        } catch (e) {
          console.error("Failed to read from Supabase REST API, falling back to Drizzle TCP...", e.message);
        }
        return await db.select().from(projects).where(eq(projects.category, category)).orderBy(projects.order);
      }
      async createProject(insertProject) {
        const [project] = await db.insert(projects).values(insertProject).returning();
        return project;
      }
      async updateProject(id, updates) {
        const [project] = await db.update(projects).set(updates).where(eq(projects.id, id)).returning();
        return project;
      }
      async deleteProject(id) {
        const [deleted] = await db.delete(projects).where(eq(projects.id, id)).returning();
        return !!deleted;
      }
      async logVisit(visit) {
        await db.insert(analyticsVisits).values(visit);
      }
      async getAnalyticsStats(days) {
        const period = sql3`now() - interval '${sql3.raw(days.toString())} days'`;
        const totalVisits = await db.execute(sql3`
      SELECT count(*)::int as count 
      FROM analytics_visits 
      WHERE created_at >= ${period}
    `);
        const pathStats = await db.execute(sql3`
      SELECT path, count(*)::int as count 
      FROM analytics_visits 
      WHERE created_at >= ${period}
      GROUP BY path 
      ORDER BY count DESC
    `);
        const dailyStats = await db.execute(sql3`
      SELECT 
        date_trunc('day', created_at)::date as date, 
        count(*)::int as count 
      FROM analytics_visits 
      WHERE created_at >= ${period}
      GROUP BY date 
      ORDER BY date ASC
    `);
        return {
          total: totalVisits[0]?.count || 0,
          paths: pathStats,
          daily: dailyStats
        };
      }
      async getUser(id) {
        const [user] = await db.select().from(users).where(eq(users.id, id));
        return user;
      }
      async getUserByOpenId(openId) {
        const [user] = await db.select().from(users).where(eq(users.openId, openId));
        return user;
      }
      async getUserByEmail(email) {
        const [user] = await db.select().from(users).where(eq(users.email, email));
        return user;
      }
      async createUser(insertUser) {
        const [user] = await db.insert(users).values(insertUser).returning();
        return user;
      }
      async updateUserRole(userId, role) {
        const [user] = await db.update(users).set({ role }).where(eq(users.id, userId)).returning();
        return user;
      }
      async getAboutContent() {
        const [content] = await db.select().from(aboutContent);
        return content;
      }
      async updateAboutContent(content) {
        const existing = await this.getAboutContent();
        if (existing) {
          const [updated] = await db.update(aboutContent).set(content).where(eq(aboutContent.id, existing.id)).returning();
          return updated;
        }
        const [newContent] = await db.insert(aboutContent).values(content).returning();
        return newContent;
      }
      // Weapon Likes
      async getAllWeaponLikes() {
        const result = await db.select({
          weaponId: weaponIndividualLikes.weaponId,
          likes: sql3`count(*)::text`
        }).from(weaponIndividualLikes).groupBy(weaponIndividualLikes.weaponId);
        return result;
      }
      async getWeaponLikes(weaponId) {
        const [result] = await db.select({ count: sql3`count(*)` }).from(weaponIndividualLikes).where(eq(weaponIndividualLikes.weaponId, weaponId));
        return Number(result?.count || 0);
      }
      async incrementWeaponLikes(weaponId, fingerprint) {
        await db.insert(weaponIndividualLikes).values({ weaponId, fingerprint }).onConflictDoNothing();
        return await this.getWeaponLikes(weaponId);
      }
      async decrementWeaponLikes(weaponId, fingerprint) {
        await db.delete(weaponIndividualLikes).where(and(
          eq(weaponIndividualLikes.weaponId, weaponId),
          eq(weaponIndividualLikes.fingerprint, fingerprint)
        ));
        return await this.getWeaponLikes(weaponId);
      }
      // Products
      async getProducts() {
        return await db.select().from(products).orderBy(products.order);
      }
      async getProduct(id) {
        const [product] = await db.select().from(products).where(eq(products.id, id));
        return product;
      }
      async createProduct(product) {
        const id = randomUUID();
        const [newProduct] = await db.insert(products).values({
          ...product,
          id,
          createdAt: /* @__PURE__ */ new Date(),
          imageUrl: product.imageUrl || null
        }).returning();
        return newProduct;
      }
      async updateProduct(id, updates) {
        const [product] = await db.update(products).set(updates).where(eq(products.id, id)).returning();
        return product;
      }
      async deleteProduct(id) {
        const [deleted] = await db.delete(products).where(eq(products.id, id)).returning();
        return !!deleted;
      }
      async createUploadSession(userId, title, description, price, videoUrl, allowPublic = false) {
        const [payment] = await db.insert(payments).values({
          userId,
          amount: price.replace(/[^\d.]/g, ""),
          stripePaymentIntentId: `pend_${Date.now()}_${Math.random().toString(36).substring(7)}`,
          status: "pending",
          description: `Pedido de an\xE1lise: ${title}`
        }).returning();
        const isExternal = !!videoUrl;
        const [video] = await db.insert(videos).values({
          paymentId: payment.id,
          clientId: userId,
          title,
          description,
          s3Key: isExternal ? "external_url" : "pending_upload",
          s3Url: isExternal ? videoUrl : "pending_upload",
          status: "awaiting_payment",
          allowPublic
        }).returning();
        return { paymentId: payment.id, videoId: video.id };
      }
      async getPendingPayments() {
        try {
          const results = await db.select({
            payment: payments,
            video: videos
          }).from(payments).innerJoin(videos, eq(videos.paymentId, payments.id)).where(ne(payments.status, "succeeded"));
          return results.map((r) => ({ ...r.payment, video: r.video }));
        } catch (error) {
          console.error("Error fetching pending payments:", error.message);
          throw new Error(`Database Error: ${error.message}. Ensure 'payments' and 'videos' tables exist.`);
        }
      }
      async confirmPayment(paymentId) {
        await db.update(payments).set({ status: "succeeded", updatedAt: /* @__PURE__ */ new Date() }).where(eq(payments.id, paymentId));
        await db.update(videos).set({ status: "uploaded", updatedAt: /* @__PURE__ */ new Date() }).where(eq(videos.paymentId, paymentId));
        try {
          const [payment] = await db.select().from(payments).where(eq(payments.id, paymentId));
          if (payment) {
            const [user] = await db.select().from(users).where(eq(users.id, payment.userId));
            if (user && user.email) {
              await sendPaymentConfirmedToClient(user.email, user.name || "Guerreiro");
              await sendOrderNotificationToAdmin(paymentId, user.name || user.email);
            }
          }
        } catch (err) {
          console.error("Erro ao enviar notifica\xE7\xF5es:", err);
        }
      }
      async updateVideoPath(videoId, filePath) {
        await db.update(videos).set({
          s3Key: filePath,
          s3Url: `/uploads/${path.basename(filePath)}`,
          status: "uploaded"
        }).where(eq(videos.id, videoId));
      }
      async getPendingVideos() {
        return await db.select().from(videos).where(eq(videos.status, "uploaded"));
      }
      async getUserVideos(userId) {
        return await db.select().from(videos).where(eq(videos.clientId, userId)).orderBy(desc(videos.createdAt));
      }
      async getVideo(videoId) {
        const [video] = await db.select().from(videos).where(eq(videos.id, videoId));
        return video;
      }
      async submitAnalysis(insertAnalysis) {
        const [analysis] = await db.insert(analyses).values(insertAnalysis).onConflictDoUpdate({
          target: analyses.videoId,
          set: {
            ...insertAnalysis,
            updatedAt: /* @__PURE__ */ new Date()
          }
        }).returning();
        await db.update(videos).set({ status: "completed" }).where(eq(videos.id, analysis.videoId));
        await db.update(payments).set({ status: "succeeded" }).where(eq(payments.id, db.select({ paymentId: videos.paymentId }).from(videos).where(eq(videos.id, analysis.videoId))));
        try {
          const [video] = await db.select().from(videos).where(eq(videos.id, analysis.videoId));
          if (video) {
            const [user] = await db.select().from(users).where(eq(users.id, video.clientId));
            if (user && user.email) {
              await sendAnalysisFinishedToClient(user.email, user.name || "Guerreiro", video.title);
            }
          }
        } catch (err) {
          console.error("Erro ao enviar notifica\xE7\xE3o de an\xE1lise:", err);
        }
        return analysis;
      }
      async getAnalysisByVideoId(videoId) {
        const [analysis] = await db.select().from(analyses).where(eq(analyses.videoId, videoId));
        return analysis;
      }
      async getPublicAnalyses() {
        const results = await db.select({
          analysis: analyses,
          video: videos
        }).from(analyses).innerJoin(videos, eq(analyses.videoId, videos.id)).where(eq(analyses.isPublic, true));
        return results.map((r) => ({ ...r.analysis, video: r.video }));
      }
      async createManualAnalysis(data) {
        try {
          const [video] = await db.insert(videos).values({
            clientId: data.analystId,
            paymentId: null,
            title: data.title,
            description: data.description,
            s3Key: "manual_post",
            s3Url: data.videoUrl,
            status: "completed",
            allowPublic: true
          }).returning();
          const [analysis] = await db.insert(analyses).values({
            videoId: video.id,
            analystId: data.analystId,
            overallRating: data.rating,
            summary: data.summary,
            feedbackVideoUrl: data.feedbackVideoUrl,
            teaserText: data.teaserText,
            isPublic: true
          }).returning();
          return analysis;
        } catch (error) {
          console.error("Error creating manual analysis:", error.message);
          throw new Error(`Failed to save post: ${error.message}. Check if 'users', 'videos' and 'analyses' tables are ready.`);
        }
      }
      async deleteGalleryItem(id) {
        const [analysis] = await db.select().from(analyses).where(eq(analyses.id, id));
        if (!analysis) return false;
        await db.update(analyses).set({ isPublic: false }).where(eq(analyses.id, id));
        return true;
      }
    };
    MemStorage = class {
      projects;
      aboutContent;
      weaponLikesMap = /* @__PURE__ */ new Map();
      productsMap;
      videosMap;
      analysesMap;
      usersMap;
      paymentsMap;
      constructor() {
        this.projects = /* @__PURE__ */ new Map();
        this.productsMap = /* @__PURE__ */ new Map();
        this.videosMap = /* @__PURE__ */ new Map();
        this.analysesMap = /* @__PURE__ */ new Map();
        this.usersMap = /* @__PURE__ */ new Map();
        this.paymentsMap = /* @__PURE__ */ new Map();
        this.initializeMockData();
      }
      initializeMockData() {
        const projectsList = [
          // GAMING PROJECTS
          {
            id: "proj-gaming-0",
            title: "Melhores Classes",
            description: "Classes de armas profissionais do SLX",
            imageUrl: "/attached_assets/generated_images/weapon_icon_gaming_classes_button.png",
            externalUrl: "/classes",
            featured: true,
            category: "gaming",
            order: "0"
          },
          {
            id: "proj-gaming-1",
            title: "Meus Tutoriais Exclusivos",
            description: "Conte\xFAdo exclusivo para melhorar sua gameplay",
            imageUrl: "/attached_assets/generated_images/notebook_icon_tutorials_button_background.png",
            externalUrl: JSON.stringify({
              type: "links",
              links: [
                { label: "TikTok", url: "https://www.tiktok.com/@slxcodm_/collection/Dicas%20e%20tutoriais-7505787344423766790?is_from_webapp=1&sender_device=pc" },
                { label: "YouTube", url: "https://youtube.com/playlist?list=PLNjPit_9myAFBhDzh635QGPgzukbXRYLg&si=Y6MVgx8GJG0Fq8" }
              ]
            }),
            featured: true,
            category: "gaming",
            order: "1"
          },
          {
            id: "proj-gaming-2",
            title: "Minhas Configura\xE7\xF5es",
            description: "HUD, Sensibilidade e Configura\xE7\xF5es Gerais",
            imageUrl: "/attached_assets/generated_images/gear_icon_settings_button_background.png",
            externalUrl: JSON.stringify({
              type: "links",
              links: [
                { label: "TikTok", url: "https://www.tiktok.com/@slxcodm_/collection/Configs,%20loadouts,%20sensi%20etc-7510645794769668869?is_from_webapp=1&sender_device=pc" },
                { label: "YouTube", url: "https://youtube.com/playlist?list=PLNjPit_9myAFwYgp2zNBJs6EzzZ-qs839&si=2mEzeWonPFB5Leen" }
              ]
            }),
            featured: true,
            category: "gaming",
            order: "2"
          },
          {
            id: "proj-gaming-3",
            title: "Handcam",
            description: "Gameplay revelada com handcam",
            imageUrl: "/attached_assets/generated_images/smartphone_icon_handcam_button_background.png",
            externalUrl: "https://www.tiktok.com/@slxcodm_/collection/Handcam-7505932826018990854?is_from_webapp=1&sender_device=pc",
            featured: true,
            category: "gaming",
            order: "3"
          },
          // AGRICULTURE PROJECTS
          {
            id: "proj-agriculture-0",
            title: "Acompanhe meu trabalho rural",
            description: "Vem ver a experiencia de morar no campo, trago videos sobre o meu trabalho aqui",
            imageUrl: "/attached_assets/photo-rural-harvest.jpg",
            externalUrl: "https://www.instagram.com/slx.wav",
            featured: true,
            category: "agriculture",
            order: "0"
          }
        ];
        projectsList.forEach((p) => {
          this.projects.set(p.id, {
            ...p,
            imageUrl: p.imageUrl ?? null,
            externalUrl: p.externalUrl ?? null,
            featured: p.featured ?? false,
            order: p.order ?? "0"
          });
        });
        const mockVideoId = 999;
        this.videosMap.set(mockVideoId, {
          id: mockVideoId,
          paymentId: 1,
          clientId: 1,
          title: "Gameplay Exemplo",
          description: "Exemplo de gameplay",
          s3Key: "manual_post",
          s3Url: "url",
          status: "completed",
          allowPublic: true,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          fileSize: null,
          duration: null
        });
        this.analysesMap.set(mockVideoId, {
          id: 888,
          videoId: mockVideoId,
          analystId: 1,
          overallRating: 5,
          summary: "\xD3tima play",
          isPublic: true,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          feedbackVideoUrl: null,
          recommendedVideoUrl: null,
          teaserText: "Play incr\xEDvel"
        });
      }
      async getProjects() {
        return Array.from(this.projects.values()).sort(
          (a, b) => (a.order || "0").localeCompare(b.order || "0")
        );
      }
      async getProject(id) {
        return this.projects.get(id);
      }
      async getProjectsByCategory(category) {
        return Array.from(this.projects.values()).filter((p) => p.category === category).sort((a, b) => (a.order || "0").localeCompare(b.order || "0"));
      }
      async createProject(insertProject) {
        const id = randomUUID();
        const project = {
          ...insertProject,
          id,
          imageUrl: insertProject.imageUrl || null,
          externalUrl: insertProject.externalUrl || null,
          featured: insertProject.featured ?? false,
          order: insertProject.order || "0"
        };
        this.projects.set(id, project);
        return project;
      }
      async updateProject(id, updates) {
        const project = this.projects.get(id);
        if (!project) return void 0;
        const updated = { ...project, ...updates };
        this.projects.set(id, updated);
        return updated;
      }
      async deleteProject(id) {
        return this.projects.delete(id);
      }
      async getUser(id) {
        return this.usersMap.get(id);
      }
      async getUserByOpenId(openId) {
        return Array.from(this.usersMap.values()).find((u) => u.openId === openId);
      }
      async getUserByEmail(email) {
        return Array.from(this.usersMap.values()).find((u) => u.email === email);
      }
      async createUser(insertUser) {
        const id = this.usersMap.size + 1;
        const user = {
          ...insertUser,
          id,
          name: insertUser.name ?? null,
          openId: insertUser.openId ?? null,
          password: insertUser.password ?? null,
          loginMethod: insertUser.loginMethod ?? null,
          role: insertUser.role ?? "user",
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          lastSignedIn: /* @__PURE__ */ new Date()
        };
        this.usersMap.set(id, user);
        return user;
      }
      async updateUserRole(userId, role) {
        const user = this.usersMap.get(userId);
        if (user) {
          user.role = role;
          user.updatedAt = /* @__PURE__ */ new Date();
        }
        return user;
      }
      // About Content
      async getAboutContent() {
        return this.aboutContent;
      }
      async updateAboutContent(insertContent) {
        const id = this.aboutContent?.id || randomUUID();
        const content = {
          ...insertContent,
          id,
          lastUpdated: /* @__PURE__ */ new Date()
        };
        this.aboutContent = content;
        return content;
      }
      // Weapon Likes
      async getAllWeaponLikes() {
        return Array.from(this.weaponLikesMap.entries()).map(([weaponId, likes]) => ({
          weaponId,
          likes: likes.toString()
        }));
      }
      async getWeaponLikes(weaponId) {
        return Array.from(this.weaponLikesMap.values()).filter((l) => l.weaponId === weaponId).length;
      }
      async incrementWeaponLikes(weaponId, fingerprint) {
        const key = `${weaponId}:${fingerprint}`;
        if (!this.weaponLikesMap.has(key)) {
          this.weaponLikesMap.set(key, { weaponId, fingerprint });
        }
        return this.getWeaponLikes(weaponId);
      }
      async decrementWeaponLikes(weaponId, fingerprint) {
        const key = `${weaponId}:${fingerprint}`;
        this.weaponLikesMap.delete(key);
        return this.getWeaponLikes(weaponId);
      }
      // Products
      async getProducts() {
        return Array.from(this.productsMap.values()).sort(
          (a, b) => (a.order || "0").localeCompare(b.order || "0")
        );
      }
      async getProduct(id) {
        return this.productsMap.get(id);
      }
      async createProduct(insertProduct) {
        const id = randomUUID();
        const product = {
          ...insertProduct,
          id,
          createdAt: /* @__PURE__ */ new Date(),
          active: insertProduct.active ?? true,
          featured: insertProduct.featured ?? false,
          order: insertProduct.order || "0",
          stripeProductId: null,
          stripePriceId: null,
          imageUrl: insertProduct.imageUrl || null
        };
        this.productsMap.set(id, product);
        return product;
      }
      async updateProduct(id, updates) {
        const product = this.productsMap.get(id);
        if (!product) return void 0;
        const updated = { ...product, ...updates };
        this.productsMap.set(id, updated);
        return updated;
      }
      async deleteProduct(id) {
        return this.productsMap.delete(id);
      }
      async createUploadSession(userId, title, description, price, videoUrl, allowPublic = false) {
        const paymentId = Math.floor(Math.random() * 1e4);
        const videoId = Math.floor(Math.random() * 1e4);
        this.paymentsMap.set(paymentId, {
          id: paymentId,
          userId,
          amount: price,
          status: "pending",
          createdAt: /* @__PURE__ */ new Date(),
          currency: "BRL",
          stripePaymentIntentId: null,
          description: null,
          updatedAt: /* @__PURE__ */ new Date()
        });
        this.videosMap.set(videoId, {
          id: videoId,
          paymentId,
          clientId: userId,
          title,
          description,
          s3Key: videoUrl ? "external_url" : "pending_upload",
          s3Url: videoUrl || "pending_upload",
          status: "awaiting_payment",
          allowPublic,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date(),
          fileSize: null,
          duration: null
        });
        return { paymentId, videoId };
      }
      async confirmPayment(paymentId) {
        const p = this.paymentsMap.get(paymentId);
        if (p) p.status = "succeeded";
        const v = Array.from(this.videosMap.values()).find((v2) => v2.paymentId === paymentId);
        if (v) v.status = "uploaded";
      }
      async updateVideoPath(videoId, filePath) {
        const v = this.videosMap.get(videoId);
        if (v) {
          v.s3Key = filePath;
          v.s3Url = filePath;
          v.status = "uploaded";
        }
      }
      async getPendingPayments() {
        return Array.from(this.paymentsMap.values()).filter((p) => p.status === "pending").map((p) => ({ ...p, video: Array.from(this.videosMap.values()).find((v) => v.paymentId === p.id) }));
      }
      async getPendingVideos() {
        return Array.from(this.videosMap.values()).filter((v) => v.status === "uploaded");
      }
      async getUserVideos(userId) {
        return Array.from(this.videosMap.values()).filter((v) => v.clientId === userId);
      }
      async getVideo(videoId) {
        return this.videosMap.get(videoId);
      }
      async submitAnalysis(insertAnalysis) {
        const id = Math.floor(Math.random() * 1e4);
        const analysis = {
          ...insertAnalysis,
          id,
          feedbackVideoUrl: insertAnalysis.feedbackVideoUrl ?? null,
          recommendedVideoUrl: insertAnalysis.recommendedVideoUrl ?? null,
          teaserText: insertAnalysis.teaserText ?? null,
          isPublic: insertAnalysis.isPublic ?? false,
          createdAt: /* @__PURE__ */ new Date(),
          updatedAt: /* @__PURE__ */ new Date()
        };
        this.analysesMap.set(insertAnalysis.videoId, analysis);
        return analysis;
      }
      async getAnalysisByVideoId(videoId) {
        return this.analysesMap.get(videoId);
      }
      async getPublicAnalyses() {
        return Array.from(this.analysesMap.values()).filter((a) => a.isPublic).map((a) => ({ ...a, video: this.videosMap.get(a.videoId) }));
      }
      async createManualAnalysis(data) {
        const vid = Math.floor(Math.random() * 1e4);
        const aid = Math.floor(Math.random() * 1e4);
        this.videosMap.set(vid, { id: vid, title: data.title, description: data.description, s3Url: data.videoUrl, status: "completed", allowPublic: true, clientId: data.analystId, paymentId: 0, s3Key: "manual", createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), fileSize: null, duration: null });
        const analysis = { id: aid, videoId: vid, analystId: data.analystId, overallRating: data.rating, summary: data.summary, teaserText: data.teaserText, isPublic: true, createdAt: /* @__PURE__ */ new Date(), updatedAt: /* @__PURE__ */ new Date(), feedbackVideoUrl: data.feedbackVideoUrl, recommendedVideoUrl: null };
        this.analysesMap.set(vid, analysis);
        return analysis;
      }
      async deleteGalleryItem(id) {
        const a = Array.from(this.analysesMap.values()).find((x) => x.id === id);
        if (!a) return false;
        this.analysesMap.delete(a.videoId);
        this.videosMap.delete(a.videoId);
        return true;
      }
      // Analytics (Dummy for MemStorage)
      async logVisit(_visit) {
        return;
      }
      async getAnalyticsStats(_days) {
        return { total: 0, paths: [], daily: [] };
      }
    };
    storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
  }
});

// server/index-prod.ts
import fs from "node:fs";
import "dotenv/config";
import path3 from "node:path";
import express2 from "express";

// server/app.ts
import "dotenv/config";
import path2 from "node:path";
import express from "express";
import session from "express-session";
import MemoryStoreFactory from "memorystore";

// server/routes.ts
init_storage();
init_db();
init_schema();
init_db();
init_supabase();
import { createServer } from "http";
import { sql as sql4 } from "drizzle-orm";

// server/community/auth.ts
init_storage();
function setupAuth(app2) {
  app2.post("/api/community/auth/register", async (req, res) => {
    return res.status(403).json({
      message: "Registro direto desativado. Use o login pelo Google para sua seguran\xE7a."
    });
  });
  app2.post("/api/community/auth/login", async (req, res) => {
    return res.status(403).json({
      message: "Login direto desativado. Use o Google Auth."
    });
  });
  app2.get("/api/community/auth/google", (req, res) => {
    const client_id = process.env.GOOGLE_CLIENT_ID?.trim();
    console.log(`[Google Auth] Initiating redirect with Client ID length: ${client_id?.length || 0}`);
    if (!client_id) {
      console.error("[Google Auth] CRITICAL: GOOGLE_CLIENT_ID is missing in environment variables!");
    }
    const protocol = process.env.VERCEL === "1" ? "https" : req.protocol;
    const redirect_uri = `${protocol}://${req.get("host")}/api/community/auth/google/callback`;
    const scope = "openid email profile";
    const response_type = "code";
    const googleUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${encodeURIComponent(scope)}&response_type=${response_type}&access_type=offline&prompt=consent`;
    res.redirect(googleUrl);
  });
  app2.get("/api/community/auth/google/callback", async (req, res) => {
    const { code, error, error_description } = req.query;
    console.log(`[Google OAuth Callback] Query received:`, req.query);
    if (error) {
      console.error(`[Google OAuth Error] ${error}: ${error_description}`);
      return res.status(400).send(`O Google retornou um erro: ${error}. Descri\xE7\xE3o: ${error_description}`);
    }
    if (!code) {
      console.warn(`[Google OAuth Warning] No code parameter in callback URL.`);
      return res.status(400).send("C\xF3digo de autoriza\xE7\xE3o n\xE3o fornecido pelo Google. Verifique se o seu Client ID e Redirect URI est\xE3o corretos no Google Cloud Console.");
    }
    const client_id = process.env.GOOGLE_CLIENT_ID?.trim();
    const client_secret = process.env.GOOGLE_CLIENT_SECRET?.trim();
    if (!client_id || !client_secret) {
      console.error(`[Google OAuth Error] Missing credentials in environment variables.`);
      return res.status(500).send("Erro interno: Chaves do Google n\xE3o encontradas no servidor. Verifique o seu arquivo .env.");
    }
    const protocol = process.env.VERCEL === "1" ? "https" : req.protocol;
    const redirect_uri = `${protocol}://${req.get("host")}/api/community/auth/google/callback`;
    try {
      const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          code,
          client_id,
          client_secret,
          redirect_uri,
          grant_type: "authorization_code"
        })
      });
      const tokens = await tokenRes.json();
      if (!tokenRes.ok) throw new Error(tokens.error_description || "Erro ao obter token do Google");
      const userRes = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: { Authorization: `Bearer ${tokens.access_token}` }
      });
      const googleUser = await userRes.json();
      if (!userRes.ok) throw new Error("Erro ao obter perfil do Google");
      const openId = googleUser.sub;
      let user = await storage.getUserByOpenId(openId);
      const ownerEmail = "m1n3bas3@gmail.com";
      const userEmail = googleUser.email.toLowerCase();
      const isOwner = userEmail === ownerEmail;
      if (!user) {
        user = await storage.createUser({
          openId,
          name: googleUser.name || "Jogador SLX",
          email: googleUser.email,
          loginMethod: "google",
          role: isOwner ? "admin" : "user"
        });
      } else {
        if (isOwner && user.role !== "admin") {
          console.log(`[Auth] Detetado dono (${userEmail}) sem permiss\xE3o admin. Atualizando...`);
          await storage.updateUserRole(user.id, "admin");
          user.role = "admin";
        }
      }
      req.session.user = {
        id: user.id,
        role: user.role,
        name: user.name
      };
      req.session.save((err) => {
        if (err) {
          console.error("[Session Save Error]", err);
          return res.status(500).send("Erro ao salvar sua sess\xE3o. Tente novamente.");
        }
        console.log(`[Auth Success] User ${user.name} logged in. Redirecting...`);
        res.redirect("/community/dashboard");
      });
    } catch (error2) {
      console.error("Auth error:", error2);
      res.status(500).send(`Erro na autentica\xE7\xE3o: ${error2.message}`);
    }
  });
  app2.post("/api/community/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ success: false });
      res.json({ success: true });
    });
  });
  app2.get("/api/community/auth/me", (req, res) => {
    const user = req.session.user;
    if (!user) return res.status(401).json({ loggedIn: false });
    res.json({ loggedIn: true, user });
  });
  app2.post("/api/community/auth/promote-me-to-admin", async (req, res) => {
    let currentUser = req.session.user;
    if (!currentUser) {
      return res.status(401).json({ message: "Voc\xEA precisa estar logado para se tornar admin." });
    }
    await storage.updateUserRole(currentUser.id, "admin");
    currentUser.role = "admin";
    res.json({ success: true, message: "Voc\xEA agora \xE9 o Analista SLX (Admin)!" });
  });
}

// server/community/stripe.ts
init_storage();
import Stripe from "stripe";
var stripe = null;
function getStripe() {
  if (!stripe && process.env.STRIPE_SECRET_KEY) {
    const rawKey = process.env.STRIPE_SECRET_KEY;
    const key = rawKey.replace(/['"]/g, "").trim();
    stripe = new Stripe(key, {
      apiVersion: "2023-10-16",
      maxNetworkRetries: 3,
      timeout: 15e3
    });
    console.log(`[Stripe] Cliente inicializado (Sanitized). Key: ${key.substring(0, 7)}... Size: ${key.length}`);
  }
  return stripe;
}
function setupStripeRoutes(app2) {
  app2.post("/api/community/create-checkout-session", async (req, res) => {
    let result = null;
    const { price, title, description, videoUrl, allowPublic, lang } = req.body;
    const isPt = lang === "pt" || !lang;
    const productName = isPt ? `An\xE1lise Profissional SLX: ${title}` : `SLX Professional Analysis: ${title}`;
    const productDesc = isPt ? "An\xE1lise profunda de gameplay CODM com metodologia psicanal\xEDtica." : "Deep CODM gameplay analysis using the SLX psychoanalytic methodology.";
    try {
      console.log(`[Stripe] Inciando cria\xE7\xE3o de sess\xE3o. Lang recebido: "${lang}" (body)`);
      const user = req.session.user;
      if (!user) {
        return res.status(401).json({ error: "Voc\xEA precisa estar logado para realizar o pagamento." });
      }
      if (user.role === "admin") {
        const adminResult = await storage.createUploadSession(
          user.id,
          title,
          description || "Admin Upload - Sem Pagamento",
          "R$ 0,00",
          videoUrl || "",
          allowPublic || false
        );
        await storage.confirmPayment(adminResult.paymentId);
        console.log(`[Admin Bypass] V\xEDdeo ${adminResult.videoId} aprovado automaticamente para admin ${user.email}`);
        return res.json({
          url: `${req.protocol}://${req.get("host")}/community/payment-success?admin=true&paymentId=${adminResult.paymentId}`,
          adminBypass: true
        });
      }
      const stripeClient = getStripe();
      result = await storage.createUploadSession(
        user.id,
        title,
        description || "Aguardando pagamento",
        price,
        videoUrl || "",
        allowPublic || false
      );
      console.log(`[Stripe] Sess\xE3o criada no DB. PaymentId: ${result.paymentId}, VideoId: ${result.videoId}`);
      if (!stripeClient) {
        console.warn("[Stripe] Chave secreta ausente ou inv\xE1lida. Usando redirecionamento Mock.");
        return res.json({
          url: `${req.protocol}://${req.get("host")}/community/payment-success?mock=true&paymentId=${result.paymentId}`,
          mock: true
        });
      }
      let currency = "brl";
      let amountInCents = 3700;
      if (!isPt) {
        currency = "usd";
        amountInCents = 700;
      }
      if (price && typeof price === "string") {
        if (price.includes("$") || price.toLowerCase().includes("usd")) {
          currency = "usd";
          amountInCents = 700;
          const numeric = parseFloat(price.replace(/[^\d.,]/g, ""));
          if (!isNaN(numeric) && numeric > 0) amountInCents = Math.round(numeric * 100);
        } else if (price.includes("R$")) {
          currency = "brl";
          amountInCents = 3700;
          const numeric = parseFloat(price.replace(/[^\d.,]/g, "").replace(",", "."));
          if (!isNaN(numeric) && numeric > 0) amountInCents = Math.round(numeric * 100);
        }
      }
      console.log(`[Stripe] Criando checkout. Moeda: ${currency.toUpperCase()}, Valor: ${amountInCents}, Locale: ${isPt ? "pt-BR" : "en"}`);
      const sessionOptions = {
        automatic_payment_methods: { enabled: true },
        line_items: [
          {
            price_data: {
              currency,
              product_data: {
                name: productName,
                description: productDesc
              },
              unit_amount: amountInCents
            },
            quantity: 1
          }
        ],
        mode: "payment",
        locale: isPt ? "pt-BR" : "en",
        // Força o idioma da página do Stripe
        success_url: `${req.protocol}://${req.get("host")}/community/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.protocol}://${req.get("host")}/community/payment-cancel`,
        client_reference_id: result.paymentId.toString(),
        metadata: {
          videoId: result.videoId.toString(),
          userId: user.id.toString(),
          paymentId: result.paymentId.toString()
        }
      };
      const session2 = await stripeClient.checkout.sessions.create(sessionOptions);
      console.log("[Stripe] Sess\xE3o de checkout criada com sucesso.");
      res.json({ url: session2.url });
    } catch (error) {
      console.error("[Stripe] SDK falhou. Tentando Fallback Manual (Fetch)...", error.message);
      if (!result) {
        console.error("[Stripe] Erro ocorreu antes de criar sess\xE3o no DB. Abortando fallback.");
        return res.status(500).json({ error: "Erro interno ao preparar pedido (Banco de Dados)." });
      }
      try {
        const rawKey = process.env.STRIPE_SECRET_KEY || "";
        const cleanKey = rawKey.replace(/['"]/g, "").trim();
        let fbCurrency = "brl";
        let fbAmount = "3700";
        if (!isPt) {
          fbCurrency = "usd";
          fbAmount = "700";
        }
        if (price && typeof price === "string") {
          if (price.includes("$") || price.toLowerCase().includes("usd")) {
            fbCurrency = "usd";
            fbAmount = "700";
          } else if (price.includes("R$")) {
            fbCurrency = "brl";
            fbAmount = "3700";
          }
        }
        const params = new URLSearchParams();
        params.append("mode", "payment");
        params.append("success_url", `${req.protocol}://${req.get("host")}/community/payment-success?session_id={CHECKOUT_SESSION_ID}`);
        params.append("cancel_url", `${req.protocol}://${req.get("host")}/community/payment-cancel`);
        params.append("client_reference_id", result.paymentId.toString());
        params.append("line_items[0][price_data][currency]", fbCurrency);
        params.append("line_items[0][price_data][product_data][name]", productName);
        params.append("line_items[0][price_data][unit_amount]", fbAmount);
        params.append("line_items[0][quantity]", "1");
        params.append("metadata[videoId]", result.videoId.toString());
        params.append("metadata[paymentId]", result.paymentId.toString());
        params.append("payment_method_types[0]", "card");
        const fallbackRes = await fetch("https://api.stripe.com/v1/checkout/sessions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${cleanKey}`,
            "Content-Type": "application/x-www-form-urlencoded",
            "Stripe-Version": "2023-10-16"
          },
          body: params
        });
        const fallbackData = await fallbackRes.json();
        if (!fallbackRes.ok) {
          throw new Error(fallbackData.error?.message || JSON.stringify(fallbackData));
        }
        console.log("[Stripe] Sucesso via Fallback Manual!");
        return res.json({ url: fallbackData.url });
      } catch (fallbackErr) {
        console.error("[Stripe] Fallback Final falhou:", fallbackErr);
        res.status(500).json({
          // Mostrar a mensagem REAL do erro para o usuário (ex: Authentication Failed)
          error: `Erro Stripe: ${fallbackErr.message}`,
          details: fallbackErr.message,
          originalError: error.message
        });
      }
    }
  });
  app2.post("/api/community/webhooks/stripe", async (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;
    const stripeClient = getStripe();
    if (!stripeClient) return res.sendStatus(400);
    try {
      event = req.body;
      if (event.type === "checkout.session.completed") {
        const session2 = event.data.object;
        const paymentId = parseInt(session2.client_reference_id || session2.metadata?.paymentId);
        if (paymentId) {
          await storage.confirmPayment(paymentId);
          console.log(`[Stripe Webhook] Pagamento ${paymentId} confirmado automaticamente.`);
        }
      }
      res.json({ received: true });
    } catch (err) {
      console.error(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
    }
  });
}

// server/community/mercadopago.ts
import { MercadoPagoConfig, Preference } from "mercadopago";
function setupMercadoPagoRoutes(app2) {
  app2.post("/api/mercadopago/create-preference", async (req, res) => {
    try {
      const client = new MercadoPagoConfig({
        accessToken: process.env.MP_ACCESS_TOKEN || "TEST-TOKEN",
        options: { timeout: 5e3 }
      });
      const preference = new Preference(client);
      const response = await preference.create({
        body: {
          items: [
            {
              id: "codm-analysis",
              title: "An\xE1lise de Gameplay CODM",
              quantity: 1,
              unit_price: 5,
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
              { id: "ticket" }
              // Boleto
            ],
            installments: 1
          }
        }
      });
      res.json({ id: response.id, init_point: response.init_point });
    } catch (error) {
      console.error("Erro ao criar prefer\xEAncia do Mercado Pago:", error);
      res.status(500).json({ error: "Failed to create preference" });
    }
  });
}

// server/routes.ts
import * as trpcExpress from "@trpc/server/adapters/express";

// server/community/trpc.ts
import { initTRPC, TRPCError } from "@trpc/server";
import { ZodError } from "zod";
var createContext = async ({
  req,
  res
}) => {
  console.log("[tRPC Context] Method:", req.method, "URL:", req.url);
  console.log("[tRPC Context] Body:", JSON.stringify(req.body));
  console.log("[tRPC Context] Content-Type:", req.headers["content-type"]);
  const user = req.session?.user;
  return {
    req,
    res,
    user
  };
};
var t = initTRPC.context().create({
  errorFormatter({ shape, error }) {
    if (error.code === "BAD_REQUEST") {
      console.error("tRPC BAD_REQUEST Error:", error.message);
      if (error.cause instanceof ZodError) {
        console.error("Zod Validation Details:", JSON.stringify(error.cause.flatten(), null, 2));
      }
    } else {
      console.error("tRPC Error:", error.code, error.message);
    }
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
      }
    };
  }
});
var router = t.router;
var publicProcedure = t.procedure;
var protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Voc\xEA precisa estar logado para acessar esta \xE1rea."
    });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user
    }
  });
});
var adminProcedure = t.procedure.use(async ({ ctx, next }) => {
  if (!ctx.user || ctx.user.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "Acesso restrito. Apenas o analista SLX pode acessar esta \xE1rea."
    });
  }
  return next({
    ctx: {
      ...ctx,
      user: ctx.user
    }
  });
});

// server/community/routers/health.ts
var healthRouter = router({
  check: publicProcedure.query(async () => {
    const diagnostics = {
      status: "ok",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      env: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        isVercel: !!process.env.VERCEL,
        databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) + "..." : "MISSING"
      },
      storage: {
        type: process.env.DATABASE_URL ? "Postgres/Database" : "InMemory (Temporary)"
      },
      dbConnection: "Unknown"
    };
    try {
      const { storage: storage2 } = await Promise.resolve().then(() => (init_storage(), storage_exports));
      const projects2 = await storage2.getProjects();
      diagnostics.dbConnection = `Success (Found ${projects2.length} projects)`;
    } catch (error) {
      console.error("Health Check DB Error:", error);
      diagnostics.dbConnection = `Failed: ${error.message}`;
      if (process.env.DATABASE_URL) {
        diagnostics.status = "error_db_connection";
      }
    }
    return diagnostics;
  })
});

// server/community/appRouter.ts
var appRouter = router({
  health: healthRouter
});

// server/routes.ts
async function registerRoutes(app2) {
  await bootstrapDatabase();
  setupAuth(app2);
  setupStripeRoutes(app2);
  setupMercadoPagoRoutes(app2);
  app2.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext
    })
  );
  app2.get("/api/health", async (_req, res) => {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");
    try {
      const dbStatus = await db.execute(sql4`SELECT 1 FROM projects LIMIT 1`);
      res.json({
        status: "ok",
        db: dbStatus.length > 0 ? "connected_and_warm" : "empty_but_connected",
        version: "1.3.4-warm-keepalive",
        appName: "SLX Keep Alive",
        // Included to satisfy UptimeRobot keyword monitor
        time: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (err) {
      console.error("Health Check DB Error:", err.message);
      res.status(200).json({
        status: "alive_no_db",
        error: err.message,
        version: "1.3.4-warm-keepalive"
      });
    }
  });
  console.log("Registering ranking routes (priority)...");
  app2.get("/api/rankings/:gameId", async (req, res) => {
    try {
      if (!supabase) {
        return res.status(503).json({ error: "Servi\xE7o de Ranking indispon\xEDvel. Chaves do banco de dados n\xE3o configuradas." });
      }
      const { gameId } = req.params;
      const { data, error } = await supabase.from("game_rankings").select("*").eq("game_id", gameId).order("score", { ascending: false }).limit(10);
      if (error) throw error;
      res.json(data);
    } catch (error) {
      console.error("RANKING GET ERROR:", error);
      res.status(500).json({ error: "Failed to fetch rankings", message: error.message });
    }
  });
  app2.post("/api/rankings", async (req, res) => {
    try {
      if (!supabase) {
        return res.status(503).json({ error: "Servi\xE7o de Ranking indispon\xEDvel. Chaves do banco de dados n\xE3o configuradas." });
      }
      const { game_id, username, score } = req.body;
      if (!game_id || !username || score === void 0) {
        return res.status(400).json({ error: "Missing required fields: game_id, username, score" });
      }
      console.log(`Submitting score: ${username} - ${score} for ${game_id}`);
      const { data, error } = await supabase.from("game_rankings").insert([{ game_id, username, score }]).select();
      if (error) throw error;
      res.status(201).json(data ? data[0] : null);
    } catch (error) {
      console.error("RANKING POST ERROR:", error);
      res.status(500).json({ error: "Failed to save ranking", message: error.message });
    }
  });
  app2.get("/api/projects", async (_req, res) => {
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=1200");
    try {
      const projects2 = await storage.getProjects();
      res.json(projects2);
    } catch (error) {
      console.error("ROUTE ERROR /api/projects:", error);
      res.status(500).json({
        error: "Failed to fetch projects",
        message: error.message,
        details: process.env.NODE_ENV === "development" ? error.stack : void 0
      });
    }
  });
  app2.get("/api/projects/category/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const projects2 = await storage.getProjectsByCategory(category);
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch projects by category" });
    }
  });
  app2.get("/api/projects/:id", async (req, res) => {
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
  app2.post("/api/projects", async (req, res) => {
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
  app2.patch("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
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
  app2.delete("/api/projects/:id", async (req, res) => {
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
  app2.get("/api/about", async (_req, res) => {
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
  app2.get("/api/weapon-likes", async (_req, res) => {
    try {
      const likes = await storage.getAllWeaponLikes();
      res.json(likes);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapon likes" });
    }
  });
  app2.get("/api/weapon-likes/:weaponId", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const likes = await storage.getWeaponLikes(weaponId);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch weapon likes" });
    }
  });
  app2.post("/api/weapon-likes/:weaponId/like", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const fingerprint = req.body?.fingerprint || req.header("x-fingerprint") || "anonymous";
      const likes = await storage.incrementWeaponLikes(weaponId, fingerprint);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to update weapon likes" });
    }
  });
  app2.post("/api/weapon-likes/:weaponId/unlike", async (req, res) => {
    try {
      const { weaponId } = req.params;
      const fingerprint = req.body?.fingerprint || req.header("x-fingerprint") || "anonymous";
      const likes = await storage.decrementWeaponLikes(weaponId, fingerprint);
      res.json({ weaponId, likes });
    } catch (error) {
      res.status(500).json({ error: "Failed to update weapon likes" });
    }
  });
  app2.get("/api/products", async (_req, res) => {
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=1200");
    try {
      const products2 = await storage.getProducts();
      res.json(products2);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
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
  app2.post("/api/products", async (req, res) => {
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
  app2.patch("/api/products/:id", async (req, res) => {
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
  app2.delete("/api/products/:id", async (req, res) => {
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
  app2.post("/api/analytics/track", async (req, res) => {
    try {
      const { path: path4, language } = req.body;
      const userAgent = req.get("User-Agent");
      const referer = req.get("Referer");
      const ip = req.ip || req.headers["x-forwarded-for"];
      const ipHash = ip ? Buffer.from(ip.toString()).toString("base64").substring(0, 10) : null;
      await storage.logVisit({
        path: path4 || "/",
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
  app2.get("/api/analytics/stats", async (req, res) => {
    const token = req.query.token;
    const analyticsSecret = (process.env.ANALYTICS_SECRET || "1+1 Slxcodmcrypto 1+1").trim();
    if (token !== analyticsSecret) {
      console.warn(`[Analytics] Unauthorized access attempt with token: ${token}`);
      return res.status(403).json({ error: "Unauthorized" });
    }
    try {
      const days = parseInt(req.query.days) || 7;
      const stats = await storage.getAnalyticsStats(days);
      res.json(stats);
    } catch (error) {
      console.error("Analytics stats error:", error);
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/app.ts
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
var MemoryStore = MemoryStoreFactory(session);
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
var app = express();
app.set("trust proxy", 1);
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));
var isVercel = process.env.VERCEL === "1";
var sessionStore = new MemoryStore({
  checkPeriod: 864e5
  // prune expired entries every 24h
});
app.use(session({
  store: sessionStore,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1e3,
    // 30 days
    secure: isVercel,
    // Secure if on Vercel (HTTPS)
    sameSite: "lax"
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || "slx-community-secret-2026"
}));
app.use("/uploads", express.static(path2.resolve(process.cwd(), "uploads")));
app.use("/attached_assets", express.static(path2.resolve(process.cwd(), "client", "public", "attached_assets")));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use((req, res, next) => {
  const start = Date.now();
  const path4 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path4.startsWith("/api")) {
      let logLine = `${req.method} ${path4} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function runApp(setup, startListening = true) {
  log("Starting application routes registration...");
  const server = await registerRoutes(app);
  log("API routes registered successfully.");
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`[ERROR] ${status}: ${message}`);
    res.status(status).json({ message });
  });
  await setup(app, server);
  if (startListening) {
    const PORT = parseInt(process.env.PORT || "3001", 10);
    server.listen(PORT, "0.0.0.0", () => {
      log(`serving on port ${PORT}`);
    });
  }
}

// server/index-prod.ts
async function serveStatic(app2, _server) {
  const rootDir = process.cwd();
  const distPath = path3.resolve(rootDir, "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  const attachedAssetsPath = path3.resolve(rootDir, "client", "public", "attached_assets");
  if (fs.existsSync(attachedAssetsPath)) {
    app2.use("/attached_assets", express2.static(attachedAssetsPath));
  }
  app2.use((req, res, next) => {
    if (req.path.startsWith("/api")) {
      return next();
    }
    res.sendFile(path3.resolve(distPath, "index.html"));
  });
}
var isVercel2 = process.env.VERCEL === "1";
var shouldListen = !isVercel2;
var setupPromise = runApp(serveStatic, shouldListen);
export {
  app,
  serveStatic,
  setupPromise
};
