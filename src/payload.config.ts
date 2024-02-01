import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import dotenv from "dotenv";
import path from "path";
dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});
export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [],
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
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGO_URL || "",
    }),
    typescript: {
        outputFile: path.resolve(__dirname, "payload-types.ts"),
    },
});
