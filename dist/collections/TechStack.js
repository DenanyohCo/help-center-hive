"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechStack = void 0;
exports.TechStack = {
    slug: "tech-stack",
    admin: {
        useAsTitle: "name",
    },
    access: {
        read: function () { return true; },
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
};
