"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    upload: {
        // disableLocalStorage: true,
        staticURL: "/media",
        staticDir: "media",
        mimeTypes: ["image/*"],
    },
    fields: [
        {
            name: "alt",
            type: "text",
        },
    ],
};
