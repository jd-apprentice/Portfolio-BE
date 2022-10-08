import { Router } from "express";
const infoRoutes = Router();
import InfoController from "../controllers/info-controller";

infoRoutes
  .post("/", InfoController.createInfo)
  .get("/", InfoController.getInfo)
  .put("/:id", InfoController.updateInfo);

export default infoRoutes;
