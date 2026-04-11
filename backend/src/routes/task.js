import { Router } from "express";
import { resolveIsTask } from "../utils/middlewares.js";
import { createTodo, getTaskTodo } from "../controllers/todoController.js";

const router = Router();

router.post("/api/task", resolveIsTask, createTodo)
router.get("/api/task", getTaskTodo)

export default router;