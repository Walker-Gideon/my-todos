import { Router } from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getStatuses, createStatus, updateStatus, deleteStatus } from "../controllers/statusController.js";

const router = Router();

router.get("/api/statuses", protect, getStatuses);
router.post("/api/statuses", protect, createStatus);
router.put("/api/statuses/:id", protect, updateStatus);
router.delete("/api/statuses/:id", protect, deleteStatus);

export default router;
