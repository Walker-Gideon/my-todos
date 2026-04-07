import { Router } from "express";

import helpRouter from "./help.js";
import taskRouter from "./task.js";
import loginRouter from "./login.js";
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

router.use(registerRouter);
router.use(loginRouter);
router.use(dashboardRouter);
router.use(taskRouter);
router.use(vitalTaskRouter);
router.use(categoriesRouter);
router.use(settingsRouter);
router.use(helpRouter);

export default router;