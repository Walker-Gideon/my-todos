import VitalTaskDisplay from "./components/VitalTaskDisplay";
import VitalTaskContent from "./components/VitalTaskContent";
import AnimationWraper from "@/components/layout/AnimationWraper";
import CreateTaskModal from "@/components/layout/CreateTaskModal";

import { useTaskParams } from "@/components/hooks/useTaskParams";

export default function VitalTask() {
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
    </AnimationWraper>
  );
}
