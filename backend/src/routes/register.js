import { Router } from "express";
import { checkSchema } from "express-validator";
import { registerUser } from "../controllers/userController.js";
import { registerValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.post(
  "/api/auth/register",
  checkSchema(registerValidationSchema),
  registerUser,
);

export default router;
