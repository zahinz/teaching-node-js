import { pool } from "../database/connection.js";

export const getTodo = async (req, res) => {
  try {
    const todo = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    const data = todo.rows;
    res.render("pages/index", { data: data });
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (req, res) => {
  const title = req.body.title;
  try {
    await pool.query("INSERT INTO todos (title, completed) VALUES ($1, $2)", [
      title,
      false,
    ]);
    const todo = await pool.query("SELECT * FROM todos");
    const data = todo.rows;
    console.log(data);

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const completed = req.body.completed;

  try {
    await pool.query("UPDATE todos SET completed = $1 WHERE id = $2", [
      completed,
      todoId,
    ]);

    // Fetch the updated todo list after the update
    const todo = await pool.query("SELECT * FROM todos");
    const data = todo.rows;
    console.log(data);

    res.render("pages/index", { data: data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
