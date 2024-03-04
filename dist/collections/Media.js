"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    admin: {
        useAsTitle: "alt",
    },
    access: {
        read: function () { return true; },
        create: function (_a) {
            var req = _a.req;
            return req.user.email === process.env.ADMIN_EMAIL;
        },
        update: function (_a) {
            var req = _a.req;
            return req.user.email === process.env.ADMIN_EMAIL;
        },
        delete: function (_a) {
            var req = _a.req;
            return req.user.email === process.env.ADMIN_EMAIL;
        },
    },
    upload: {
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
