import userModel from "../models/User.js";

/**
 * @desc Register a new user
 * @route POST /api/register
 * @access Public
 */
export const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, username, email, password } = req.body;
        const user = await userModel.create({ firstName, lastName, username, email, password });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: "Failed to register user", error: error.message });
    }
}

/**
 * @desc Login user
 * @route POST /api/login
 * @access Public
 */
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Failed to login user", error: error.message });
    }
}