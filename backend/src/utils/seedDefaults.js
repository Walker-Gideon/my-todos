import Priority from "../models/Priority.js";
import Status from "../models/Status.js";

const DEFAULT_PRIORITIES = [
    { label: "Extreme", color: "#EF4444", isDefault: true },
    { label: "Moderate", color: "#3B82F6", isDefault: true },
    { label: "Low", color: "#22C55E", isDefault: true }
];

const DEFAULT_STATUSES = [
    { label: "Not Started", color: "#EF4444", isCompleted: false, isDefault: true },
    { label: "In Progress", color: "#3B82F6", isCompleted: false, isDefault: true },
    { label: "Completed",   color: "#22C55E", isCompleted: true,  isDefault: true }
];

export const getOrSeedDefaults = async (userId) => {
    let priorities = await Priority.find({ userId });
    if (priorities.length === 0) {
        const seeded = DEFAULT_PRIORITIES.map(p => ({ ...p, userId }));
        priorities = await Priority.insertMany(seeded);
    }

    let statuses = await Status.find({ userId });
    if (statuses.length === 0) {
        const seeded = DEFAULT_STATUSES.map(s => ({ ...s, userId }));
        statuses = await Status.insertMany(seeded);
    }

    return { priorities, statuses };
};
