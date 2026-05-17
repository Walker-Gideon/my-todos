import { useQuery } from '@tanstack/react-query';
import { getPriorities } from "@/api/todos";

export const useGetPriorities = () => {
    const { data: priorities, isLoading, error } = useQuery({
        queryKey: ['priorities'],
        queryFn: () => getPriorities(),
    });

    return { priorities, isLoading, error };
}
