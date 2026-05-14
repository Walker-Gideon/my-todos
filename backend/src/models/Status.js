import mongoose from "mongoose";

const statusSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    label: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        default: "#6B7280"
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    isDefault: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model("Status", statusSchema);
