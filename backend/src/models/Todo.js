import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    dueDate: {
        type: Date,
        required: false
    },
    priority: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Priority",
        required: true
    },
    status: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Status",
        required: true
    },
    image: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    },
    isVital: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Todo", todoSchema);