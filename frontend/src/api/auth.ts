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
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Registration failed'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
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
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Login failed'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
    }
    return response.json();
}

