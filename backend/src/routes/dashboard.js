import { Router } from "express";

const router = Router();

router.get("/api/dashboard", (req, res) => {
    res.send("Dashboard");
})

export default router;