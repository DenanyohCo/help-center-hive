import { Collection, CollectionConfig } from "payload/types";

export const TechStack: CollectionConfig = {
    slug: "tech-stack",
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
