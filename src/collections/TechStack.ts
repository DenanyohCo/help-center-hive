import { Collection, CollectionConfig } from "payload/types";

export const TechStack: CollectionConfig = {
    slug: "tech-stack",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
        create: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
        update: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
        delete: ({ req }) => req.user.email === process.env.ADMIN_EMAIL,
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
        },
    ],
} as CollectionConfig;
