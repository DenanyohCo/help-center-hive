import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: () => true,
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
