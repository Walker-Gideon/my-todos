import { MongoInvalidArgumentError } from "mongodb";
import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        reuired: false
    },
    priority: {
        type: String,
        enum: [Extreme, Moderte, Low],
        reuired: true
    },
    image: {
        type: String,
        required: false
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default mongoose.model("Todo", todoSchema);