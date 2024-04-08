import { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: "media",
    access: {
        create: () => true,
        read: () => true,
    },
    admin: {
        useAsTitle: "alt",
    },
    upload: true,
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],

};
