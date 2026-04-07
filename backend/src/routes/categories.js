import { Router } from "express";

const router = Router();

router.get("/api/categories", (req, res) => {
    res.send("Task Categories");
})

export default router;