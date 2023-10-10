import Slug from "../model/slug";
import User from "../model/user";
import { postgresConnection } from "./connection";

const dbInit = async () => {
  try {
    await postgresConnection.authenticate();
    console.log("Connection has been established successfully.");
    await User.sync({ alter: true });
    await Slug.sync({ alter: true });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbInit;
