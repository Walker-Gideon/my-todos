import { Router } from "express";
import { createTodo, getTodo } from "../controllers/toDoControllers.js";

const router = Router();

router.post("/api/vitalTask", createTodo)
router.get("/api/vitalTask", getTodo)

export default router;