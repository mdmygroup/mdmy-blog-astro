import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // Explicitly specify the collection type
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    alt: z.string().optional(),
    author: z.string().default('MDMY Team'),
    tags: z.array(z.string()).default(['general']),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};