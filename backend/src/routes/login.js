import { Router } from "express";

const router = Router();

router.get("/api/auth/login", (req, res) => {
    res.send("Login");
})

export default router;