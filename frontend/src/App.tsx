import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./components/pages/auth/login/Login";
import AuthLayout from "./components/pages/auth/AuthLayout";
import Register from "./components/pages/auth/register/Register";

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

        {/* <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          ></Route> */}
      </Routes>
    </BrowserRouter>
  )
}
