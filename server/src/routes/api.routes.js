import express from "express";
import { loginController } from "../controllers/user.controller.js";
import { isAdminAuthenticated } from "../middleware/auth.middleware.js";
const router = express.Router();

// login
router.post("/login", loginController);
router.use(isAdminAuthenticated)

export default router;
