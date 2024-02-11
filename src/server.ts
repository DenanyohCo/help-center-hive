import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                cms.logger.info(`payload is at URL ${cms.getAdminURL()}`);
            },
        },
    });
    app.get("/api/sites", async (req, res) => {
        const sites = await payload.find({
            collection: "sites",
            depth: 1,
            limit: 100,
        });
        res.json(sites);
    });
    app.get("/api/categories", async (req, res) => {
        const categories = await payload.find({
            collection: "category",
            depth: 1,
            limit: 100,
        });
        res.json(categories);
    });
    app.use((req, res) => nextHandler(req, res));

    nextApp.prepare().then(() => {
        payload.logger.info(`Next app started`);
        app.listen(PORT, () => {
            payload.logger.info(
                `Next URL ${process.env.NEXT_PUBLIC_SERVER_URL}`
            );
        });
    });
};

start();
