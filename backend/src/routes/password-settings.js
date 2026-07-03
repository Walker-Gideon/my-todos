import { Router } from "express";
import { checkSchema } from "express-validator";
import { updateUserPassword } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import { updateUserPasswordValidationSchema } from "../utils/validationSchema.js";

const router = Router();

router.put(
  "/api/auth/update-password",
  protect,
  checkSchema(updateUserPasswordValidationSchema),
  updateUserPassword,
);

export default router;
