import { Router } from "express";

const router = Router();

router.get("/api/vital-task", (req, res) => {
    res.send("Vital Task");
})

export default router;