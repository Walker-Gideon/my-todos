const BASE_URL = import.meta.env.VITE_API_URL ?? '';

export interface RegisterData {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
}

export interface LoginData {
    email: string;
    password: string;
}

// Accepts a single object — required by React Query's MutationFunction type
export const registerUser = async ({ firstName, lastName, username, email, password }: RegisterData) => {
    const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, username, email, password }),
    });
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Registration failed');
    }
    return response.json();
}

export const loginUser = async ({ email, password }: LoginData) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message || 'Login failed');
    }
    return response.json();
}

