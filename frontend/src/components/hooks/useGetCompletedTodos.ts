import { useQuery } from '@tanstack/react-query';

import { getCompletedTodos as getCompletedTodosApi } from "@/api/todos";

export const useGetCompletedTodos = () => {
    const { data: completedTodos, isLoading, error } = useQuery({
        queryKey: ['todos', 'completed'],
        queryFn: () => getCompletedTodosApi(),
    });

    return { completedTodos, isLoading, error };
}