import { Router } from "express";
import { call,node } from "../controllers/flow.controller";

class FlowRoutes {
  router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    this.router.get("/", call);
    this.router.get("/node", node);
  }
}

export default new FlowRoutes().router;