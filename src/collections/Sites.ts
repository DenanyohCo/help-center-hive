import { Collection, CollectionConfig } from "payload/types";

export const Sites: CollectionConfig = {
    slug: "sites",
    admin: {
        useAsTitle: "name",
    },
    access: () => true,
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text",
            required: true,
        },
        {
            name: "slug",
            label: "Slug",
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
            name: "heading",
            label: "Heading",
            type: "text",
            required: true,
        },
        {
            name: "description",
            label: "Description",
            type: "textarea",
            required: true,
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
            hasMany: true,
        },
        {
            name: "tech_stack",
            label: "Tech Stack",
            type: "relationship",
            relationTo: "tech-stack",
            hasMany: true,
        },
        {
            name: "is_featured",
            label: "Is Featured",
            type: "checkbox",
        },
    ],
} as CollectionConfig;
