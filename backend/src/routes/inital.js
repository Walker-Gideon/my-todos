const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "Inital route" });
})

export default router;