import { pgTable, text, varchar, timestamp, boolean, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { sql } from "drizzle-orm";

// Projeto/Conteúdo
// Valid categories enum
export const projectCategories = ["gaming", "agriculture", "photography", "development"] as const;
export type ProjectCategory = typeof projectCategories[number];

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  category: text("category").notNull(), // must be one of projectCategories
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  externalUrl: text("external_url"),
  featured: boolean("featured").default(false),
  order: text("order").default("0"), // numeric string for sorting
});

// Sobre/Bio
export const aboutContent = pgTable("about_content", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  content: text("content").notNull(),
  lastUpdated: timestamp("last_updated").defaultNow().notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
}).extend({
  category: z.enum(projectCategories, {
    errorMap: () => ({ message: "Categoria deve ser: gaming, agriculture, photography ou development" })
  }),
  order: z.string().regex(/^\d+$/, "Order deve ser um número em formato string").optional(),
});

export const insertAboutContentSchema = createInsertSchema(aboutContent).omit({
  id: true,
  lastUpdated: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertAboutContent = z.infer<typeof insertAboutContentSchema>;
export type AboutContent = typeof aboutContent.$inferSelect;

// Weapons Likes
export const weaponLikes = pgTable("weapon_likes", {
  weaponId: varchar("weapon_id").primaryKey(),
  likes: text("likes").default("0").notNull(),
});

export const insertWeaponLikeSchema = createInsertSchema(weaponLikes);
export type InsertWeaponLike = z.infer<typeof insertWeaponLikeSchema>;
export type WeaponLike = typeof weaponLikes.$inferSelect;

// --- COMMUNITY TABLES ---

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password"),
  name: text("name"),
  openId: text("open_id"),
  loginMethod: text("login_method"), // "google", "local"
  role: text("role").default("user").notNull(), // "user", "analyst", "admin"
  lastSignedIn: timestamp("last_signed_in").defaultNow(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  paymentId: integer("payment_id").notNull(),
  clientId: integer("client_id").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  s3Key: text("s3_key").notNull(),
  s3Url: text("s3_url").notNull(),
  fileSize: integer("file_size"),
  duration: integer("duration"),
  status: text("status").default("awaiting_payment").notNull(), // "awaiting_payment", "uploaded", "processing", "completed", "failed"
  allowPublic: boolean("allow_public").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  amount: text("amount").notNull(),
  currency: text("currency").default("BRL").notNull(),
  status: text("status").notNull(), // "pending", "succeeded", "failed"
  stripePaymentIntentId: text("stripe_payment_intent_id"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const analyses = pgTable("analyses", {
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
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const analysisComments = pgTable("analysis_comments", {
  id: serial("id").primaryKey(),
  analysisId: integer("analysis_id").notNull(),
  timestamp: integer("timestamp").notNull(), // timestamp in seconds from start of video
  comment: text("comment").notNull(),
  type: text("type").default("general").notNull(), // "aim", "positioning", "decision", "general"
});

export const galleryItems = pgTable("gallery_items", {
  id: serial("id").primaryKey(),
  analysisId: integer("analysis_id").notNull().unique(),
  featured: boolean("featured").default(false).notNull(),
  category: text("category"), // "clutch", "movement", "tactical"
  order: integer("order").default(0).notNull(),
});

// Zod Schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true, updatedAt: true, lastSignedIn: true });
export const insertVideoSchema = createInsertSchema(videos).omit({ id: true, createdAt: true, updatedAt: true });
export const insertPaymentSchema = createInsertSchema(payments).omit({ id: true, createdAt: true, updatedAt: true });
export const insertAnalysisSchema = createInsertSchema(analyses).omit({ id: true, createdAt: true, updatedAt: true });

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Video = typeof videos.$inferSelect;
export type InsertVideo = z.infer<typeof insertVideoSchema>;
export type Payment = typeof payments.$inferSelect;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type Analysis = typeof analyses.$inferSelect;
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;

// Produtos da Loja
export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: text("price").notNull(), // em centavos para evitar decimais
  imageUrl: text("image_url"),
  category: text("category").notNull(), // digital, preset, course, etc
  featured: boolean("featured").default(false),
  active: boolean("active").default(true),
  stripeProductId: text("stripe_product_id"),
  stripePriceId: text("stripe_price_id"),
  order: text("order").default("0"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
  createdAt: true,
  stripeProductId: true,
  stripePriceId: true,
}).extend({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(200),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres").max(2000),
  price: z.string().regex(/^\d+$/, "Preço deve ser um número em centavos"),
  category: z.string().min(3),
  featured: z.boolean().optional(),
  active: z.boolean().optional(),
  order: z.string().optional(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
