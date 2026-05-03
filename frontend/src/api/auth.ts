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
    rememberMe?: boolean;
}

export interface ForgetPasswordData {
    email: string;
}

export interface ResetPasswordData {
    token: string;
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

export const loginUser = async ({ email, password, rememberMe }: LoginData) => {
    const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
    });
    if (!response.ok) {
        const err = await response.json();
        const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string; message?: string }) => e.msg || e.message || 'Verification failed') : [err.message || err.error || err.msg || 'Login failed'];
        const errorMessage = [...new Set(messages)].join(', ');
        throw new Error(errorMessage);
    }
    return response.json();
}

export const forgetPassword = async ( { email }: ForgetPasswordData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/forget-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            const err = await response.json();

            const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string }) => e.msg || 'Validation failed').join(', ') : err.message || 'Failed to send reset link';

            throw new Error(messages);
        }

        return response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Network error. Check your connection and try again.");
        }
        throw error;
    }
}

export const resetPassword = async ({ token, password }: ResetPasswordData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, password }),
        });

        if (!response.ok) {
            const err = await response.json();

            const messages = err.errors && Array.isArray(err.errors) ? err.errors.map((e: { msg?: string }) => e.msg || 'Validation failed').join(', ') : err.message || 'Failed to reset password';

            throw new Error(messages);
        }

        return response.json();
    } catch (error) {
        if (error instanceof TypeError) {
            throw new Error("Network error. Check your connection and try again.");
        }
        throw error;
    }
}
