import toast from "react-hot-toast";
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo, type TaskData} from '@/api/todos';

export const useCreateTask = () => {
    const queryClient = useQueryClient();

    const { mutate: createTask, isPending } = useMutation({
        mutationFn: (data: TaskData) => createTodo(data),
        onSuccess: () => {
            toast.success("Todo task created successfully");
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    })
    return { createTask, isPending };
}