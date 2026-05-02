import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { forgetPassword, type ForgetPasswordData } from "@/api/auth";

export const useForgetPassword = () => {
    const navigate = useNavigate();

    const { mutate: forget, isPending } = useMutation({
        mutationFn: (data: ForgetPasswordData) => forgetPassword(data),
        onSuccess: () => {
            navigate('/auth/verify-email');
            toast.success("Reset link sent successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { forget, isPending };
}