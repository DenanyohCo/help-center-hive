"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    access: {
        create: function () { return true; },
        read: function () { return true; },
    },
    admin: {
        useAsTitle: "alt",
    },
    upload: true,
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
};
