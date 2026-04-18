import { Router } from "express";
import { checkSchema } from "express-validator";
import { loginUser } from "../controllers/userController.js";
import { loginValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.post("/api/auth/login", checkSchema(loginValidationSchema), loginUser);

export default router;
