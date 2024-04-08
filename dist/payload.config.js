"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var config_1 = require("payload/config");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var Category_1 = require("./collections/Category");
var Sites_1 = require("./collections/Sites");
var TechStack_1 = require("./collections/TechStack");
var Media_1 = require("./collections/Media");
var ContactForm_1 = require("./collections/ContactForm");
var SubmitSite_1 = require("./collections/SubmitSite");
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env"),
});
// const storageAdapter = 
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
    collections: [Sites_1.Sites, Category_1.Category, TechStack_1.TechStack, Media_1.Media, ContactForm_1.ContactForm, SubmitSite_1.SubmitSite],
    routes: {
        admin: "/admin",
    },
    admin: {
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- HelpCenterHive",
            favicon: "/favicon.ico",
            ogImage: "/og-image.png",
        },
    },
    plugins: [
        (0, plugin_seo_1.default)({
            collections: [
                'sites', 'category'
            ],
            uploadsCollection: 'media'
        }),
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                'media': {
                    adapter: (0, s3_1.s3Adapter)({
                        config: {
                            endpoint: process.env.S3_ENDPOINT,
                            credentials: {
                                accessKeyId: (_a = process.env.S3_ACCESS_KEY) !== null && _a !== void 0 ? _a : "",
                                secretAccessKey: (_b = process.env.S3_SECRET_KEY) !== null && _b !== void 0 ? _b : "",
                            },
                            region: (_c = process.env.S3_REGION) !== null && _c !== void 0 ? _c : "",
                        },
                        bucket: (_d = process.env.S3_BUCKET_NAME) !== null && _d !== void 0 ? _d : "",
                    }),
                },
            },
        }),
    ],
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGO_URL || "",
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    }
});
