const BASE_URL = import.meta.env.VITE_API_URL ?? "";

export interface RegisterData {
  firstName: string;
  lastName: string;
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

export interface UpdateProfileData {
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: File;
}

export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterData) => {
  const response = await fetch(`${BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, password }),
  });
  if (!response.ok) {
    const err = await response.json();
    const messages =
      err.errors && Array.isArray(err.errors)
        ? err.errors.map(
            (e: { msg?: string; message?: string }) =>
              e.msg || e.message || "Verification failed",
          )
        : [err.message || err.error || err.msg || "Registration failed"];
    const errorMessage = [...new Set(messages)].join(", ");
    throw new Error(errorMessage);
  }
  return response.json();
};

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
    const messages =
      err.errors && Array.isArray(err.errors)
        ? err.errors.map(
            (e: { msg?: string; message?: string }) =>
              e.msg || e.message || "Verification failed",
          )
        : [err.message || err.error || err.msg || "Login failed"];
    const errorMessage = [...new Set(messages)].join(", ");
    throw new Error(errorMessage);
  }
  return response.json();
};

export const forgetPassword = async ({ email }: ForgetPasswordData) => {
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

      const messages =
        err.errors && Array.isArray(err.errors)
          ? err.errors
              .map((e: { msg?: string }) => e.msg || "Validation failed")
              .join(", ")
          : err.message || "Failed to send reset link";

      throw new Error(messages);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error. Check your connection and try again.");
    }
    throw error;
  }
};

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

      const messages =
        err.errors && Array.isArray(err.errors)
          ? err.errors
              .map((e: { msg?: string }) => e.msg || "Validation failed")
              .join(", ")
          : err.message || "Failed to reset password";

      throw new Error(messages);
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error. Check your connection and try again.");
    }
    throw error;
  }
};

export const getUserProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const response = await fetch(`${BASE_URL}/api/auth/user-profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      localStorage.removeItem("token");
      return null;
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error. Check your connection and try again.");
    }
    throw error;
  }
};

export const updateUserProfile = async ({
  firstName,
  lastName,
  email,
  image,
}: UpdateProfileData) => {
  const token = localStorage.getItem("token");

  const formData = new FormData();
  if (firstName !== undefined) formData.append("firstName", firstName);
  if (lastName !== undefined) formData.append("lastName", lastName);
  if (email !== undefined) formData.append("email", email);
  if (image !== undefined) formData.append("image", image);

  const response = await fetch(`${BASE_URL}/api/profile`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json();
    const messages =
      err.errors && Array.isArray(err.errors)
        ? err.errors.map(
            (e: { msg?: string; message?: string }) =>
              e.msg || e.message || "Validation failed",
          )
        : [err.message || err.error || err.msg || "Profile update failed"];
    const errorMessage = [...new Set(messages)].join(", ");
    throw new Error(errorMessage);
  }

  return response.json();
};
