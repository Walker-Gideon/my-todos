import crypto from "crypto";
import { validationResult } from "express-validator";

import userModel from "../models/User.js";
import sendEmail from "../utils/sendEmail.js";
import generateToken from "../utils/generateToken.js";

/**
 * @desc Register a new user
 * @route POST /api/register
 * @access Public
 */
export const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { firstName, lastName, username, email, password } = req.body;
        const user = await userModel.create({ firstName, lastName, username, email, password });
        
        res.status(201).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (error) {
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ 
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists` 
            });
        }
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
}

/**
 * @desc Login user
 * @route POST /api/login
 * @access Public
 */
export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { email, password, rememberMe } = req.body;
        const user = await userModel.findOne({ email });

        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            email: user.email,
            token: generateToken(user._id, rememberMe)
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to login user", error: error.message });
    }
}

/**
 * @desc Forget password
 * @route POST /api/auth/forget-password
 * @access Public
 */ 
export const forgetPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false,
            errors: errors.array() 
        });
    }

    try {
        const { email } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const resetToken = user.getResetPasswordToken();
        await user.save();

        // Send email with reset link
        const resetUrl = `${process.env.CLIENT_URL}/auth/reset-password?token=${resetToken}`;
        const message = `Hi ${user.firstName} ${user.lastName},\n\nYou requested a password reset. Click the link below to set a new password:\n\n${resetUrl}\n\nThis link expires in 1 hour.\n\nIf you didn't request this, you can safely ignore this email.`;

        try {
            await sendEmail({
                email: user.email,
                subject: "Reset Your Password",
                message,
            });

            res.status(200).json({ 
                success: true, 
                message: "Password reset link sent to your email" 
            });
        } catch (err) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save({ validateBeforeSave: false });

            return res.status(500).json({ 
                success: false, 
                message: "Something went wrong. Please try again." 
            });
        }
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Failed to send password reset email",
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
}

/**
 * @desc Reset password
 * @route POST /api/auth/reset-password
 * @access Public
 */ 
export const resetPassword = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { token, password } = req.body;
        const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

        const user = await userModel.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        // Set new password
        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password reset successfully. You can now login.",
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Something went wrong. Please try again.",
            ...(process.env.NODE_ENV === 'development' && { error: error.message })
        });
    }
}
