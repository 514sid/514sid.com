import { defineCollection, z } from 'astro:content'

import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		canonicalURL: z.string().url().optional(),
	}),
})

export const collections = { blog }