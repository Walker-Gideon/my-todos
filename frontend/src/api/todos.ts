const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export interface Priority {
    _id: string;
    label: string;
    color: string;
}

export interface Status {
    _id: string;
    label: string;
    color: string;
    isCompleted: boolean;
}

export interface Task {
    _id: string;
    title: string;
    description?: string;
    dueDate?: string;
    priority: Priority;
    status: Status;
    image?: string;
    completed: boolean;
    isVital: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface TaskData {
    title: string;
    priority: string;
    dueDate: string;
    image: string;
    description: string;
    status?: string;
    isVital?: boolean;
}

export interface UpdateTaskData {
    title?: string;
    priority?: string;
    dueDate?: string;
    image?: string;
    description?: string;
    status?: string;
    isVital?: boolean;
    completed?: boolean;
}

export const createTodo = async ({ title, priority, dueDate, image, description, status, isVital }: TaskData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ title, priority, dueDate, image, description, status, isVital }),
    });
    if (!response.ok) {
        const err = await response.json();
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Failed to create task'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
    }
    return response.json();
}

export const getTodos = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/dashboard`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return response.json();
}

export const getCompletedTodos = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/completed`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch completed tasks');
    }
    return response.json();
}

export const updateTodo = async (id: string, data: UpdateTaskData) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/task/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const err = await response.json();
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Failed to update task'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
    }
    return response.json();
}

export const deleteTodo = async (id: string) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/task/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        const err = await response.json();
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Failed to delete task'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
    }
    return response.json();
}

export const getPriorities = async () => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${BASE_URL}/api/priorities`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!response.ok) {
        throw new Error('Failed to fetch priorities');
    }
    return response.json();
}
