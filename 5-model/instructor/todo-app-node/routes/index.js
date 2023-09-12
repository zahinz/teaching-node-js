import { Router } from "express";
import { getAllTodo, postTodo } from "../controller/todo.controller.js";

const appRoutes = Router();

appRoutes.get("/", getAllTodo);
appRoutes.post("/", postTodo);

export default appRoutes;
