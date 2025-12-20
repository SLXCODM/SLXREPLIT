import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";
import { sql } from "drizzle-orm";

if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL environment variable is not set. Database functionality will be disabled.");
}

export const db = process.env.DATABASE_URL
  ? drizzle(postgres(process.env.DATABASE_URL), { schema })
  : null as any;

// Helper to initialize database tables if they don't exist
export async function bootstrapDatabase() {
  if (!process.env.DATABASE_URL) return;

  try {
    console.log("Initializing database tables...");

    // Create projects table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS projects (
        id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
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
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS about_content (
        id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
        content TEXT NOT NULL,
        last_updated TIMESTAMP DEFAULT now() NOT NULL
      )
    `);

    // Create weapon_likes table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS weapon_likes (
        weapon_id TEXT PRIMARY KEY,
        likes TEXT DEFAULT '0' NOT NULL
      )
    `);

    // Create products table
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
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

    console.log("Database tables initialized successfully.");

    // Seed initial data if empty
    const [projectCount] = await db.execute(sql`SELECT count(*) FROM projects`);
    if (projectCount && (projectCount as any)[0].count === '0') {
      console.log("Seeding initial projects...");
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
          external_url: "https://youtube.com/playlist?list=PLNjPit_9myAG0C9G8vVwO8oaPrOXyCgls&si=7wFkX0k9K0tX8vF1",
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
        await db.execute(sql`
          INSERT INTO projects (id, title, category, description, image_url, external_url, featured, "order")
          VALUES (${p.id}, ${p.title}, ${p.category}, ${p.description}, ${p.image_url}, ${p.external_url}, ${p.featured}, ${p.order})
          ON CONFLICT (id) DO NOTHING
        `);
      }
      console.log("Seeding complete.");
    }
  } catch (error) {
    console.error("Failed to initialize database tables:", error);
  }
}
