import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "@/components/layout/Container";
import VitalTaskDisplay from "./components/VitalTaskDisplay";
import VitalTaskContent from "./components/VitalTaskContent";
import CreateTaskModal from "@/components/layout/CreateTaskModal";

import type { Task } from "@/api/todos";

export default function VitalTask() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);


    const contentId = searchParams.get("task") || "";
    const isContentOpen = !!contentId;

    function handleIsContentId(id: string) {
        if (id) {
            searchParams.set("task", id);
        } else {
            searchParams.delete("task");
        }
        setSearchParams(searchParams);
    }

    function handleIsContentOpen(open: boolean) {
        if (!open) {
            searchParams.delete("task");
            setSearchParams(searchParams);
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

    return (
        <Container 
            variant="main" 
            className={"w-full h-full flex flex-col md:flex-row gap-4 min-h-0 overflow-y-auto md:overflow-hidden"}
        >
            <VitalTaskDisplay 
                contentId={contentId}
                isPanelOpen={isContentOpen}
                onIsContentId={handleIsContentId}
                onContentOpen={handleIsContentOpen} 
                onOpenEditModal={handleOpenEditModal} 
            />
            <VitalTaskContent 
                contentId={contentId}
                isPanelOpen={isContentOpen}
                onEditTask={handleOpenEditModal}
                onContentOpen={handleIsContentOpen} 
            />
            
            <CreateTaskModal 
                secondWord="sk"
                fristWord="Edit Ta"
                show={isModalOpen}
                taskToEdit={taskToEdit}
                onCloseModal={handleCloseModal}
            />
        </Container>
    )
}