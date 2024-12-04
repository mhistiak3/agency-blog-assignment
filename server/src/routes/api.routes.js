import express from "express";
import { loginController } from "../controllers/user.controller.js";
const router = express.Router();

// login
router.post("/login", loginController);

export default router;
