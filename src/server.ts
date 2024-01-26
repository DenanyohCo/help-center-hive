import express from "express";
import { getPackedSettings } from "http2";
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
  app.use((req, res) => nextHandler(req, res));
  nextApp.prepare().then(() => {
    payload.logger.info(`Next app started`);
    app.listen(PORT, () => {
      payload.logger.info(`Next URL ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    });
  });
};
start();
