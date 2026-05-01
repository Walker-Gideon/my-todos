import { Router } from "express";
import { checkSchema } from "express-validator";
import { forgetPassword } from "../controllers/userController.js";
import { forgetPasswordValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.post("/api/auth/forget-password", checkSchema(forgetPasswordValidationSchema), forgetPassword);

export default router;