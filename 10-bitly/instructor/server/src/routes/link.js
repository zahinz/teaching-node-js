import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import createLink from "../controllers/link/create";
import listAll from "../controllers/link/list";
import viewLink from "../controllers/link/view";
import deleteLink from "../controllers/link/delete";
import updateLink from "../controllers/link/update";

const linkRoutes = Router();

linkRoutes.get("/", isAuthenticated, listAll);
linkRoutes.post("/", isAuthenticated, createLink);
linkRoutes.get("/:id", isAuthenticated, viewLink);
linkRoutes.delete("/:id", isAuthenticated, deleteLink);
linkRoutes.put("/:id", isAuthenticated, updateLink);

export default linkRoutes;
