import pkg from "pg";
import todo from "../model/todo.js";
const { Pool } = pkg;

const config = {
  host: "db.pmsryccnpxrsixpvbsym.supabase.co",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "uI6Y5c6mJehay7Ku",
};

const connectionString =
  "postgresql://postgres:uI6Y5c6mJehay7Ku@db.pmsryccnpxrsixpvbsym.supabase.co:5432/postgres";

// const pool = new Pool(config);
export const pool = new Pool({ connectionString });

export const dbInit = async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    await todo();
    console.log("Database connected", result.rows[0].now);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
