import { 
  Route, 
  Routes, 
  Navigate, 
  BrowserRouter, 
} from "react-router-dom";

import AppLayout from "./components/pages";
import Task from "./components/pages/task";
import VitalTask from "./components/pages/vital";
import AuthLayout from "./components/pages/auth";
import Login from "./components/pages/auth/login";
import Settings from "./components/pages/settings";
import Dashboard from "./components/pages/dashboard";
import Categories from "./components/pages/categories";
import Register from "./components/pages/auth/register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/auth/register" />} />

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate replace to="register" />} />
          <Route path="register" element={<Register />} />
          <Route path="sign-in" element={<Login />} />
        </Route>

        <Route
          element={
            // <ProtectedRoute>
              <AppLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vital-task" element={<VitalTask />} />
          <Route path="tasks" element={<Task />} />
          <Route path="settings" element={<Settings />} />
          <Route path="categories" element={<Categories />} />
        </Route>

        {/* Page Not Found */}
      </Routes>
    </BrowserRouter>
  )
}
