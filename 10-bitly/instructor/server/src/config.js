import packageJson from "../package.json";

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
  version: packageJson.version,
  name: packageJson.name,
  description: packageJson.description,

  nodeEnv: process.env["NODE_ENV"] ?? "development",
  port: process.env["PORT"] ?? 3000,
  jwtSecret: process.env["JWT_SECRET"],

  clientOrigins: {
    test: process.env["DEV_ORIGIN"] ?? "*",
    development: process.env["DEV_ORIGIN"] ?? "*",
    production: process.env["PROD_ORIGIN"] ?? "none",
  },

  postgres: {
    host: process.env["PG_HOST"] ?? "localhost",
    port: process.env["PG_PORT"] ?? 5432,
    username: process.env["PG_USERNAME"] ?? "postgres",
    password: process.env["PG_PASSWORD"] ?? "postgres",
    database: process.env["PG_DATABASE"] ?? "postgres",
  },
};

export default config;
