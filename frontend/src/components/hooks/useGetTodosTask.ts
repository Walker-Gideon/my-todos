import { useQuery } from '@tanstack/react-query';

import { getTodos } from "@/api/todos";

export const useGetTodosTask = () => {
    const { data: todos, isLoading, error } = useQuery({
        queryKey: ['todos', 'active'],
        queryFn: () => getTodos(),
    });

    return { todos, isLoading, error };
}