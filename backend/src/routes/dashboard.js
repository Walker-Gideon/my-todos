import { Router } from "express";
import { getTodo } from "../controllers/todoController.js";

const router = Router();

router.get("/api/dashboard", getTodo)

export default router;