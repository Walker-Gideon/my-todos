import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { loginUser, type LoginData } from '@/api/auth';
import { useAuth } from '@/context/AuthContext';

export const useLoginUser = () => {
    const navigate = useNavigate();
    const { login: updateGlobalUser } = useAuth();

    const { mutate: login, isPending } = useMutation({
        mutationFn: (data: LoginData) => loginUser(data),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            updateGlobalUser(data);
            navigate('/dashboard');
            toast.success("Login successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return { login, isPending };
}