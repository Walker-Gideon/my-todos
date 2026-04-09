import { Router } from "express";
import { createTodo } from "../controllers/toDoControllers.js";

const router = Router();

router.post("/api/task", createTodo)

export default router;