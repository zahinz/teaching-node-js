import { Router } from "express";
import publicController from "../controllers/public.js";
import authController from "../controllers/auth.js";
import upload from "../controllers/upload.js";
import uploadPublic from "../middleware/upload.js";

const apiRoutes = Router();

apiRoutes.get("/", publicController.get);
apiRoutes.post("/", publicController.post);

apiRoutes.post("/register", authController.register);
apiRoutes.post("/login", authController.login);

apiRoutes.post("/upload", uploadPublic.single("profilePicture"), upload);

export default apiRoutes;
