import express from "express";
import getRoot from "../controllers/root/getRoot";
import postRoot from "../controllers/root/postRoot";
import authRoutes from "./auth";
import linkRoutes from "./link";
import redirect from "../controllers/redirection";

const root = express.Router();

root.get("/", getRoot);
root.post("/", postRoot);
root.use("/auth", authRoutes);
root.use("/link", linkRoutes);
root.get("/:shortUrl", redirect);

export default root;
