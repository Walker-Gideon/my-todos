import todoModel from "../models/Todo.js";
import statusModel from "../models/Status.js";
import { validationResult } from "express-validator";
import { getOrSeedDefaults } from "../utils/seedDefaults.js";

/**
 * @desc Create a new todo
 * @route POST /api/task
 * @access Private
 */
export const createTodo = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { title, description, dueDate, priority, image } = req.body;

        // Ensure defaults exist and find the correct initial status based on date
        const { statuses } = await getOrSeedDefaults(req.user._id);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const due = new Date(dueDate);
        due.setHours(0, 0, 0, 0);

        // Date-based status logic
        let targetLabel = "Not Started";
        if (today.getTime() === due.getTime()) {
            targetLabel = "In Progress";
        }

        const initialStatus = statuses.find(s => s.label === targetLabel) || statuses[0];

        const todo = await todoModel.create({
            userId: req.user._id,
            title,
            description,
            dueDate,
            priority,
            status: initialStatus._id,
            image,
            isVital: false,
            completed: false
        });

        const populatedTodo = await todo.populate(["priority", "status"]);
        res.status(201).json(populatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Failed to create todo", error: error.message });
    }
};

/**
 * @desc Get all todos (Dashboard: non-completed, both task and vital)
 */
export const getTodo = async (req, res) => {
    try {
        const todos = await todoModel.find({ userId: req.user._id, completed: false })
            .populate("priority")
            .populate("status");
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get todos" });
    }
};

/**
 * @desc Get My Task todos only (isVital: false, non-completed)
 */
export const getTaskTodo = async (req, res) => {
    try {
        const todos = await todoModel.find({ userId: req.user._id, isVital: false, completed: false })
            .populate("priority")
            .populate("status");
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get task todos" });
    }
};

/**
 * @desc Get Vital Task todos only (isVital: true, non-completed)
 */
export const getVitalTodo = async (req, res) => {
    try {
        const todos = await todoModel.find({ userId: req.user._id, isVital: true, completed: false })
            .populate("priority")
            .populate("status");
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get vital todos" });
    }
};

/**
 * @desc Get all completed todos
 */
export const getCompletedTodos = async (req, res) => {
    try {
        const todos = await todoModel.find({ userId: req.user._id, completed: true })
            .populate("priority")
            .populate("status");
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get completed todos" });
    }
};

/**
 * @desc Update a todo (handles isVital toggle, mark completed, and auto-status)
 */
export const updateTodo = async (req, res) => {
    try {
        const { title, description, dueDate, priority, status, image, isVital, completed } = req.body;
        const todo = await todoModel.findOne({ _id: req.params.id, userId: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        // Apply fields
        if (title !== undefined) todo.title = title;
        if (description !== undefined) todo.description = description;
        if (dueDate !== undefined) todo.dueDate = dueDate;
        if (priority !== undefined) todo.priority = priority;
        if (image !== undefined) todo.image = image;
        if (isVital !== undefined) todo.isVital = isVital;

        // Logic for "Mark Completed" / "Undo Completed"
        if (completed !== undefined) {
            todo.completed = completed;
            const { statuses } = await getOrSeedDefaults(req.user._id);
            if (completed) {
                const completedStatus = statuses.find(s => s.isCompleted);
                if (completedStatus) todo.status = completedStatus._id;
            } else {
                const notStartedStatus = statuses.find(s => s.label === "Not Started");
                if (notStartedStatus) todo.status = notStartedStatus._id;
            }
        } 
        // Logic for direct status change
        else if (status !== undefined) {
            todo.status = status;
            const statusDoc = await statusModel.findById(status);
            if (statusDoc) {
                todo.completed = statusDoc.isCompleted;
            }
        }

        await todo.save();
        const updatedTodo = await todo.populate(["priority", "status"]);
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: "Failed to update todo", error: error.message });
    }
};

/**
 * @desc Delete a todo
 */
export const deleteTodo = async (req, res) => {
    try {
        const todo = await todoModel.findOne({ _id: req.params.id, userId: req.user._id });

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        await todo.deleteOne();
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete todo" });
    }
};
