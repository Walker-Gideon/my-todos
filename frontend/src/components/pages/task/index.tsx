import TaskDisplay from "./components/TaskDisplay";
import TaskContent from "./components/TaskContent";
import CreateTaskModal from "@/components/layout/CreateTaskModal";
import AnimationWraper from "@/components/layout/AnimationWraper";

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
    handleCloseModal,
  } = useTaskParams();

  return (
    <AnimationWraper className={"w-full h-full min-h-0 flex flex-1 md:gap-4"}>
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
    </AnimationWraper>
  );
}
