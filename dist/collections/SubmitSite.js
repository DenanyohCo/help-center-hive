"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitSite = void 0;
exports.SubmitSite = {
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
};
