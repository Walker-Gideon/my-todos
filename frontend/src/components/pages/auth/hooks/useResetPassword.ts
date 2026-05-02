import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

import { resetPassword, type ResetPasswordData } from "@/api/auth";

export const useResetPassword = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const { mutate: passwordReset, isPending } = useMutation({
        mutationFn: (data: Pick<ResetPasswordData, 'password'>) => {
            if(!token) return Promise.reject(new Error("Token is required"));
            return resetPassword({ token, password: data.password })
        },
        onSuccess: () => {
            navigate('/auth/sign-in');
            toast.success("Password reset successful");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { passwordReset, isPending };
}