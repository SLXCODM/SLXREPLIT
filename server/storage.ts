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
  products
} from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;

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
    return await db.select().from(weaponLikes);
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
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private aboutContent: AboutContent | undefined;
  private weaponLikesMap = new Map<string, number>();
  private productsMap: Map<string, Product>;

  constructor() {
    this.projects = new Map();
    this.productsMap = new Map();
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
        externalUrl: "https://youtube.com/playlist?list=PLNjPit_9myAG0C9G8vVwO8oaPrOXyCgls&si=7wFkX0k9K0tX8vF1",
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
        lastUpdated: new Date()
      });
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
      lastUpdated: new Date()
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
}

export const storage = process.env.DATABASE_URL ? new DatabaseStorage() : new MemStorage();
