import toast from "react-hot-toast";
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateTodo, type UpdateTaskData } from '@/api/todos';

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    const { mutate: updateTask, isPending } = useMutation({
        mutationFn: ({ id, data }: { id: string, data: UpdateTaskData }) => updateTodo(id, data),
        onSuccess: () => {
            toast.success("Todo task updated successfully");
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    })
    return { updateTask, isPending };
}