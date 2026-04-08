import { Router } from "express";
import { getTodo } from "../controllers/toDoControllers.js";

const router = Router();

router.get("/api/dashboard", getTodo)

export default router;