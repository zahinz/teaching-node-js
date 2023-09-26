import User from "../model/user.js";

const register = async (req, res) => {
  // OBJECT DESTRUCTURING
  const { email, username, password } = req.body;
  try {
    const newUser = await User.create({
      email: email,
      username: username,
      password: password,
    });
    res
      .status(200)
      .json({ message: "new user created", data: newUser.dataValues });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // query user based on email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    //   if user not found return 404
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }

    //   compare password
    if (password === user.password) {
      res.status(200).json({ message: "login successful", data: user });
    } else {
      res.status(403).json({ message: "login unsuccessful" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error });
  }
};

const authController = { register, login };

export default authController;
