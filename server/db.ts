import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";
import { sql } from "drizzle-orm";

// GLOBAL BYPASS FOR SUPABASE SELF-SIGNED CERTIFICATES ON VERCEL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL environment variable is not set. Database functionality will be disabled.");
}

// Lazy database connection helper
let _db: any = null;

export const db = new Proxy({}, {
  get(_target, prop) {
    if (!_db) {
      const url = process.env.DATABASE_URL;
      if (!url) {
        console.error("DATABASE_URL is missing!");
        throw new Error("Missing DATABASE_URL");
      }

      try {
        // Mask password for logging
        const maskedUrl = url.replace(/:([^:@]+)@/, ":****@");
        console.log(`Initializing database connection with: ${maskedUrl}`);

        const client = postgres(url, {
          ssl: { rejectUnauthorized: false },
          connect_timeout: 30, // Increase timeout for cold starts
          max: 1 // Vercel limited connections
        });
        _db = drizzle(client, { schema });
        console.log("Database client initialized successfully.");
      } catch (err: any) {
        let helpMessage = err.message;
        if (err.message.includes("ENOTFOUND")) {
          helpMessage = `DICA SUPABASE: O banco ${url.split('@')[1].split(':')[0]} não foi encontrado. Verifique se o projeto não está PAUSADO no Supabase ou se a URL está correta.`;
        }
        console.error("CRITICAL: Database initialization failed:", helpMessage);
        throw new Error(helpMessage);
      }
    }
    return _db[prop];
  }
}) as any;

// Helper to initialize database tables if they don't exist
export async function bootstrapDatabase() {
  // In production (Vercel), we USED to skip, but now we MUST check if tables exist.
  // The persistent storage "ReadOnly" error happens on file writes, but this is a Postgres connection.
  // So we allow bootstrapping to ensure tables exist in the customized Supabase DB.
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

    // Create projects table
    console.log("Checking projects table...");
    await db.execute(sql`
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

    // Create about_content table
    console.log("Checking about_content table...");
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS about_content (
        id TEXT PRIMARY KEY,
        content TEXT NOT NULL,
        last_updated TIMESTAMP DEFAULT now() NOT NULL
      )
    `);

    // Create weapon_likes table
    console.log("Checking weapon_likes table...");
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS weapon_likes (
        weapon_id TEXT PRIMARY KEY,
        likes TEXT DEFAULT '0' NOT NULL
      )
    `);

    // Create products table
    console.log("Checking products table...");
    await db.execute(sql`
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

    console.log("All tables checked/created.");

    // Get count first so it can be used below
    const result = await db.execute(sql`SELECT count(*) FROM projects`);
    const count = result[0]?.count;

    // 1. Force remove old Handcam duplicates and update the link EVERY TIME
    // This handles cases where the link is stuck even if database is not "empty"
    console.log("CRITICAL: Ensuring Handcam link is correct...");
    try {
      await db.execute(sql`
        DELETE FROM projects 
        WHERE (title ILIKE '%Handcam%' OR description ILIKE '%handcam%')
          AND id != 'proj-gaming-3'
      `);

      await db.execute(sql`
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

    if (count === '0' || count === 0) {
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
          description: "Conteúdo exclusivo para melhorar sua gameplay",
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
          title: "Minhas Configurações",
          description: "HUD, Sensibilidade e Configurações Gerais",
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
        if (p.id === 'proj-gaming-3') continue; // Handled above
        await db.execute(sql`
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
      // If NOT empty, at least ensure the core projects have correct links (like Handcam)
      // This is extra safety to fix existing broken data
      await db.execute(sql`
        INSERT INTO projects (id, title, category, description, image_url, external_url, featured, "order")
        VALUES ('proj-gaming-3', 'Handcam', 'gaming', 'Gameplay revelada com handcam', '/attached_assets/generated_images/smartphone_icon_handcam_button_background.png', 'https://www.tiktok.com/@slxcodm_/collection/Handcam-7505932826018990854?is_from_webapp=1&sender_device=pc', true, '3')
        ON CONFLICT (id) DO UPDATE SET external_url = EXCLUDED.external_url
      `);
    }
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
  }
}
