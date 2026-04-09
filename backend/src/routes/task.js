import { Router } from "express";
import { createTodo, getTodo } from "../controllers/toDoControllers.js";

const router = Router();

router.post("/api/task", createTodo)
router.get("/api/task", getTodo)

export default router;