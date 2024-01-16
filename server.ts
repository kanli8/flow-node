import express, { Application } from "express";
import Server from "./src/index";
import ConfigService from "./src/config/config-service";
import SupabaseListener from "./src/listener/supabase-listener";
import logger from "./src/config/logger";
import morgan from 'morgan';

const app: Application = express();
const server: Server = new Server(app);
const PORT = ConfigService.server.port;
//start supabase listener
SupabaseListener;

app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

const listenSertver = app
  .listen(PORT, "::", function () {
    logger.info(`Server is running on port ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      logger.error("Error: address already in use");
    } else {
      logger.error(err.message);
    }
  });



export default listenSertver;