import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Inital route loading..." });
})

export default router;