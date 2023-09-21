import { query } from "../database/connection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const reqBody = req.body;

    // hash password
    console.time("register");
    const salt = bcrypt.genSaltSync(10);
    const hashedValue = bcrypt.hashSync(reqBody.password, salt);
    // console.log(salt, "SALT VALUE", reqBody.username);
    // console.log(hashedValue, "HASHED VALUE", reqBody.username);
    console.timeEnd("register");

    await query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)",
      [reqBody.email, reqBody.username, hashedValue]
    );
    res.status(200).json({
      message: "New user created",
      data: { email: reqBody.email, username: reqBody.username },
    });
  } catch (error) {
    //   send res status 500 - server error
    res.status(500).json({ message: "Server error", error: error });
  }
};

const login = async (req, res) => {
  try {
    const reqBody = req.body;
    //   select email from database
    const resDb = await query("SELECT * FROM users WHERE email = $1", [
      reqBody.email,
    ]);

    // No user return
    if (resDb.rowCount === 0) {
      res.status(401).json({ message: "Unauthorised" });
      return;
    }

    // always return one user
    const userData = resDb.rows[0];

    // compare hash
    console.log(reqBody.password, userData.password);

    console.time("login");
    const isMatch = await bcrypt.compare(reqBody.password, userData.password);

    console.timeEnd("login");

    // create access token
    const token = jwt.sign({ id: userData.id }, "SECRET-KEY-I-PUT-MYSELF");

    // compare password from body with database
    if (isMatch) {
      res
        .status(200)
        .json({ message: "User logged in", data: userData, token: token });
      return;
    } else {
      res.status(401).json({ message: "Unauthorised" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
    return;
  }
};

// continue  thursday class 21/9/2023
// auth token
const publicController = (req, res) => {
  res.status(200).json({ message: "Public route" });
};
const protectedController = (req, res) => {
  res
    .status(200)
    // req.user came from middleware assignation
    .json({ message: "Protected controller route", data: { user: req.user } });
};

const authController = {
  register,
  login,
  publicController,
  protectedController,
};

export default authController;
