import File from "../model/file.js";
import User from "../model/user.js";

const upload = async (req, res) => {
  // req.file came from multer middleware
  const { username, email, password } = req.body;
  try {
    const newUpload = await File.create(req.file);
    const newUser = await User.create({
      username,
      email,
      password,
      profilePictureUrl: newUpload.path,
    });
    res.status(200).json({
      message: "register with profile picture successful",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default upload;
