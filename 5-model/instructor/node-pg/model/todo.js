import { pool } from "../database/connection.js";

const todo = async () => {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS todos (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, completed BOOLEAN DEFAULT false);"
    );
    console.log("To do table created");
  } catch (error) {
    throw new Error(error);
  }
};

export default todo;
