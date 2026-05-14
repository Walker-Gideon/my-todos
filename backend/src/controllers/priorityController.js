import Priority from "../models/Priority.js";
import { getOrSeedDefaults } from "../utils/seedDefaults.js";

/**
 * @desc Get all priorities for the logged-in user (seeds defaults if none exist)
 * @route GET /api/priorities
 * @access Private
 */
export const getPriorities = async (req, res) => {
    try {
        const { priorities } = await getOrSeedDefaults(req.user._id);
        res.status(200).json(priorities);
    } catch (error) {
        res.status(500).json({ message: "Failed to get priorities", error: error.message });
    }
};

/**
 * @desc Create a new priority
 * @route POST /api/priorities
 * @access Private
 */
export const createPriority = async (req, res) => {
    try {
        const { label, color } = req.body;
        const priority = await Priority.create({
            userId: req.user._id,
            label,
            color
        });
        res.status(201).json(priority);
    } catch (error) {
        res.status(500).json({ message: "Failed to create priority", error: error.message });
    }
};

/**
 * @desc Update a priority
 * @route PUT /api/priorities/:id
 * @access Private
 */
export const updatePriority = async (req, res) => {
    try {
        const { label, color } = req.body;
        const priority = await Priority.findOne({ _id: req.params.id, userId: req.user._id });

        if (!priority) {
            return res.status(404).json({ message: "Priority not found" });
        }

        priority.label = label ?? priority.label;
        priority.color = color ?? priority.color;
        await priority.save();

        res.status(200).json(priority);
    } catch (error) {
        res.status(500).json({ message: "Failed to update priority", error: error.message });
    }
};

/**
 * @desc Delete a priority
 * @route DELETE /api/priorities/:id
 * @access Private
 */
export const deletePriority = async (req, res) => {
    try {
        const priority = await Priority.findOne({ _id: req.params.id, userId: req.user._id });

        if (!priority) {
            return res.status(404).json({ message: "Priority not found" });
        }

        if (priority.isDefault) {
            return res.status(400).json({ message: "Default priorities cannot be deleted" });
        }

        await priority.deleteOne();
        res.status(200).json({ message: "Priority deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete priority", error: error.message });
    }
};
