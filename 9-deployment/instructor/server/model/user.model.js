import { query } from "../database/connection.js";

const users = async () => {
  try {
    await query(
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL UNIQUE, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, created_at TIMESTAMP DEFAULT NOW());"
    );
    console.log("users table created");
  } catch (error) {
    throw new Error(error);
  }
};

export default users;
