import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import DashboardCompleted from "./components/DashboardCompleted";
import CreateTaskModal from "@/components/layout/CreateTaskModal";
import DashboardCardContent from "./components/DashboardCardContent";

import type { Task } from "@/api/todos";

export default function Dashboard() {
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
      searchParams.delete("task");
      setSearchParams(searchParams);
    }
  }

  function handleModal() {
    setTaskToEdit(null);
    setIsModalOpen(!isModalOpen);
  }

  function handleCloseModal() {
    setTaskToEdit(null);
    setIsModalOpen(false);
  }

  function handleOpenEditModal(task: Task) {
    setTaskToEdit(task);
    setIsModalOpen(true);
  }

  return (
    <Container variant="main" className={"w-full h-full min-h-0 flex-1"}>
      <AnimatePresence mode="wait">
        {!isContentOpen ? (
          <motion.div
            key="todos-list"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={"w-full h-full min-h-0 flex flex-1 flex-col"}
          >
            <DashboardHeader />
            <ShadowBox
              className={
                "w-full h-full flex-1 min-h-0 flex flex-col md:flex-row gap-4 medium:p-4 md:border md:border-gray-300 overflow-y-auto md:overflow-hidden pb-4"
              }
            >
              <Container
                variant="div"
                className={
                  "w-full md:w-3/5 flex-none md:flex-1 min-w-0 flex flex-col order-2 md:order-1"
                }
              >
                <DashboardTodos
                  onOpenModal={handleModal}
                  onIsContentId={handleIsContentId}
                  onContentOpen={handleIsContentOpen}
                  onEditTask={handleOpenEditModal}
                />
              </Container>
              <Container
                variant="div"
                className={
                  "w-full md:w-2/5 flex-none md:flex-1 min-w-0 flex flex-col gap-4 order-1 md:order-2"
                }
              >
                <DashboardStatus />
                <DashboardCompleted onEditTask={handleOpenEditModal} />
              </Container>
            </ShadowBox>
          </motion.div>
        ) : (
          <DashboardCardContent
            contentId={contentId}
            onContentOpen={handleIsContentOpen}
            onEditTask={handleOpenEditModal}
          />
        )}
      </AnimatePresence>
      <CreateTaskModal
        show={isModalOpen}
        onCloseModal={handleCloseModal}
        fristWord={taskToEdit ? "Edit Ta" : "Add New Ta"}
        secondWord="sk"
        taskToEdit={taskToEdit}
      />
    </Container>
  );
}
