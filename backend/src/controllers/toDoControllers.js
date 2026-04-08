import todoModel from "../models/toDoModel.js";

/**
 * @desc Create a new todo
 * @route POST /api/task && /api/vitalTask
 * @access Private
 */
export const createTodo = async (req, res) => {
    try {
        const { userId, title, description, priority, image, completed } = req.body;
        const todo = await todoModel.create({ userId, title, description, priority, image, completed });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: "Failed to create todo" });
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
