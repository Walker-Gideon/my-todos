const { Router } = require("express");

import helpRouter from "./help";
import myTaskRouter from "./myTask";
import initialRouter from "./inital";
import settingsRouter from "./settings";
import vitalTaskRouter from "./vitalTask";
import dashboardRouter from "./dashboard";
import taskCategoriesRouter from "./taskCategories";

const router = Router();

router.use(initialRouter);
router.use(dashboardRouter);
router.use(vitalTaskRouter);
router.use(myTaskRouter);
router.use(taskCategoriesRouter);
router.use(settingsRouter);
router.use(helpRouter);

export default router;