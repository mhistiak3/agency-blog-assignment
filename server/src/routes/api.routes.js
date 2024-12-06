import express from "express";
import { loginController } from "../controllers/user.controller.js";
import { isAdminAuthenticated } from "../middleware/auth.middleware.js";
import {
  createBlogController,
  deleteBlogController,
  readBlogsController,
  updateBlogController,
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
router
  .route("/admin/blogs")
  .get(readBlogsController)
  .post(imageUpload, createBlogController)
  .delete(deleteBlogController)
  .put(imageUpload, updateBlogController);

  

export default router;
