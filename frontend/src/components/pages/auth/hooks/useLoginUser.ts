import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { loginUser, type LoginData } from '@/api/auth';

export const useLoginUser = () => {
    const navigate = useNavigate();

    const { mutate: login, isPending, error } = useMutation({
        mutationFn: (data: LoginData) => loginUser(data),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        },
    });

    return { login, isPending, error };
}