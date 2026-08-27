# 📝 MyTodos

A full-stack task management application built with a **React + TypeScript** frontend and a **Node.js + Express + MongoDB** backend. Features user authentication, task organization by priority and status, vital tasks, categories, and a real-time dashboard with progress tracking.

---

## 📁 Project Structure

```
my-todos/
├── backend/          # Express REST API (Node.js + MongoDB)
└── frontend/         # React SPA (Vite + TypeScript + Tailwind CSS)
```

---

## 🚀 Tech Stack

### Frontend
| Tool | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [React Router v7](https://reactrouter.com/) | Client-side routing |
| [TanStack Query v5](https://tanstack.com/query) | Server state, caching & data fetching |
| [React Hook Form](https://react-hook-form.com/) | Form state management |
| [Motion](https://motion.dev/) | Animations |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library (Tabler icons) |

### Backend
| Tool | Purpose |
|---|---|
| [Node.js](https://nodejs.org/) | Runtime |
| [Express 5](https://expressjs.com/) | REST API framework |
| [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/) | Database & ODM |
| [JSON Web Token](https://jwt.io/) | Stateless authentication |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | Password hashing |
| [Cloudinary](https://cloudinary.com/) | Profile image uploads |
| [Nodemailer](https://nodemailer.com/) | Email (password reset) |
| [express-validator](https://express-validator.github.io/) | Request validation |
| [Multer](https://github.com/expressjs/multer) | File upload middleware |

---

## ✨ Features

- 🔐 **Authentication** — Register, login, forgot password & reset password via email
- ✅ **Task Management** — Create, edit, delete, and complete tasks
- ⭐ **Vital Tasks** — Pin high-importance tasks to a dedicated view
- 📂 **Categories** — Organize tasks into custom categories
- 🎯 **Priority & Status** — Assign priority levels and track workflow statuses
- 📊 **Dashboard** — Visual progress circles showing completed / in-progress / not-started percentages
- 🖼️ **Profile** — Upload and update profile image via Cloudinary
- 🔍 **Search** — Live task filtering across all task fields
- 📱 **Responsive** — Fully responsive across mobile, tablet, and desktop

---

## 🗂️ Frontend Architecture

```
frontend/src/
├── api/                   # API call functions (auth.ts, todos.ts)
├── components/
│   ├── hooks/             # Custom React hooks
│   │   ├── useCreateTask.ts
│   │   ├── useDateFormat.ts
│   │   ├── useDeleteTodo.ts
│   │   ├── useGetCompletedTodos.ts
│   │   ├── useGetPriorities.ts
│   │   ├── useGetTodosTask.ts
│   │   ├── useLogout.ts
│   │   ├── useNotification.ts
│   │   ├── useOutsideClick.ts
│   │   ├── usePercentages.ts
│   │   ├── useTaskParams.ts
│   │   ├── useUpdateProfile.ts
│   │   ├── useUpdateTask.ts
│   │   └── useUserProfile.ts
│   ├── layout/            # Shared structural components (Card, ShadowBox, etc.)
│   ├── pages/             # Route-level page components
│   │   ├── auth/          # Register, Login, Forgot/Reset Password
│   │   ├── dashboard/     # Dashboard with status, todos & completed panels
│   │   ├── categories/    # Category management
│   │   ├── task/          # All tasks view
│   │   ├── vital/         # Vital/starred tasks
│   │   └── settings/      # User profile settings
│   ├── ui/                # Primitive UI components (Button, Paragraph, Span…)
│   └── utils/             # ProtectedRoute & PublicRoute guards
├── context/               # React context (AuthContext, GeneralContext)
├── lib/                   # Utility helpers
├── App.tsx                # Root component with routing
└── main.tsx               # Entry point
```

### Routing

| Route | Component | Access |
|---|---|---|
| `/auth/register` | Register | Public only |
| `/auth/sign-in` | Login | Public only |
| `/auth/forget-password` | Forgot Password | Public only |
| `/auth/reset-password` | Reset Password | Public only |
| `/dashboard` | Dashboard | Protected |
| `/my-task` | All Tasks | Protected |
| `/vital-task` | Vital Tasks | Protected |
| `/categories` | Categories | Protected |
| `/profile` | Settings | Protected |

---

## 🗂️ Backend Architecture

```
backend/src/
├── config/              # Database / service configuration
├── controllers/         # Business logic handlers
│   ├── todoController.js
│   ├── userController.js
│   ├── priorityController.js
│   └── statusController.js
├── middleware/
│   ├── authMiddleware.js  # JWT verification
│   └── upload.js          # Multer + Cloudinary upload
├── models/              # Mongoose schemas
│   ├── User.js
│   ├── Todo.js
│   ├── Priority.js
│   └── Status.js
├── routes/              # Express route definitions
│   ├── index.js         # Root router
│   ├── register.js
│   ├── login.js
│   ├── task.js
│   ├── vitalTask.js
│   ├── dashboard.js
│   ├── categories.js
│   ├── priorities.js
│   ├── statuses.js
│   ├── profile.js
│   ├── userProfile.js
│   ├── forgetPassword.js
│   ├── resetPassword.js
│   └── help.js
├── utils/               # Shared utility functions
└── index.js             # Server entry point (Express + MongoDB)
```

### Data Models

#### `User`
| Field | Type | Notes |
|---|---|---|
| `firstName` | String | Required |
| `lastName` | String | Required |
| `email` | String | Required, unique |
| `password` | String | Hashed with bcryptjs |
| `profileImageUrl` | String | Cloudinary URL |
| `resetPasswordToken` | String | SHA-256 hashed token |
| `resetPasswordExpire` | Date | 1-hour expiry |

#### `Todo`
| Field | Type | Notes |
|---|---|---|
| `userId` | ObjectId | Ref → User |
| `title` | String | Required |
| `description` | String | Optional |
| `dueDate` | Date | Optional |
| `priority` | ObjectId | Ref → Priority |
| `status` | ObjectId | Ref → Status |
| `image` | String | Optional attachment |
| `completed` | Boolean | Default `false` |
| `isVital` | Boolean | Default `false` |

#### `Priority` / `Status`
Reference lookup models used to normalize priority levels (e.g. Low, Medium, High) and workflow statuses (e.g. Not Started, In Progress, Completed).

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- A [Cloudinary](https://cloudinary.com/) account (free tier works)
- An SMTP email provider for password reset emails

---

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd my-todos
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGODB_URL=mongodb://localhost:27017/mytodos
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:5173

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Nodemailer (email)
EMAIL_HOST=smtp.yourprovider.com
EMAIL_PORT=587
EMAIL_USER=you@example.com
EMAIL_PASS=your_email_password
```

Start the dev server:

```bash
npm run dev
```

The API will run on `http://localhost:5000`.

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```env
VITE_API_URL=http://localhost:5000
```

Start the dev server:

```bash
npm run dev
```

The app will run on `http://localhost:5173`.

---

## 📜 Scripts

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with nodemon (hot reload) |
| `npm start` | Start production server |

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check & build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

The frontend is configured for **Vercel** deployment (`vercel.json` included). The backend can be deployed to any Node.js hosting platform (Railway, Render, Fly.io, etc.).

Make sure to update the `CLIENT_URL` in the backend `.env` and `VITE_API_URL` in the frontend `.env` to your production URLs.

---

## 🔒 Authentication Flow

1. User registers / logs in → receives a **JWT token**
2. Token is stored client-side and sent via `Authorization: Bearer <token>` header on every protected request
3. `authMiddleware.js` verifies the token on protected routes
4. Password reset uses a **cryptographically secure random token** emailed to the user, valid for **1 hour**

---

## 📄 License

ISC
