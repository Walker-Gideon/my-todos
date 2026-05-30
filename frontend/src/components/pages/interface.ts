import type { Task } from "@/api/todos";

export interface TaskContentProps {
    contentId: string;
    isPanelOpen: boolean;
    onEditTask: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}