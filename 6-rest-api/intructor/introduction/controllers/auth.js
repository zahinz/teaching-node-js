import { query } from "../database/connection.js";

const register = async (req, res) => {
  try {
    const reqBody = req.body;
    // hash password
    await query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3)",
      [reqBody.email, reqBody.username, reqBody.password]
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

    const userData = resDb.rows[0];
    // compare hash
    // compare password from body with database
    if (reqBody.password === userData.password) {
      res.status(200).json({ message: "User logged in", data: userData });
    } else {
      res.status(401).json({ message: "Unauthorised" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// continue  thursday class 21/9/2023
// auth token
const publicController = (req, res) => {
  res.status(200).json({ message: "Public route" });
};
const protectedController = (req, res) => {
  const loggedIn = false;
  if (loggedIn) {
    res.status(200).json({ message: "Protected route" });
  } else {
    res.status(401).json({ message: "Unauthorised" });
  }
};

const authController = {
  register,
  login,
  publicController,
  protectedController,
};

export default authController;
