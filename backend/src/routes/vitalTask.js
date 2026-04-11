import { Router } from "express";
import { resolveIsVital } from "../utils/middlewares.js";
import { createTodo, getVitalTodo } from "../controllers/todoController.js";

const router = Router();

router.post("/api/vitalTask", resolveIsVital, createTodo)
router.get("/api/vitalTask", getVitalTodo)

export default router;