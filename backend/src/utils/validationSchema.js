export const registerValidationSchema = {
  firstName: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "First name is required",
    },
  },
  lastName: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Last name is required",
    },
  },
  email: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Email is invalid",
    },
  },
  password: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: "Password must be at least 8 characters long",
    },
  },
};

export const loginValidationSchema = {
  email: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Email is invalid",
    },
  },
  password: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
  },
};

export const forgetPasswordValidationSchema = {
  email: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Email is invalid",
    },
  },
};

export const resetPasswordValidationSchema = {
  token: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Token is required",
    },
  },
  password: {
    isString: {
      errorMessage: "must be a string",
    },
    notEmpty: {
      errorMessage: "Password is required",
    },
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: "Password must be at least 8 characters long",
    },
  },
};

export const profileValidationSchema = {
  firstName: {
    optional: true,
    isString: {
      errorMessage: "must be a string",
    },
  },
  lastName: {
    optional: true,
    isString: {
      errorMessage: "must be a string",
    },
  },
  email: {
    optional: true,
    isString: {
      errorMessage: "must be a string",
    },
    isEmail: {
      errorMessage: "Email is invalid",
    },
  },
};

export const createTodoValidationSchema = {
  title: {
    isString: {
      errorMessage: "Title must be a string",
    },
    notEmpty: {
      errorMessage: "Title is required",
    },
    trim: true,
  },
  dueDate: {
    optional: true,
    isISO8601: {
      errorMessage: "Due date must be a valid date (YYYY-MM-DD)",
    },
  },
  description: {
    optional: true,
    isString: {
      errorMessage: "Description must be a string",
    },
  },
  image: {
    optional: true,
  },
  priority: {
    notEmpty: {
      errorMessage: "Priority is required",
    },
    isMongoId: {
      errorMessage: "Priority must be a valid ID",
    },
  },
};
