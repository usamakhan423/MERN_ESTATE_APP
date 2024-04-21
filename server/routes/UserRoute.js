import express from "express";
import SignIn from "../controllers/UserController.js";

const router = express.Router();

router.get("/test", SignIn);

export default router;
