import {
  type Project,
  type InsertProject,
  type AboutContent,
  type InsertAboutContent,
  type WeaponLike,
  type Product,
  type InsertProduct,
  weaponLikes,
  projects,
  aboutContent,
  products,
  payments,
  videos,
  analyses,
  analysisComments,
  galleryItems,
  type Analysis,
  type InsertAnalysis,
  type Video,
  type InsertVideo,
  type Payment,
  type User,
  type InsertUser,
  users
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";
import path from "path";
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
  incrementWeaponLikes(weaponId: string): Promise<number>;
  decrementWeaponLikes(weaponId: string): Promise<number>;

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
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(projects.order);
  }

  async getProject(id: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async getProjectsByCategory(category: string): Promise<Project[]> {
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
    const [record] = await db.select().from(weaponLikes).where(eq(weaponLikes.weaponId, weaponId));
    return record ? parseInt(record.likes) : 0;
  }

  async incrementWeaponLikes(weaponId: string): Promise<number> {
    const current = await this.getWeaponLikes(weaponId);
    const newVal = (current + 1).toString();
    const [record] = await db.insert(weaponLikes)
      .values({ weaponId, likes: newVal })
      .onConflictDoUpdate({
        target: weaponLikes.weaponId,
        set: { likes: newVal }
      })
      .returning();
    return parseInt(record.likes);
  }

  async decrementWeaponLikes(weaponId: string): Promise<number> {
    const current = await this.getWeaponLikes(weaponId);
    const newVal = Math.max(0, current - 1).toString();
    const [record] = await db.insert(weaponLikes)
      .values({ weaponId, likes: newVal })
      .onConflictDoUpdate({
        target: weaponLikes.weaponId,
        set: { likes: newVal }
      })
      .returning();
    return parseInt(record.likes);
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
    // 1. Create Payment Record (Starting as "pending")
    const [payment] = await db.insert(payments).values({
      userId,
      amount: price.replace(/[^\d.]/g, ""), // Extract numeric price
      stripePaymentIntentId: `pend_${Date.now()}_${Math.random().toString(36).substring(7)}`,
      status: "pending",
      description: `Pedido de análise: ${title}`,
    }).returning();

    // 2. Create Video Record (Starting as "awaiting_payment")
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
    const results = await db.select({
      payment: payments,
      video: videos
    })
      .from(payments)
      .innerJoin(videos, eq(videos.paymentId, payments.id))
      .where(eq(payments.status, "pending"));

    return results.map((r: any) => ({ ...r.payment, video: r.video }));
  }

  async confirmPayment(paymentId: number): Promise<void> {
    // 1. Update Payment
    await db.update(payments)
      .set({ status: "succeeded", updatedAt: new Date() })
      .where(eq(payments.id, paymentId));

    // 2. Update Video to 'uploaded' (makes it appear in Analyst Dashboard)
    await db.update(videos)
      .set({ status: "uploaded", updatedAt: new Date() })
      .where(eq(videos.paymentId, paymentId));

    // 3. Trigger Notifications
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
      console.error("Erro ao processar notificações de pagamento:", err);
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

  // Community / Analyst
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
    // 1. Create or Update Analysis
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

    // 3. Update video status
    await db.update(videos).set({ status: "completed" }).where(eq(videos.id, analysis.videoId));

    // 4. Trigger Notification to Client
    try {
      const [video] = await db.select().from(videos).where(eq(videos.id, analysis.videoId));
      if (video) {
        const [user] = await db.select().from(users).where(eq(users.id, video.clientId));
        if (user && user.email) {
          await sendAnalysisFinishedToClient(user.email, user.name || "Guerreiro", video.title);
        }
      }
    } catch (err) {
      console.error("Erro ao processar notificação de análise concluída:", err);
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

    return results.map((r: { analysis: Analysis; video: Video }) => ({ ...r.analysis, video: r.video }));
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
    // 1. Criar vídeo de exemplo
    const [video] = await db.insert(videos).values({
      clientId: data.analystId,
      paymentId: 0,
      title: data.title,
      description: data.description,
      s3Key: "manual_post",
      s3Url: data.videoUrl,
      status: "completed",
      allowPublic: true,
    }).returning();

    // 2. Criar análise vinculada
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
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    const [analysis] = await db.select().from(analyses).where(eq(analyses.id, id));
    if (!analysis) return false;

    await db.delete(analyses).where(eq(analyses.id, id));
    await db.delete(videos).where(eq(videos.id, analysis.videoId));
    return true;
  }
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private aboutContent: AboutContent | undefined;
  private weaponLikesMap = new Map<string, number>();
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
    const projects: Array<InsertProject & { id: string }> = [
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

    projects.forEach(project => {
      this.projects.set(project.id, {
        ...project,
        imageUrl: project.imageUrl ?? null,
        externalUrl: project.externalUrl ?? null,
        featured: project.featured ?? false,
        order: project.order ?? "0"
      });
    });

    // Mock Video & Analysis for Gallery
    const mockVideoId = 999;
    const mockVideo: Video = {
      id: mockVideoId,
      paymentId: 123,
      clientId: 1,
      title: "Clutch 1v4 SND - Standoff",
      description: "Tentei manter a calma mas senti que errei no pre-aim.",
      s3Key: "external_url",
      s3Url: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      fileSize: null,
      duration: null,
      status: "completed",
      allowPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.videosMap.set(mockVideoId, mockVideo);

    const mockAnalysis: Analysis = {
      id: 888,
      videoId: mockVideoId,
      analystId: 1,
      overallRating: 5,
      summary: "Uma análise profunda sobre a calma sob pressão. Note como o posicionamento do inimigo era previsível através de sons residuais...",
      feedbackVideoUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
      recommendedVideoUrl: "https://tiktok.com/@slxcodm_",
      teaserText: "Nesta análise, revelamos o segredo psicanalítico por trás do clutch perfeito. O erro não estava no dedo, mas na antecipação do medo do adversário...",
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.analysesMap.set(mockVideoId, mockAnalysis);
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
      order: insertProject.order || "0"
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
      id,
      name: insertUser.name ?? null,
      openId: insertUser.openId ?? null,
      password: insertUser.password ?? null,
      email: insertUser.email,
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
    return this.weaponLikesMap.get(weaponId) || 0;
  }

  async incrementWeaponLikes(weaponId: string): Promise<number> {
    const current = await this.getWeaponLikes(weaponId);
    const newVal = current + 1;
    this.weaponLikesMap.set(weaponId, newVal);
    return newVal;
  }

  async decrementWeaponLikes(weaponId: string): Promise<number> {
    const current = await this.getWeaponLikes(weaponId);
    const newVal = Math.max(0, current - 1);
    this.weaponLikesMap.set(weaponId, newVal);
    return newVal;
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

    const payment: Payment = {
      id: paymentId,
      userId,
      amount: price.replace(/[^\d.]/g, ""),
      stripePaymentIntentId: `pend_mem_${Date.now()}`,
      status: "pending",
      description: `Pedido de análise: ${title}`,
      currency: "BRL",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.paymentsMap.set(paymentId, payment);

    this.videosMap.set(videoId, {
      id: videoId,
      paymentId,
      clientId: userId,
      title,
      description,
      s3Key: videoUrl ? "external_url" : "pending_upload",
      s3Url: videoUrl || "pending_upload",
      fileSize: null,
      duration: null,
      status: "awaiting_payment",
      allowPublic: allowPublic,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    console.log(`[MemStorage] Created session - Payment: ${paymentId}, Video: ${videoId}`);
    return { paymentId, videoId };
  }

  async getPendingPayments(): Promise<(Payment & { video: Video })[]> {
    const allVideos = Array.from(this.videosMap.values());
    return Array.from(this.paymentsMap.values())
      .filter(p => p.status === "pending")
      .map(p => {
        const video = allVideos.find(v => v.paymentId === p.id);
        return video ? { ...p, video } : null;
      })
      .filter((item): item is (Payment & { video: Video }) => item !== null);
  }

  async confirmPayment(paymentId: number): Promise<void> {
    const payment = this.paymentsMap.get(paymentId);
    if (!payment) return;

    this.paymentsMap.set(paymentId, { ...payment, status: "succeeded", updatedAt: new Date() });

    const video = Array.from(this.videosMap.values()).find(v => v.paymentId === paymentId);
    if (video) {
      this.videosMap.set(video.id, { ...video, status: "uploaded", updatedAt: new Date() });

      // Trigger Notifications
      const user = this.usersMap.get(payment.userId);
      if (user && user.email) {
        sendPaymentConfirmedToClient(user.email, user.name || "Guerreiro");
        sendOrderNotificationToAdmin(paymentId, user.name || user.email);
      }
    }
  }

  async updateVideoPath(videoId: number, filePath: string): Promise<void> {
    const video = this.videosMap.get(videoId);
    if (video) {
      video.s3Key = filePath;
      video.s3Url = filePath;
      video.status = "uploaded";
      video.updatedAt = new Date();
    }
  }

  async getPendingVideos(): Promise<Video[]> {
    return Array.from(this.videosMap.values()).filter(v => v.status === "uploaded");
  }

  async getUserVideos(userId: number): Promise<Video[]> {
    return Array.from(this.videosMap.values())
      .filter(v => v.clientId === userId)
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async getVideo(videoId: number): Promise<Video | undefined> {
    return this.videosMap.get(videoId);
  }

  async submitAnalysis(insertAnalysis: InsertAnalysis): Promise<Analysis> {
    const id = Math.floor(Math.random() * 10000);
    const analysis: Analysis = {
      ...insertAnalysis,
      id,
      overallRating: insertAnalysis.overallRating ?? null,
      summary: insertAnalysis.summary ?? null,
      feedbackVideoUrl: insertAnalysis.feedbackVideoUrl ?? null,
      recommendedVideoUrl: insertAnalysis.recommendedVideoUrl ?? null,
      teaserText: insertAnalysis.teaserText ?? null,
      isPublic: insertAnalysis.isPublic ?? false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.analysesMap.set(analysis.videoId, analysis);

    // Update video status
    const video = this.videosMap.get(analysis.videoId);
    if (video) {
      this.videosMap.set(video.id, { ...video, status: "completed", updatedAt: new Date() });

      // Notification
      const user = this.usersMap.get(video.clientId);
      if (user && user.email) {
        sendAnalysisFinishedToClient(user.email, user.name || "Guerreiro", video.title);
      }
    }

    return analysis;
  }

  async getAnalysisByVideoId(videoId: number): Promise<Analysis | undefined> {
    return this.analysesMap.get(videoId);
  }

  async getPublicAnalyses(): Promise<(Analysis & { video: Video })[]> {
    return Array.from(this.analysesMap.values())
      .filter(a => a.isPublic)
      .map(a => ({
        ...a,
        video: this.videosMap.get(a.videoId)!
      }));
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
    const videoId = Math.floor(Math.random() * 10000);
    const video: Video = {
      id: videoId,
      clientId: data.analystId,
      title: data.title,
      paymentId: 0, // In memory, we use 0 for manual posts instead of null if type is number
      description: data.description,
      s3Key: "manual_post",
      s3Url: data.videoUrl,
      fileSize: null,
      duration: null,
      status: "completed",
      allowPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.videosMap.set(videoId, video);

    const analysisId = Math.floor(Math.random() * 10000);
    const analysis: Analysis = {
      id: analysisId,
      videoId,
      analystId: data.analystId,
      overallRating: data.rating,
      summary: data.summary,
      feedbackVideoUrl: data.feedbackVideoUrl,
      recommendedVideoUrl: null,
      teaserText: data.teaserText,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.analysesMap.set(videoId, analysis);

    return analysis;
  }

  async deleteGalleryItem(id: number): Promise<boolean> {
    let targetAnalysis: Analysis | undefined;
    const items = Array.from(this.analysesMap.values());
    for (const a of items) {
      if (a.id === id) {
        targetAnalysis = a;
        break;
      }
    }
    if (!targetAnalysis) return false;
    this.analysesMap.delete(targetAnalysis.videoId);
    this.videosMap.delete(targetAnalysis.videoId);
    return true;
  }
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
