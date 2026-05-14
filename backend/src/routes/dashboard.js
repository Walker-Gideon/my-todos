import { Router } from "express";
import { checkSchema } from "express-validator";
import { protect } from "../middleware/authMiddleware.js";
import { getTodo, getCompletedTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todoController.js";
import { createTodoValidationSchema } from "../utils/validationSchema.js";

const router = Router();

// Fetching lists
router.get("/api/dashboard", protect, getTodo);
router.get("/api/completed", protect, getCompletedTodos);

// Actions (Create, Update, Delete)
router.post("/api/task", protect, checkSchema(createTodoValidationSchema), createTodo);
router.put("/api/task/:id", protect, updateTodo);
router.delete("/api/task/:id", protect, deleteTodo);

export default router;