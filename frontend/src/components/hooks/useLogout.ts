import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/useAuthContex";

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout: updateGlobalUser } = useAuth();

  const logout = () => {
    updateGlobalUser();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return { logout };
};
