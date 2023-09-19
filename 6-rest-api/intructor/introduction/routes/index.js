import { Router } from "express";
import publicController from "../controllers/publicRoute.js";

const apiRoutes = Router();

apiRoutes.get("/", publicController.get);
apiRoutes.post("/", publicController.post);

export default apiRoutes;
