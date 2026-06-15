import TaskDisplay from "./components/TaskDisplay";
import TaskContent from "./components/TaskContent";
import Container from "@/components/layout/Container";
import CreateTaskModal from "@/components/layout/CreateTaskModal";

import { useTaskParams } from "@/components/hooks/useTaskParams";

export default function Task() {
    const {
        isModalOpen,
        taskToEdit,
        contentId,
        isContentOpen,
        handleIsContentId,
        handleIsContentOpen,
        handleOpenEditModal,
        handleCloseModal
    } = useTaskParams();
    
    return (
        <Container 
            variant="main" 
            className={"w-full h-full flex flex-col md:flex-row gap-4 min-h-0 overflow-y-auto md:overflow-hidden"}
        >
            <TaskDisplay 
                contentId={contentId}
                isPanelOpen={isContentOpen}
                onIsContentId={handleIsContentId}
                onContentOpen={handleIsContentOpen} 
                onOpenEditModal={handleOpenEditModal}  
            />
            <TaskContent 
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