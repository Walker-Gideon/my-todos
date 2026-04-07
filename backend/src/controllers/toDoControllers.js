import todoModel from "../models/toDoModel.js";

//@desc Create a new todo
//@route POST /api/todo
//@access Private
const createTodo = async (req, res) => {
    try {
        const { userId, text, completed } = req.body;
        const todo = await todoModel.create({ userId, text, completed });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}