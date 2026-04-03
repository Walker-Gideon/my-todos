const { Router } = require("express");

const router = Router();

router.get("/api/task-categories", (req, res) => {
    res.send("Task Categories");
})

export default router;