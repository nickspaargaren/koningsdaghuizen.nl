import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: {
        include: '*.md',
        cwd: 'src/content',
      },
      schema: z.object({
        title: z.string(),
        intro: z.string().optional(),
        description: z.string(),
      }),
    }),
    program: defineCollection({
      type: 'page',
      source: {
        include: 'program/**/*.yml',
        cwd: 'src/content',
      },
      schema: z.object({
        events: z.array(
          z.object({
            time: z.string(),
            description: z.string(),
          }),
        ),
      }),
    }),
  },
})
