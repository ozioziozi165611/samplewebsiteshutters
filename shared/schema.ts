import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  category: text("category").notNull(), // 'Shutters' | 'Blinds' | 'Roller' | 'Venetian'
  location: text("location"),
  description: text("description").notNull(),
  coverImage: text("cover_image").notNull(),
  images: jsonb("images").$type<string[]>().notNull(),
  tags: jsonb("tags").$type<string[]>(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true }).extend({
  category: z.enum(["Shutters", "Blinds", "Roller", "Venetian"]),
  images: z.array(z.string()).min(1, "At least one image is required"),
});

export const selectProjectSchema = createSelectSchema(projects);

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
