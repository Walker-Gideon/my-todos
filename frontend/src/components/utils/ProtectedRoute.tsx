import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

import Spinner from "@/components/layout/Spinner";

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-slate-50">
                <Spinner size="h-12 w-12" color="border-primary" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/auth/sign-in" replace />;
    }

    return <Outlet />;
}