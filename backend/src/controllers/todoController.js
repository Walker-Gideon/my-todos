import todoModel from "../models/Todo.js";

/**
 * @desc Create a new todo
 * @route POST /api/task && /api/vitalTask
 * @access Private
 */
export const createTodo = async (req, res) => {
    try {
        const { userId, title, description, priority, image, completed, isVital } = req.body;
        const todo = await todoModel.create({ userId, title, description, priority, image, completed, isVital });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Failed to create todo", error: error.message });
    }
}

/**
 * @desc Get all todos
 * @route GET /api/dashboard, /api/task, /api/vitalTask
 * @access Private
 */
export const getTodo = async (req, res) => {
    try {
        const todos = await todoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get todos" });
    }
}

/**
 * @desc Get task todos
 * @route GET /api/task
 * @access Private
 */
export const getTaskTodo = async (req, res) => {
    try {
        const todos = await todoModel.find({ isVital: false });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get task todos" });
    }
}

/**
 * @desc Get vital todos
 * @route GET /api/vitalTask
 * @access Private
 */
export const getVitalTodo = async (req, res) => {
    try {
        const todos = await todoModel.find({ isVital: true });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get vital todos" });
    }
}
