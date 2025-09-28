import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Project routes
  app.get("/api/projects", async (req, res) => {
    try {
      const categorySchema = z.object({
        category: z.enum(["Shutters", "Blinds", "Roller", "Venetian"]).optional(),
      });
      
      const { category } = categorySchema.parse(req.query);
      
      const projects = await storage.listProjects(category ? { category } : undefined);
      res.json(projects);
    } catch (error) {
      res.status(400).json({ error: "Invalid parameters" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const paramsSchema = z.object({
        id: z.string().min(1),
      });
      
      const { id } = paramsSchema.parse(req.params);
      
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(400).json({ error: "Invalid project ID" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
