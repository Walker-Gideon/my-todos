import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
        <Route index element={<Register />} />

        <Route element={<AuthLayout />}>
          <Route index element={<Navigate replace to="auth/register" />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/login" element={<Login />} />
        </Route>

        <Route
          element={
            // <ProtectedRoute>
              <AppLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="task" element={<Task />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vital-task" element={<VitalTask />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
