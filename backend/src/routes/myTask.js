import { Router } from "express";

const router = Router();

router.get("/api/my-task", (req, res) => {
    res.send("My Task");
})

export default router;