import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { registerUser, type RegisterData } from '@/api/auth';

export const useRegisterUser = () => {
    const navigate = useNavigate();

    const { mutate: register, isPending } = useMutation({
        mutationFn: (data: RegisterData) => registerUser(data),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
            toast.success("Registered successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { register, isPending };
}