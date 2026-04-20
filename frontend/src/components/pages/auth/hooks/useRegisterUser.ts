import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { registerUser, type RegisterData } from '@/api/auth';

export const useRegisterUser = () => {
    const navigate = useNavigate();

    const { mutate: register, isPending, error, reset, isSuccess } = useMutation({
        mutationFn: (data: RegisterData) => registerUser(data),
        onSuccess: (data) => {
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        },
    });

    return { register, isPending, error, reset, isSuccess };
}