import { Router } from "express";
import { checkSchema } from "express-validator";
import { resetPassword } from "../controllers/userController.js";
import { resetPasswordValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.post("/api/auth/reset-password", checkSchema(resetPasswordValidationSchema), resetPassword);

export default router;