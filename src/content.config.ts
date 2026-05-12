import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Projects content collection using the new Content Layer (Astro 5/6+).
 * Uses the glob loader to fetch markdown files from src/content/projects.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    imageUrl: z.string(),
    featured: z.boolean().default(false),
    impact: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
          description: z.string(),
        })
      )
      .optional(),
    stack: z
      .array(
        z.object({
          name: z.string(),
          icon: z.string(),
        })
      )
      .optional(),
    order: z.number().default(0),
    challenge: z.string().optional(),
    challengePoints: z.array(z.string()).optional(),
    process: z
      .array(
        z.object({
          title: z.string(),
          text: z.string(),
        })
      )
      .optional(),
    toolsApplied: z.array(z.string()).optional(),
  }),
});

/**
 * Experience content collection.
 */
const experience = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/experience" }),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    category: z.string(),
    achievements: z.array(z.string()),
    tools: z.array(z.string()).optional(),
    order: z.number().default(0),
  }),
});

/**
 * Certifications content collection.
 */
const certifications = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/certifications" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

/**
 * Blog content collection.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default("Miguel Damiron"),
    image: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, experience, certifications, blog };
