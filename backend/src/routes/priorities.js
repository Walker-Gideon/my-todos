import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getPriorities, createPriority, updatePriority, deletePriority } from "../controllers/priorityController.js";

const router = Router();

router.get("/api/priorities", protect, getPriorities);
router.post("/api/priorities", protect, createPriority);
router.put("/api/priorities/:id", protect, updatePriority);
router.delete("/api/priorities/:id", protect, deletePriority);

export default router;
