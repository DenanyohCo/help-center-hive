import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { Category } from "./collections/Category";
import { Sites } from "./collections/Sites";
import { TechStack } from "./collections/TechStack";
import { Media } from "./collections/Media";
import { ContactForm } from "./collections/ContactForm";
import { SubmitSite } from "./collections/SubmitSite";
import {
    PluginConfig,
    GenerateTitle,
    GenerateDescription,
    GenerateURL
} from '@payloadcms/plugin-seo/types';
import seoPlugin from '@payloadcms/plugin-seo';
import dotenv from "dotenv";
import path from "path";
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

// const storageAdapter = 
export default buildConfig({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "",
    collections: [Sites, Category, TechStack, Media, ContactForm, SubmitSite],
    routes: {
        admin: "/admin",
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- HelpCenterHive",
            favicon: "/favicon.ico",
            ogImage: "/og-image.png",
        },
    },
    plugins: [
        seoPlugin({
            collections: [
                'sites', 'category'
            ],
            uploadsCollection: 'media'
        }),
        cloudStorage({
            collections: {
                'media': {
                    adapter: s3Adapter({
                        config: {
                            endpoint: process.env.S3_ENDPOINT,
                            credentials: {
                                accessKeyId: process.env.S3_ACCESS_KEY ?? "",
                                secretAccessKey: process.env.S3_SECRET_KEY ?? "",
                            },
                            region: process.env.S3_REGION ?? "",
                            
                        },
                        bucket: process.env.S3_BUCKET_NAME ?? "",
                    }),
                },
            },
        }),
    ],
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGO_URL || "",
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    }
});
