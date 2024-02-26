import { Collection, CollectionConfig } from "payload/types";
export const ContactForm: CollectionConfig = {
    slug: 'contact-form',
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
            name: 'message',
            type: 'textarea',
            required: true,
        },
    ],
} as CollectionConfig;
