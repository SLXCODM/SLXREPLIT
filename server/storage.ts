import {
  type Project,
  type InsertProject,
  type AboutContent,
  type InsertAboutContent,
  type WeaponLike,
  type Product,
  type InsertProduct,
  weaponLikes,
  weaponIndividualLikes,
  projects,
  aboutContent,
  products,
  users,
  videos,
  payments,
  analyses,
  analysisComments,
  galleryItems,
  type User,
  type InsertUser,
  type Video,
  type InsertVideo,
  type Payment,
  type InsertPayment,
  type Analysis,
  type InsertAnalysis,
  analyticsVisits,
  type InsertAnalyticsVisit,
  type WeaponIndividualLike
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc, ne, and, sql } from "drizzle-orm";
import path from "path";
import { supabase } from "./lib/supabase";
import {
  sendOrderNotificationToAdmin,
  sendPaymentConfirmedToClient,
  sendAnalysisFinishedToClient
} from "./community/mail";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;

  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByOpenId(openId: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserRole(userId: number, role: string): Promise<User | undefined>;

  // Payments & Flow
  getPendingPayments(): Promise<(Payment & { video: Video })[]>;
  confirmPayment(paymentId: number): Promise<void>;

  // About Content
  getAboutContent(): Promise<AboutContent | undefined>;
  updateAboutContent(content: InsertAboutContent): Promise<AboutContent>;

  // Weapon Likes
  getAllWeaponLikes(): Promise<WeaponLike[]>;
  getWeaponLikes(weaponId: string): Promise<number>;
  incrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number>;
  decrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number>;

  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: string, updates: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: string): Promise<boolean>;

  // Community / Upload
  createUploadSession(userId: number, title: string, description: string, price: string, videoUrl?: string, allowPublic?: boolean): Promise<{ paymentId: number, videoId: number }>;
  updateVideoPath(videoId: number, filePath: string): Promise<void>;

  // Community / Analyst
  getPendingVideos(): Promise<Video[]>;
  getUserVideos(userId: number): Promise<Video[]>;
  getVideo(videoId: number): Promise<Video | undefined>;
  submitAnalysis(analysis: InsertAnalysis): Promise<Analysis>;
  getAnalysisByVideoId(videoId: number): Promise<Analysis | undefined>;
  getPublicAnalyses(): Promise<(Analysis & { video: Video })[]>;
  createManualAnalysis(data: {
    title: string;
    description: string;
    videoUrl: string;
    analystId: number;
    rating: number;
    summary: string;
    feedbackVideoUrl: string | null;
    teaserText: string;
  }): Promise<Analysis>;
  deleteGalleryItem(id: number): Promise<boolean>;
  // Analytics
  logVisit(visit: InsertAnalyticsVisit): Promise<void>;
  getAnalyticsStats(days: number): Promise<any>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    try {
      // Use Supabase HTTP client to bypass Vercel Postgres TCP pooler hangs completely
      if (supabase) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('order', { ascending: true });

        if (!error && data && data.length > 0) {
          return data as Project[];
        }
        if (error) console.error("Supabase HTTP REST Fallback error:", error.message);
      }
    } catch (e: any) {
      console.error("Failed to read from Supabase REST API, falling back to Drizzle TCP...", e.message);
    }

    // Fallback to traditional Drizzle TCP connection
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getProject(id: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    try {
      // Use Supabase HTTP client to bypass Vercel Postgres TCP pooler hangs completely
      if (supabase) {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('category', category)
          .order('order', { ascending: true });

        if (!error && data && data.length > 0) {
          return data as Project[];
        }
        if (error) console.error("Supabase HTTP REST Fallback error:", error.message);
      }
    } catch (e: any) {
      console.error("Failed to read from Supabase REST API, falling back to Drizzle TCP...", e.message);
    }

    // Fallback to traditional Drizzle TCP connection
    return await db.select().from(projects).where(eq(projects.category, category)).orderBy(projects.order);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }

  async updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined> {
    const [project] = await db.update(projects).set(updates).where(eq(projects.id, id)).returning();
    return project;
  }

  async deleteProject(id: string): Promise<boolean> {
    const [deleted] = await db.delete(projects).where(eq(projects.id, id)).returning();
    return !!deleted;
  }

  async logVisit(visit: InsertAnalyticsVisit): Promise<void> {
    await db.insert(analyticsVisits).values(visit);
  }

  async getAnalyticsStats(days: number): Promise<any> {
    const period = sql`now() - interval '${sql.raw(days.toString())} days'`;

    // Total visits
    const totalVisits = await db.execute(sql`
      SELECT count(*)::int as count 
      FROM analytics_visits 
      WHERE created_at >= ${period}
    `);

    // Visits by path
    const pathStats = await db.execute(sql`
      SELECT path, count(*)::int as count 
      FROM analytics_visits 
      WHERE created_at >= ${period}
      GROUP BY path 
      ORDER BY count DESC
    `);

    // Visits by day (for chart)
    const dailyStats = await db.execute(sql`
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

  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByOpenId(openId: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.openId, openId));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async updateUserRole(userId: number, role: string): Promise<User | undefined> {
    const [user] = await db.update(users).set({ role }).where(eq(users.id, userId)).returning();
    return user;
  }

  async getAboutContent(): Promise<AboutContent | undefined> {
    const [content] = await db.select().from(aboutContent);
    return content;
  }

  async updateAboutContent(content: InsertAboutContent): Promise<AboutContent> {
    const existing = await this.getAboutContent();
    if (existing) {
      const [updated] = await db.update(aboutContent).set(content).where(eq(aboutContent.id, existing.id)).returning();
      return updated;
    }
    const [newContent] = await db.insert(aboutContent).values(content).returning();
    return newContent;
  }

  // Weapon Likes
  async getAllWeaponLikes(): Promise<WeaponLike[]> {
    const raw = await db.select().from(weaponLikes);
    return raw.map((r: any) => ({
      ...r,
      likes: r.likes.toString()
    }));
  }

  async getWeaponLikes(weaponId: string): Promise<number> {
    const [result] = await db.select({ count: sql<number>`count(*)` })
      .from(weaponIndividualLikes)
      .where(eq(weaponIndividualLikes.weaponId, weaponId));
    return Number(result?.count || 0);
  }

  async incrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number> {
    // 1. Insert individual like
    await db.insert(weaponIndividualLikes)
      .values({ weaponId, fingerprint })
      .onConflictDoNothing();

    // 2. Return fresh count
    return await this.getWeaponLikes(weaponId);
  }

  async decrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number> {
    // 1. Remove individual like
    await db.delete(weaponIndividualLikes)
      .where(and(
        eq(weaponIndividualLikes.weaponId, weaponId),
        eq(weaponIndividualLikes.fingerprint, fingerprint)
      ));

    // 2. Return fresh count
    return await this.getWeaponLikes(weaponId);
  }


  // Products
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products).orderBy(products.order);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product;
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const [newProduct] = await db.insert(products).values({
      ...product,
      id,
      createdAt: new Date(),
      imageUrl: product.imageUrl || null,
    }).returning();
    return newProduct;
  }

  async updateProduct(id: string, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const [product] = await db.update(products).set(updates).where(eq(products.id, id)).returning();
    return product;
  }

  async deleteProduct(id: string): Promise<boolean> {
    const [deleted] = await db.delete(products).where(eq(products.id, id)).returning();
    return !!deleted;
  }

  async createUploadSession(userId: number, title: string, description: string, price: string, videoUrl?: string, allowPublic: boolean = false): Promise<{ paymentId: number, videoId: number }> {
    // 1. Create Payment Record
    const [payment] = await db.insert(payments).values({
      userId,
      amount: price.replace(/[^\d.]/g, ""),
      stripePaymentIntentId: `pend_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      status: "pending",
      description: `Pedido de análise: ${title}`,
    }).returning();

    // 2. Create Video Record
    const isExternal = !!videoUrl;
    const [video] = await db.insert(videos).values({
      paymentId: payment.id,
      clientId: userId,
      title: title,
      description: description,
      s3Key: isExternal ? "external_url" : "pending_upload",
      s3Url: isExternal ? videoUrl! : "pending_upload",
      status: "awaiting_payment",
      allowPublic: allowPublic
    }).returning();

    return { paymentId: payment.id, videoId: video.id };
  }

  async getPendingPayments(): Promise<(Payment & { video: Video })[]> {
    try {
      const results = await db.select({
        payment: payments,
        video: videos
      })
        .from(payments)
        .innerJoin(videos, eq(videos.paymentId, payments.id))
        .where(ne(payments.status, "succeeded"));

      return results.map((r: any) => ({ ...r.payment, video: r.video }));
    } catch (error: any) {
      console.error("Error fetching pending payments:", error.message);
      throw new Error(`Database Error: ${error.message}. Ensure 'payments' and 'videos' tables exist.`);
    }
  }

  async confirmPayment(paymentId: number): Promise<void> {
    await db.update(payments)
      .set({ status: "succeeded", updatedAt: new Date() })
      .where(eq(payments.id, paymentId));

    await db.update(videos)
      .set({ status: "uploaded", updatedAt: new Date() })
      .where(eq(videos.paymentId, paymentId));

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
      console.error("Erro ao enviar notificações:", err);
    }
  }

  async updateVideoPath(videoId: number, filePath: string): Promise<void> {
    await db.update(videos)
      .set({
        s3Key: filePath,
        s3Url: `/uploads/${path.basename(filePath)}`,
        status: "uploaded"
      })
      .where(eq(videos.id, videoId));
  }

  async getPendingVideos(): Promise<Video[]> {
    return await db.select().from(videos).where(eq(videos.status, "uploaded"));
  }

  async getUserVideos(userId: number): Promise<Video[]> {
    return await db.select().from(videos).where(eq(videos.clientId, userId)).orderBy(desc(videos.createdAt));
  }

  async getVideo(videoId: number): Promise<Video | undefined> {
    const [video] = await db.select().from(videos).where(eq(videos.id, videoId));
    return video;
  }

  async submitAnalysis(insertAnalysis: InsertAnalysis): Promise<Analysis> {
    const [analysis] = await db.insert(analyses)
      .values(insertAnalysis)
      .onConflictDoUpdate({
        target: analyses.videoId,
        set: {
          ...insertAnalysis,
          updatedAt: new Date()
        }
      })
      .returning();

    await db.update(videos).set({ status: "completed" }).where(eq(videos.id, analysis.videoId));

    // Atualizar status do pagamento para "succeeded" (remove da lista de pendentes)
    await db.update(payments)
      .set({ status: "succeeded" })
      .where(eq(payments.id, db.select({ paymentId: videos.paymentId }).from(videos).where(eq(videos.id, analysis.videoId))));

    try {
      const [video] = await db.select().from(videos).where(eq(videos.id, analysis.videoId));
      if (video) {
        const [user] = await db.select().from(users).where(eq(users.id, video.clientId));
        if (user && user.email) {
          await sendAnalysisFinishedToClient(user.email, user.name || "Guerreiro", video.title);
        }
      }
    } catch (err) {
      console.error("Erro ao enviar notificação de análise:", err);
    }

    return analysis;
  }

  async getAnalysisByVideoId(videoId: number): Promise<Analysis | undefined> {
    const [analysis] = await db.select().from(analyses).where(eq(analyses.videoId, videoId));
    return analysis;
  }

  async getPublicAnalyses(): Promise<(Analysis & { video: Video })[]> {
    const results = await db.select({
      analysis: analyses,
      video: videos
    })
      .from(analyses)
      .innerJoin(videos, eq(analyses.videoId, videos.id))
      .where(eq(analyses.isPublic, true));

    return results.map((r: any) => ({ ...r.analysis, video: r.video }));
  }

  async createManualAnalysis(data: {
    title: string;
    description: string;
    videoUrl: string;
    analystId: number;
    rating: number;
    summary: string;
    feedbackVideoUrl: string | null;
    teaserText: string;
  }): Promise<Analysis> {
    try {
      const [video] = await db.insert(videos).values({
        clientId: data.analystId,
        paymentId: null,
        title: data.title,
        description: data.description,
        s3Key: "manual_post",
        s3Url: data.videoUrl,
        status: "completed",
        allowPublic: true,
      }).returning();

      const [analysis] = await db.insert(analyses).values({
        videoId: video.id,
        analystId: data.analystId,
        overallRating: data.rating,
        summary: data.summary,
        feedbackVideoUrl: data.feedbackVideoUrl,
        teaserText: data.teaserText,
        isPublic: true,
      }).returning();

      return analysis;
    } catch (error: any) {
      console.error("Error creating manual analysis:", error.message);
      throw new Error(`Failed to save post: ${error.message}. Check if 'users', 'videos' and 'analyses' tables are ready.`);
    }
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    const [analysis] = await db.select().from(analyses).where(eq(analyses.id, id));
    if (!analysis) return false;

    // Apenas remove da galeria pública, mantém a análise para o cliente
    await db.update(analyses)
      .set({ isPublic: false })
      .where(eq(analyses.id, id));

    return true;
  }
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private aboutContent: AboutContent | undefined;
  private weaponLikesMap = new Map<string, { weaponId: string, fingerprint: string }>();
  private productsMap: Map<string, Product>;
  private videosMap: Map<number, Video>;
  private analysesMap: Map<number, Analysis>;
  private usersMap: Map<number, User>;
  private paymentsMap: Map<number, Payment>;

  constructor() {
    this.projects = new Map();
    this.productsMap = new Map();
    this.videosMap = new Map();
    this.analysesMap = new Map();
    this.usersMap = new Map();
    this.paymentsMap = new Map();
    this.initializeMockData();
  }

  private initializeMockData() {
    const projectsList: Array<InsertProject & { id: string }> = [
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
        description: "Conteúdo exclusivo para melhorar sua gameplay",
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
        title: "Minhas Configurações",
        description: "HUD, Sensibilidade e Configurações Gerais",
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

    projectsList.forEach(p => {
      this.projects.set(p.id, {
        ...p,
        imageUrl: p.imageUrl ?? null,
        externalUrl: p.externalUrl ?? null,
        featured: p.featured ?? false,
        order: p.order ?? "0"
      });
    });

    // Mock Video & Analysis
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
      createdAt: new Date(),
      updatedAt: new Date(),
      fileSize: null,
      duration: null
    });

    this.analysesMap.set(mockVideoId, {
      id: 888,
      videoId: mockVideoId,
      analystId: 1,
      overallRating: 5,
      summary: "Ótima play",
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      feedbackVideoUrl: null,
      recommendedVideoUrl: null,
      teaserText: "Play incrível"
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) =>
      (a.order || "0").localeCompare(b.order || "0")
    );
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(p => p.category === category)
      .sort((a, b) => (a.order || "0").localeCompare(b.order || "0"));
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      imageUrl: insertProject.imageUrl || null,
      externalUrl: insertProject.externalUrl || null,
      featured: insertProject.featured ?? false,
      order: insertProject.order || "0",
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;

    const updated: Project = { ...project, ...updates };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id);
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.usersMap.get(id);
  }

  async getUserByOpenId(openId: string): Promise<User | undefined> {
    return Array.from(this.usersMap.values()).find(u => u.openId === openId);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.usersMap.values()).find(u => u.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.usersMap.size + 1;
    const user: User = {
      ...insertUser,
      id,
      name: insertUser.name ?? null,
      openId: insertUser.openId ?? null,
      password: insertUser.password ?? null,
      loginMethod: insertUser.loginMethod ?? null,
      role: insertUser.role ?? "user",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    };
    this.usersMap.set(id, user);
    return user;
  }

  async updateUserRole(userId: number, role: string): Promise<User | undefined> {
    const user = this.usersMap.get(userId);
    if (user) {
      user.role = role;
      user.updatedAt = new Date();
    }
    return user;
  }

  // About Content
  async getAboutContent(): Promise<AboutContent | undefined> {
    return this.aboutContent;
  }

  async updateAboutContent(insertContent: InsertAboutContent): Promise<AboutContent> {
    const id = this.aboutContent?.id || randomUUID();
    const content: AboutContent = {
      ...insertContent,
      id,
      lastUpdated: new Date(),
    };
    this.aboutContent = content;
    return content;
  }

  // Weapon Likes
  async getAllWeaponLikes(): Promise<WeaponLike[]> {
    return Array.from(this.weaponLikesMap.entries()).map(([weaponId, likes]) => ({
      weaponId,
      likes: likes.toString()
    }));
  }

  async getWeaponLikes(weaponId: string): Promise<number> {
    return Array.from(this.weaponLikesMap.values())
      .filter(l => l.weaponId === weaponId).length;
  }

  async incrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number> {
    const key = `${weaponId}:${fingerprint}`;
    if (!this.weaponLikesMap.has(key)) {
      this.weaponLikesMap.set(key, { weaponId, fingerprint });
    }
    return this.getWeaponLikes(weaponId);
  }

  async decrementWeaponLikes(weaponId: string, fingerprint: string): Promise<number> {
    const key = `${weaponId}:${fingerprint}`;
    this.weaponLikesMap.delete(key);
    return this.getWeaponLikes(weaponId);
  }

  // Products
  async getProducts(): Promise<Product[]> {
    return Array.from(this.productsMap.values()).sort((a, b) =>
      (a.order || "0").localeCompare(b.order || "0")
    );
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.productsMap.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
      active: insertProduct.active ?? true,
      featured: insertProduct.featured ?? false,
      order: insertProduct.order || "0",
      stripeProductId: null,
      stripePriceId: null,
      imageUrl: insertProduct.imageUrl || null,
    };
    this.productsMap.set(id, product);
    return product;
  }

  async updateProduct(id: string, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const product = this.productsMap.get(id);
    if (!product) return undefined;

    const updated: Product = { ...product, ...updates };
    this.productsMap.set(id, updated);
    return updated;
  }

  async deleteProduct(id: string): Promise<boolean> {
    return this.productsMap.delete(id);
  }

  async createUploadSession(userId: number, title: string, description: string, price: string, videoUrl?: string, allowPublic: boolean = false): Promise<{ paymentId: number, videoId: number }> {
    const paymentId = Math.floor(Math.random() * 10000);
    const videoId = Math.floor(Math.random() * 10000);
    this.paymentsMap.set(paymentId, {
      id: paymentId,
      userId,
      amount: price,
      status: "pending",
      createdAt: new Date(),
      currency: "BRL",
      stripePaymentIntentId: null,
      description: null,
      updatedAt: new Date(),
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
      createdAt: new Date(),
      updatedAt: new Date(),
      fileSize: null,
      duration: null
    });
    return { paymentId, videoId };
  }

  async confirmPayment(paymentId: number): Promise<void> {
    const p = this.paymentsMap.get(paymentId);
    if (p) p.status = "succeeded";
    const v = Array.from(this.videosMap.values()).find(v => v.paymentId === paymentId);
    if (v) v.status = "uploaded";
  }

  async updateVideoPath(videoId: number, filePath: string): Promise<void> {
    const v = this.videosMap.get(videoId);
    if (v) {
      v.s3Key = filePath;
      v.s3Url = filePath;
      v.status = "uploaded";
    }
  }

  async getPendingPayments(): Promise<(Payment & { video: Video })[]> {
    return Array.from(this.paymentsMap.values())
      .filter(p => p.status === "pending")
      .map(p => ({ ...p, video: Array.from(this.videosMap.values()).find(v => v.paymentId === p.id)! }));
  }

  async getPendingVideos(): Promise<Video[]> {
    return Array.from(this.videosMap.values()).filter(v => v.status === "uploaded");
  }

  async getUserVideos(userId: number): Promise<Video[]> {
    return Array.from(this.videosMap.values()).filter(v => v.clientId === userId);
  }

  async getVideo(videoId: number): Promise<Video | undefined> {
    return this.videosMap.get(videoId);
  }

  async submitAnalysis(insertAnalysis: InsertAnalysis): Promise<Analysis> {
    const id = Math.floor(Math.random() * 10000);
    const analysis: Analysis = {
      ...insertAnalysis,
      id,
      feedbackVideoUrl: insertAnalysis.feedbackVideoUrl ?? null,
      recommendedVideoUrl: insertAnalysis.recommendedVideoUrl ?? null,
      teaserText: insertAnalysis.teaserText ?? null,
      isPublic: insertAnalysis.isPublic ?? false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.analysesMap.set(insertAnalysis.videoId, analysis);
    return analysis;
  }

  async getAnalysisByVideoId(videoId: number): Promise<Analysis | undefined> {
    return this.analysesMap.get(videoId);
  }

  async getPublicAnalyses(): Promise<(Analysis & { video: Video })[]> {
    return Array.from(this.analysesMap.values())
      .filter(a => a.isPublic)
      .map(a => ({ ...a, video: this.videosMap.get(a.videoId)! }));
  }

  async createManualAnalysis(data: any): Promise<Analysis> {
    const vid = Math.floor(Math.random() * 10000);
    const aid = Math.floor(Math.random() * 10000);
    this.videosMap.set(vid, { id: vid, title: data.title, description: data.description, s3Url: data.videoUrl, status: "completed", allowPublic: true, clientId: data.analystId, paymentId: 0, s3Key: "manual", createdAt: new Date(), updatedAt: new Date(), fileSize: null, duration: null });
    const analysis = { id: aid, videoId: vid, analystId: data.analystId, overallRating: data.rating, summary: data.summary, teaserText: data.teaserText, isPublic: true, createdAt: new Date(), updatedAt: new Date(), feedbackVideoUrl: data.feedbackVideoUrl, recommendedVideoUrl: null };
    this.analysesMap.set(vid, analysis);
    return analysis;
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    const a = Array.from(this.analysesMap.values()).find(x => x.id === id);
    if (!a) return false;
    this.analysesMap.delete(a.videoId);
    this.videosMap.delete(a.videoId);
    return true;
  }

  // Analytics (Dummy for MemStorage)
  async logVisit(_visit: InsertAnalyticsVisit): Promise<void> {
    return;
  }

  async getAnalyticsStats(_days: number): Promise<any> {
    return { total: 0, paths: [], daily: [] };
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
