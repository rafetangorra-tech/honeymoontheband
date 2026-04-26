import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bios = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/bios' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    slug: z.string(),
    order: z.number(),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: 'song-list.md', base: './content' }),
  schema: z.object({
    title: z.string().optional(),
  }).passthrough(),
});

export const collections = { bios, docs };
