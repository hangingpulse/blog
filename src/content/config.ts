import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        previewText: z.string(),
        publishDate: z.date(),
        imgHeader: z.string(),
        imgHeaderMobile: z.string(),
        imgNotes: z.string(),
        imgCallToAction: z.string(),
        imgCallToActionHover: z.string(),
        imgCallToActionMobile: z.string(),
    }),
});

const simpleContentCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishDate: z.date(),
        imgHeader: z.string(),
        imgHeaderMobile: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    posts: blogCollection,
    other: simpleContentCollection,
};
