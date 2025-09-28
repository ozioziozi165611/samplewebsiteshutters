import { type User, type InsertUser, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  listProjects(filter?: { category?: string }): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private projects: Map<string, Project>;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.seedProjects();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async listProjects(filter?: { category?: string }): Promise<Project[]> {
    let projectsList = Array.from(this.projects.values());
    
    if (filter?.category) {
      projectsList = projectsList.filter(p => p.category === filter.category);
    }
    
    return projectsList;
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id, 
      location: insertProject.location ?? null,
      tags: insertProject.tags ? insertProject.tags as string[] : null 
    };
    this.projects.set(id, project);
    return project;
  }

  private seedProjects(): void {
    const seedData: InsertProject[] = [
      {
        title: "Modern Kitchen Transformation",
        category: "Roller",
        location: "Melbourne, VIC",
        description: "Complete kitchen makeover featuring premium roller blinds with blackout fabric for optimal light control and privacy. The clean lines complement the modern aesthetic while providing practical functionality.",
        coverImage: "/attached_assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png",
        images: [
          "/attached_assets/generated_images/Kitchen_with_roller_blinds_935f3f77.png",
          "/attached_assets/stock_images/elegant_room_with_be_a1961cb9.jpg"
        ],
        tags: ["Modern", "Kitchen", "Blackout", "Privacy"]
      },
      {
        title: "Executive Office Plantation Shutters",
        category: "Shutters",
        location: "Sydney, NSW",
        description: "Sophisticated plantation shutters transform this executive office space. The adjustable louvers provide perfect light control while maintaining an elegant, professional appearance.",
        coverImage: "/attached_assets/generated_images/Office_with_plantation_shutters_909ff327.png",
        images: [
          "/attached_assets/generated_images/Office_with_plantation_shutters_909ff327.png",
          "/attached_assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png"
        ],
        tags: ["Professional", "Office", "Plantation", "Elegant"]
      },
      {
        title: "Bedroom Sanctuary with Wooden Blinds",
        category: "Venetian",
        location: "Brisbane, QLD",
        description: "Create the perfect bedroom sanctuary with premium wooden venetian blinds. Natural timber finish adds warmth while providing excellent light control for restful sleep.",
        coverImage: "/attached_assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png",
        images: [
          "/attached_assets/generated_images/Bedroom_with_wooden_blinds_d0fe520e.png",
          "/attached_assets/stock_images/plain_room_with_larg_bfc4eaf3.jpg"
        ],
        tags: ["Bedroom", "Natural", "Wooden", "Venetian"]
      },
      {
        title: "Living Room Plantation Shutters",
        category: "Shutters",
        location: "Perth, WA",
        description: "Transform your living space with custom plantation shutters. These beautiful shutters offer timeless elegance and superior functionality, perfect for entertaining and daily living.",
        coverImage: "/attached_assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png",
        images: [
          "/attached_assets/generated_images/Modern_room_with_plantation_shutters_c4ad6427.png",
          "/attached_assets/generated_images/Product_showcase_collection_6bcf96e8.png"
        ],
        tags: ["Living Room", "Entertainment", "Custom", "Timeless"]
      },
      {
        title: "Complete Home Makeover",
        category: "Blinds",
        location: "Adelaide, SA",
        description: "A stunning before and after transformation showcasing our comprehensive blind installation service. Multiple rooms updated with coordinated window treatments for a cohesive, stylish look.",
        coverImage: "/attached_assets/generated_images/Before_after_shutter_installation_94e72c5d.png",
        images: [
          "/attached_assets/generated_images/Before_after_shutter_installation_94e72c5d.png",
          "/attached_assets/generated_images/Product_showcase_collection_6bcf96e8.png"
        ],
        tags: ["Complete Makeover", "Before After", "Comprehensive", "Coordinated"]
      }
    ];

    // Seed the projects
    seedData.forEach(projectData => {
      const id = randomUUID();
      const project: Project = { 
        ...projectData, 
        id,
        location: projectData.location ?? null,
        tags: projectData.tags ? projectData.tags as string[] : null
      };
      this.projects.set(id, project);
    });
  }
}

export const storage = new MemStorage();
