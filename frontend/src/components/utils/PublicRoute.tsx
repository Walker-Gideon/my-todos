import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "@/context/useAuthContex";

import Spinner from "@/components/layout/Spinner";

export default function PublicRoute() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-50">
        <Spinner size="h-12 w-12" color="border-primary" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
