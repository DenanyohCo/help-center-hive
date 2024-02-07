import { Collection, CollectionConfig } from "payload/types";

export const Category: CollectionConfig = {
    slug: "category",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: () => true,
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
