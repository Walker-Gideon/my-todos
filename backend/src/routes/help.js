const { Router } = require("express");

const router = Router();

router.get("/api/help", (req, res) => {
    res.send("Help");
})

export default router;