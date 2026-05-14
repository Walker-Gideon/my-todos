import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getVitalTodo } from "../controllers/todoController.js";

const router = Router();

// This route only handles fetching the Vital Task list
router.get("/api/vitalTask", protect, getVitalTodo);

export default router;