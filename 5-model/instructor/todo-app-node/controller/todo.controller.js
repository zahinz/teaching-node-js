import { query } from "../database/index.js";

export const getAllTodo = async (req, res) => {
  try {
    const data = await query("SELECT * FROM todos");
    const lists = data.rows;
    res.render("pages/index", { lists });
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (req, res) => {
  // insert new todo sql query
  try {
    const todo = req.body.todo;
    await query("INSERT INTO todos (title, completed) VALUES ($1, $2);", [
      todo,
      false,
    ]);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }

  // list add updated data
};
