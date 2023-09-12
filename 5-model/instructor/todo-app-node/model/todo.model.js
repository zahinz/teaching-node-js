import { query } from "../database/index.js";

const todoModel = async () => {
  try {
    await query(
      "CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, completed BOOLEAN DEFAULT false);"
    );
    console.log("todos table created");
  } catch (error) {
    console.log("failed create todos table");
  }
};

export default todoModel;
