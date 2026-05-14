import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getTaskTodo } from "../controllers/todoController.js";

const router = Router();

// This route only handles fetching the My Task list
router.get("/api/task", protect, getTaskTodo);

export default router;