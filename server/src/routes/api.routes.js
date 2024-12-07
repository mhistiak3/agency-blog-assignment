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
import {
  createMemberController,
  deleteMemberController,
  readMembersController,
  updateMemberController,
} from "../controllers/member.controller.js";
import {
  createServiceController,
  deleteServiceController,
  readServicesController,
  updateServiceController,
} from "../controllers/service.controller.js";
const router = express.Router();

// login
router.post("/login", loginController);
// public
router.get("/blogs", readBlogsController);
router.get("/services", readServicesController);
router.get("/members", readMembersController);

// admin

router.use(isAdminAuthenticated);
router.get("/admin", (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "You are logged in as admin" });
});
router
  .route("/admin/blogs")
  .post(imageUpload, createBlogController)
  .delete(deleteBlogController)
  .put(imageUpload, updateBlogController);

router
  .route("/admin/members")
  .post(imageUpload, createMemberController)
  .delete(deleteMemberController)
  .put(imageUpload, updateMemberController);

router
  .route("/admin/services")
  .post(imageUpload, createServiceController)
  .delete(deleteServiceController)
  .put(imageUpload, updateServiceController);

router.get("/admin/logout", (req, res) => {
  res
    .clearCookie("agency-blog-token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    .json({
      message: "Logout success",
    });
});
export default router;
