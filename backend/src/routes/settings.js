import { Router } from "express";

const router = Router();

router.get("/api/settings", (req, res) => {
    res.send("Settings");
})

export default router;