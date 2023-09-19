import pkg from "pg";
import users from "../model/user.model.js";
const { Pool } = pkg;

const config = {
  host: "db.xrnbhmvnqsnmejaquois.supabase.co",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "PNl3KtPbUQcSWFZM",
};

const pool = new Pool(config);

export const dbInit = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected", result.rows[0].now);
    await users();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export const query = async (text, params) => {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  console.log("executed query", { text, duration, rows: res.rowCount });
  return res;
};
