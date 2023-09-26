import { Sequelize } from "sequelize";

// 1# connection string
// const postgresConnection = new Sequelize(
//   "postgresql://postgres:i8Rs6gIBhupLX7qg@db.xrnbhmvnqsnmejaquois.supabase.co:5432/postgres"
// );

// 2# config
export const postgresConnection = new Sequelize({
  dialect: "postgres",
  host: "db.xrnbhmvnqsnmejaquois.supabase.co",
  username: "postgres",
  password: "i8Rs6gIBhupLX7qg",
  port: 5432,
  database: "postgres",
});
