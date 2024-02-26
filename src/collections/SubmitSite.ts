import { Collection, CollectionConfig } from "payload/types";
export const SubmitSite: CollectionConfig = {
    slug: 'submit-site',
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'website_name',
            type: 'text',
            required: true,
        },
        {
            name: 'website_url',
            type: 'text',
            required: true,
        },
        {
            name: 'website_description',
            type: 'textarea',
            required: true,
        },
    ],
} as CollectionConfig;
