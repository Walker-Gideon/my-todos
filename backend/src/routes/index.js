import { Router } from "express";

import helpRouter from "./help.js";
import taskRouter from "./task.js";
import loginRouter from "./login.js";
import settingsRouter from "./settings.js";
import registerRouter from "./register.js";
import statusesRouter from "./statuses.js";
import vitalTaskRouter from "./vitalTask.js";
import dashboardRouter from "./dashboard.js";
import categoriesRouter from "./categories.js";
import prioritiesRouter from "./priorities.js";
import userProfileRouter from "./userProfile.js";
import resetPasswordRouter from "./resetPassword.js";
import forgetPasswordRouter from "./forgetPassword.js";


const router = Router();

router.use(registerRouter);
router.use(loginRouter);
router.use(dashboardRouter);
router.use(taskRouter);
router.use(vitalTaskRouter);
router.use(categoriesRouter);
router.use(settingsRouter);
router.use(helpRouter);
router.use(resetPasswordRouter);
router.use(userProfileRouter);
router.use(forgetPasswordRouter);
router.use(prioritiesRouter);
router.use(statusesRouter);

export default router;