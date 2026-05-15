import toast from "react-hot-toast";
import { useMutation } from '@tanstack/react-query';

import { createTodo, type TaskData} from '@/api/todos';

export const useCreateTask = () => {
    const { mutate: isCreating, isPending } = useMutation({
        mutationFn: (data: TaskData) => createTodo(data),
        onSuccess: (data) => {
            toast.success("Todo task created successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
    return { isCreating, isPending };
}