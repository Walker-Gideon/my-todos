import { Router } from "express";

import helpRouter from "./help.js";
import myTaskRouter from "./myTask.js";
import initialRouter from "./inital.js";
import settingsRouter from "./settings.js";
import vitalTaskRouter from "./vitalTask.js";
import dashboardRouter from "./dashboard.js";
import taskCategoriesRouter from "./taskCategories.js";


const router = Router();

router.use(initialRouter);
router.use(dashboardRouter);
router.use(vitalTaskRouter);
router.use(myTaskRouter);
router.use(taskCategoriesRouter);
router.use(settingsRouter);
router.use(helpRouter);

export default router;