import toast from "react-hot-toast";
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateTodo, type UpdateTaskData } from '@/api/todos';

type UpdateTaskVariables = {
    id: string;
    data: UpdateTaskData;
    successMessage?: string;
    onSuccess?: (data: Awaited<ReturnType<typeof updateTodo>>) => void;
};

export const useUpdateTask = () => {
    const queryClient = useQueryClient();

    const { mutate: updateTask, isPending } = useMutation({
        mutationFn: ({ id, data }: UpdateTaskVariables) => updateTodo(id, data),
        onSuccess: (data, variables) => {
            toast.success(variables.successMessage ?? "Todo task updated successfully");
            queryClient.invalidateQueries({ queryKey: ['todos'] });
            queryClient.setQueriesData({ queryKey: ['todos'] }, (oldData: any) => {
                if (!oldData) return oldData;

                const updateTaskInCache = (task: any) => ({
                    ...task,
                    ...data,
                    ...variables.data,
                    isVital: variables.data.isVital ?? task.isVital,
                });

                if (Array.isArray(oldData)) {
                    return oldData.map((task) => (task._id === variables.id ? updateTaskInCache(task) : task));
                }

                if (Array.isArray(oldData?.tasks)) {
                    return {
                        ...oldData,
                        tasks: oldData.tasks.map((task: any) => (task._id === variables.id ? updateTaskInCache(task) : task)),
                    };
                }

                return oldData;
            });
            variables.onSuccess?.(data);
        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    });

    return { updateTask, isPending };
};