import { Router } from "express";

const router = Router();

router.get("/api/auth/register", (req, res) => {
    res.send("Register");
})

export default router;