import { 
  QueryClient, 
  QueryClientProvider 
} from "@tanstack/react-query";
import { 
  Route, 
  Routes, 
  Navigate, 
  BrowserRouter, 
} from "react-router-dom";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppLayout from "./components/pages";
import Task from "./components/pages/task";
import VitalTask from "./components/pages/vital";
import AuthLayout from "./components/pages/auth";
import Login from "./components/pages/auth/login";
import Settings from "./components/pages/settings";
import Dashboard from "./components/pages/dashboard";
import Categories from "./components/pages/categories";
import Register from "./components/pages/auth/register";
import PublicRoute from "./components/utils/PublicRoute";
import ProtectedRoute from "./components/utils/ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/auth/register" />} />

        <Route element={<PublicRoute />}>
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Navigate replace to="register" />} />
            <Route path="register" element={<Register />} />
            <Route path="sign-in" element={<Login />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="vital-task" element={<VitalTask />} />
            <Route path="tasks" element={<Task />} />
            <Route path="settings" element={<Settings />} />
            <Route path="categories" element={<Categories />} />
          </Route>
        </Route>

        {/* Page Not Found */}
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}
