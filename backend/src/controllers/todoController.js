import todoModel from "../models/Todo.js";

/**
 * @desc Create a new todo
 * @route POST /api/task && /api/vitalTask
 * @access Private
 */
export const createTodo = async (req, res) => {
    try {
        const { title, description, priority, image, completed, isVital } = req.body;
        const todo = await todoModel.create({ 
            userId: req.user._id, 
            title, 
            description, 
            priority, 
            image, 
            completed, 
            isVital 
        });
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
        const todos = await todoModel.find({ userId: req.user._id });
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
        const todos = await todoModel.find({ userId: req.user._id, isVital: false });
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
        const todos = await todoModel.find({ userId: req.user._id, isVital: true });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: "Failed to get vital todos" });
    }
}
