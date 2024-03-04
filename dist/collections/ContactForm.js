"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
exports.ContactForm = {
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
};
