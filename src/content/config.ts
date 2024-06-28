import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        previewText: z.string(),
        publishDate: z.date(),
        imgHeading: z.string(),
        imgHeadingMobile: z.string(),
        imgDoodle: z.string(),
        imgDoodleMobile: z.string(),
        imgDate: z.string(),
        imgDateMobile: z.string(),
        imgCallToAction: z.string(),
        imgCallToActionHover: z.string(),
        imgCallToActionMobile: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    posts: blogCollection,
};
