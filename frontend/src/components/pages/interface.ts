import type { Task } from "@/api/todos";

export interface TaskContentProps {
    contentId: string;
    isPanelOpen: boolean;
    onEditTask: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}

export interface TaskDisplayProps {
    contentId: string;
    isPanelOpen?: boolean;
    onIsContentId: (id: string) => void;
    onOpenEditModal: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}