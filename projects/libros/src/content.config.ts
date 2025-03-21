import { defineCollection, z } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        release_date: z.string(),
        author: z.string(),
        img: z.string(),
        description: z.string(),
    })
})

export const collections = { books }