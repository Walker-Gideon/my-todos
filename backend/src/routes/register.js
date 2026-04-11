import { Router } from "express";
import { registerUser } from "../controllers/userController.js";

const router = Router();

router.post("/api/auth/register", registerUser)

export default router;