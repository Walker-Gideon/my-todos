import { Router } from "express";
import { getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/api/auth/user-profile", protect, getUserProfile);

export default router;
