import type { Task } from "@/api/todos";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";
import { useGetCompletedTodos } from "@/components/hooks/useGetCompletedTodos";

export const usePercentages = () => {
  const { todos } = useGetTodosTask();
  const { completedTodos } = useGetCompletedTodos();

  const total = (todos?.length ?? 0) + (completedTodos?.length ?? 0);
  const completedCount = completedTodos?.length ?? 0;
  const inProgressCount = (todos ?? []).filter(
    (task: Task) => task.status?.label === "In Progress",
  ).length;
  const notStatedCount = (todos ?? []).filter(
    (task: Task) => task.status?.label === "Not Started",
  ).length;

  const completedPercentage = total
    ? Math.round((completedCount / total) * 100)
    : 0;
  const inProgressPercentage = total
    ? Math.round((inProgressCount / total) * 100)
    : 0;
  const notStartedPercentage = total
    ? Math.round((notStatedCount / total) * 100)
    : 0;

  return { completedPercentage, inProgressPercentage, notStartedPercentage };
};
