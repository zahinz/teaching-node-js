import File from "../model/file.js";
import User from "../model/user.js";
import { postgresConnection } from "./connection.js";

export const dbInit = async () => {
  try {
    await postgresConnection.authenticate();
    console.log("Connection has been established successfully.");
    await User.sync({ alter: true });
    await File.sync({ alter: true });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
