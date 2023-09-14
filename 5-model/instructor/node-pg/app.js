import express from "express";
import { dbInit } from "./database/connection.js";
import { getTodo, postTodo, updateTodo } from "./controller/todo.controller.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

dbInit();

app.get("/", getTodo);
app.post("/", postTodo);
app.put("/todo/:id", updateTodo);

app.listen(PORT, () => {
  console.log(`Server is run on port ${PORT}`);
});
