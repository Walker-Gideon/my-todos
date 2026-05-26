import { useState } from "react";

import Container from "@/components/layout/Container";
import VitalTaskDisplay from "./components/VitalTaskDisplay";
import VitalTaskContent from "./components/VitalTaskContent";
import CreateTaskModal from "@/components/layout/CreateTaskModal";

import type { Task } from "@/api/todos";

export default function VitalTask() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

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
            className={"w-full h-full flex flex-col md:flex-row gap-4 min-h-0 md:max-h-120 overflow-y-auto md:overflow-hidden"}
        >
            <VitalTaskDisplay onOpenEditModal={handleOpenEditModal} />
            <VitalTaskContent />
            
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