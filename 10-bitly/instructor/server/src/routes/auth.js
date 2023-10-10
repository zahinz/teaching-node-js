import { Router } from "express";
import register from "../controllers/auth/register";
import login from "../controllers/auth/login";

const authRoutes = Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export default authRoutes;
