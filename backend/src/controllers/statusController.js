import Status from "../models/Status.js";
import { getOrSeedDefaults } from "../utils/seedDefaults.js";

/**
 * @desc Get all statuses for the logged-in user (seeds defaults if none exist)
 * @route GET /api/statuses
 * @access Private
 */
export const getStatuses = async (req, res) => {
    try {
        const { statuses } = await getOrSeedDefaults(req.user._id);
        res.status(200).json(statuses);
    } catch (error) {
        res.status(500).json({ message: "Failed to get statuses", error: error.message });
    }
};

/**
 * @desc Create a new status
 * @route POST /api/statuses
 * @access Private
 */
export const createStatus = async (req, res) => {
    try {
        const { label, color, isCompleted } = req.body;
        const status = await Status.create({
            userId: req.user._id,
            label,
            color,
            isCompleted: isCompleted ?? false
        });
        res.status(201).json(status);
    } catch (error) {
        res.status(500).json({ message: "Failed to create status", error: error.message });
    }
};

/**
 * @desc Update a status
 * @route PUT /api/statuses/:id
 * @access Private
 */
export const updateStatus = async (req, res) => {
    try {
        const { label, color, isCompleted } = req.body;
        const status = await Status.findOne({ _id: req.params.id, userId: req.user._id });

        if (!status) {
            return res.status(404).json({ message: "Status not found" });
        }

        status.label = label ?? status.label;
        status.color = color ?? status.color;
        if (isCompleted !== undefined) status.isCompleted = isCompleted;
        await status.save();

        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ message: "Failed to update status", error: error.message });
    }
};

/**
 * @desc Delete a status
 * @route DELETE /api/statuses/:id
 * @access Private
 */
export const deleteStatus = async (req, res) => {
    try {
        const status = await Status.findOne({ _id: req.params.id, userId: req.user._id });

        if (!status) {
            return res.status(404).json({ message: "Status not found" });
        }

        if (status.isDefault) {
            return res.status(400).json({ message: "Default statuses cannot be deleted" });
        }

        await status.deleteOne();
        res.status(200).json({ message: "Status deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete status", error: error.message });
    }
};
