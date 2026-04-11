import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { resolveIsVital } from "../middleware/middlewares.js";
import { createTodo, getVitalTodo } from "../controllers/todoController.js";

const router = Router();

router.post("/api/vitalTask", protect, resolveIsVital, createTodo)
router.get("/api/vitalTask", protect, getVitalTodo)

export default router;