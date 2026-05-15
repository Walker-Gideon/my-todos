const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export interface TaskData {
    title: string;
    priority: string;
    dueDate: string;
    image: string;
    description: string;
    status: string;
    isVital: boolean;
}

export interface UpdateTaskData {
    title?: string;
    priority?: string;
    dueDate?: string;
    image?: string;
    description?: string;
    status?: string;
    isVital?: boolean;
}

export const createTodo = async ({ title, priority, dueDate, image, description, status, isVital }: TaskData) => {
    const response = await fetch(`${BASE_URL}/api/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, priority, dueDate, image, description, status, isVital }),
    });
    return response.json();
}