import {
  type Project,
  type InsertProject,
  type Contact,
  type InsertContact,
  type AboutContent,
  type InsertAboutContent
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, updates: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;

  // About Content
  getAboutContent(): Promise<AboutContent | undefined>;
  updateAboutContent(content: InsertAboutContent): Promise<AboutContent>;
}

export class MemStorage implements IStorage {
  private projects: Map<string, Project>;
  private contacts: Map<string, Contact>;
  private aboutContent: AboutContent | undefined;

  constructor() {
    this.projects = new Map();
    this.contacts = new Map();
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
            { label: "YouTube", url: "https://youtube.com/playlist?list=PLNjPit_9myAFBhDzh635QGPgzukbXRYLg&si=Yiq6MVgx8GJG0Fq8" }
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

  // Contacts
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Private method - not exposed in IStorage interface
  // Only for future admin use
  private async getContactsInternal(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) =>
      b.createdAt.getTime() - a.createdAt.getTime()
    );
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
}

export const storage = new MemStorage();
