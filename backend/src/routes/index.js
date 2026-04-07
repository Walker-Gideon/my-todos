import { Router } from "express";

import helpRouter from "./help.js";
import taskRouter from "./task.js";
import settingsRouter from "./settings.js";
import registerRouter from "./regrister.js";
import vitalTaskRouter from "./vitalTask.js";
import dashboardRouter from "./dashboard.js";
import categoriesRouter from "./categories.js";


const router = Router();

/*
router.use(dashboardRouter);
router.use(vitalTaskRouter);
router.use(myTaskRouter);
router.use(categoriesRouter);
router.use(settingsRouter);
router.use(helpRouter);
*/

router.use("/auth/sign-in", registerRouter);
router.use("/dashboard", dashboardRouter);
router.use("/tasks", taskRouter);
router.use("/vital-tasks", vitalTaskRouter);
router.use("/categories", categoriesRouter);
router.use("/settings", settingsRouter);
router.use("/help", helpRouter);

export default router;