import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'kitchen-organization',
      'pantry-fridge',
      'small-apartment-storage',
      'bathroom-organization',
      'desk-entryway',
    ]),
    primaryKeyword: z.string(),
    secondaryKeywords: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
    affiliateContent: z.boolean().default(false),
    relatedPosts: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
