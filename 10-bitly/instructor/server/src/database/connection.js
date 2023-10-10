import { Sequelize } from "sequelize";
import config from "../config";

// 1# connection string
// const postgresConnection = new Sequelize(
//   "postgresql://postgres:i8Rs6gIBhupLX7qg@db.xrnbhmvnqsnmejaquois.supabase.co:5432/postgres"
// );

// 2# config
export const postgresConnection = new Sequelize({
  dialect: "postgres",
  host: config.postgres.host,
  username: config.postgres.username,
  password: config.postgres.password,
  port: config.postgres.port,
  database: config.postgres.database,
});
