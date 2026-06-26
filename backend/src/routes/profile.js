import { Router } from "express";
import { checkSchema } from "express-validator";
import { updateUserProfile } from "../controllers/userController.js";
import { profileValidationSchema } from "../utils/validationSchema.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = Router();

router.patch(
  "/api/profile",
  protect,
  upload.single("image"),
  checkSchema(profileValidationSchema),
  updateUserProfile,
);

export default router;
