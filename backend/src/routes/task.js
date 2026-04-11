import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { resolveIsTask } from "../middleware/middlewares.js";
import { createTodo, getTaskTodo } from "../controllers/todoController.js";

const router = Router();

router.post("/api/task", protect, resolveIsTask, createTodo)
router.get("/api/task", protect, getTaskTodo)

export default router;