import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true,
        // create: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
        // update: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
        // delete: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
    },
    upload: {
        staticURL: "/media",
        staticDir: "media",
        mimeTypes: ["image/*"],
    },
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
};
