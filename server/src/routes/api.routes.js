import express from "express";
import { loginController } from "../controllers/user.controller.js";
import { isAdminAuthenticated } from "../middleware/auth.middleware.js";
import {
  createBlogController,
  deleteBlogController,
  readBlogsController,
} from "../controllers/blog.controller.js";
import { imageUpload } from "../middleware/multer.middleware.js";
const router = express.Router();

// login
router.post("/login", loginController);
router.use(isAdminAuthenticated);
router.get("/admin", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "You are logged in as admin" });
});
router.post("/admin/blogs", imageUpload, createBlogController);
router
  .route("/admin/blogs")
  .get(readBlogsController)
  .delete(deleteBlogController);

export default router;
