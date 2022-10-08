import { Router } from "express";
import infoRoutes from "./info-route";
const Routes = Router();

Routes.use("/info", infoRoutes);

export default Routes;
