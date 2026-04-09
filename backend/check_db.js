import mongoose from "mongoose";
import dotenv from "dotenv";
import todoModel from "./src/models/toDoModel.js";
dotenv.config();

async function check() {
    await mongoose.connect(process.env.MONGODB_URL);
    const allTodos = await todoModel.find();
    console.log(`Total Todos: ${allTodos.length}`);
    console.log(`Vital Tasks: ${allTodos.filter(t => t.isVital === true).length}`);
    console.log(`Regular Tasks: ${allTodos.filter(t => t.isVital === false).length}`);
    console.log("\nLast 2 entries:");
    console.log(JSON.stringify(allTodos.slice(-2), null, 2));
    process.exit();
}

check();
