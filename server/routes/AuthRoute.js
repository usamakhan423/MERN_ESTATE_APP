import express from "express";
import { GoogleLogin, SignIn, SignUp } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/sign-up", SignUp);
router.post("/sign-in", SignIn);
router.post("/google", GoogleLogin);

export default router;
