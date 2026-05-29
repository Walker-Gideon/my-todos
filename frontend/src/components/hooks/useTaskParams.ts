import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { Task } from "@/api/todos";

export function useTaskParams() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

    const contentId = searchParams.get("task") || "";
    const isContentOpen = !!contentId;

    function handleIsContentId(id: string) {
        const newParams = new URLSearchParams(searchParams);
        if (id) {
            newParams.set("task", id);
        } else {
            newParams.delete("task");
        }
        setSearchParams(newParams);
    }

    function handleIsContentOpen(open: boolean) {
        if (!open) {
            const newParams = new URLSearchParams(searchParams);
            newParams.delete("task");
            setSearchParams(newParams);
        }
    }

    function handleOpenEditModal(task: Task) {
        setTaskToEdit(task);
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setTaskToEdit(null);
        setIsModalOpen(false);
    }

    return {
        isModalOpen,
        setIsModalOpen,
        taskToEdit,
        setTaskToEdit,
        contentId,
        isContentOpen,
        handleIsContentId,
        handleIsContentOpen,
        handleOpenEditModal,
        handleCloseModal,
    };
}
