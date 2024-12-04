import { ADMIN_PASSWORD, ADMIN_USERNAME, JWT_SECRET } from "../config/config.js";
import jwt from "jsonwebtoken";
const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Please fill in all fields");
    }
    if (ADMIN_USERNAME !== username) {
      throw new Error("Invalid username");
    }
    if (ADMIN_PASSWORD !== password) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .cookie("agency-blog-token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 60 * 60 * 1000,
      })
      .json({success:true, message: "Login successful", accessToken: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { loginController };
