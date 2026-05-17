import toast from "react-hot-toast";
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteTodo as deleteTodoApi } from "@/api/todos";

export const useDeleteTodo = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteTodo, isPending } = useMutation({
        mutationFn: (id: string) => deleteTodoApi(id),
        onSuccess: () => {
            toast.success("Todo task deleted successfully");
            queryClient.invalidateQueries({ queryKey: ['todos'] });
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    })
    return { deleteTodo, isPending };
}