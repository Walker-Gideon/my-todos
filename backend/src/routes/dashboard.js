import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getTodo } from "../controllers/todoController.js";

const router = Router();

router.get("/api/dashboard", protect, getTodo)

export default router;