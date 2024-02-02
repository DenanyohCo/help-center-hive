import { Collection, CollectionConfig } from "payload/types";

export const Sites: CollectionConfig = {
    slug: "sites",
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "url",
            label: "URL",
            type: "text",
            required: true,
        },
        {
            name: "headline",
            label: "Headline",
            type: "text",
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "category",
            label: "Category",
            type: "relationship",
            relationTo: "category",
        },
        {
            name: "tech_stack",
            label: "Tech Stack",
            type: "relationship",
            relationTo: "tech-stack",
        },
        {
            name: "is_featured",
            label: "Is Featured",
            type: "checkbox",
        },
    ],
} as CollectionConfig;
