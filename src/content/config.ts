import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    created: z.coerce.date(),
    modified: z.coerce.date().optional(),
    urlPath: z.string(),
  }),
});

export const collections = { posts };
