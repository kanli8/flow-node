import { Application } from "express";
import homeRoutes from "./home.routes";
import flowRoutes from "./flow.routes";

export default class Routes {
  constructor(app: Application) {
    app.use("/api", homeRoutes);
    // app.use("/flow", flowRoutes);
  } 
}