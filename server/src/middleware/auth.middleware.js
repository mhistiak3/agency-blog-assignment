import jwt from "jsonwebtoken";
import { ADMIN_USERNAME, JWT_SECRET } from "../config/config.js";

export const isAdminAuthenticated = async (req, res, next) => {
  try {
    let token = req.cookies["agency-blog-token"];
    if (!token) {
      throw new Error("You are not logged in as admin");
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      throw new Error("You are not logged in as admin");
    }
    if (decoded?.username !== ADMIN_USERNAME) {
      throw new Error("You are not logged in as admin");
    }

    next();
  } catch (error) {
    res.status(400).json({ message: error.message,success:false });
  }
};
