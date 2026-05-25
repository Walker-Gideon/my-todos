import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { RxExclamationMark } from "react-icons/rx";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import Information from "@/components/layout/Information";
import Conditional from "@/components/layout/Conditional";
import ConfirmDelete from "@/components/layout/ConfirmedDelete";
import ModalBackButton from "@/components/layout/ModalBackButton";

import type { Task } from "@/api/todos";
import { useDeleteTodo } from "@/components/hooks/useDeleteTodo";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

interface DashboardCardContentProps {
  contentId?: string;
  onEditTask: (task: Task) => void;
  onContentOpen: (open: boolean) => void;
}

interface CardContentStyling {
  icon: string;
  iconSize: string;
}

export default function DashboardCardContent({
  contentId: propContentId,
  onEditTask,
  onContentOpen,
}: DashboardCardContentProps) {
  const { updateTask } = useUpdateTask();
  const { todos, isLoading } = useGetTodosTask();
  const { deleteTodo, isPending } = useDeleteTodo();

  const [searchParams] = useSearchParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");

  const contentId = propContentId || searchParams.get("task") || "";
  const task = todos?.find((t: Task) => t._id === contentId) || null;

  function handleMarkAsVital(id: string) {
    updateTask({
      id,
      data: { isVital: true },
    });
  }

  function handleEditTask(){
    onEditTask?.(task);
  }

  function handelDeleteModal() {
    setIsDeleteModalOpen(task._id);
  }

  function handelConfirmDelete() {
    deleteTodo(isDeleteModalOpen, {
      onSuccess: () => {
        setIsDeleteModalOpen("");
        onContentOpen?.(false);
      },
    });
  }

  function handelCloseDeleteModal() {
    setIsDeleteModalOpen("");
  }

  const styling: CardContentStyling = {
    icon: "text-col-white bg-primary p-1.5 rounded-md",
    iconSize: "w-5 h-5 group-hover:scale-80 transition-all duration-300",
  };

  return (
    <>
      <Conditional condition={isLoading}>
        <Information value="Loading..." />
      </Conditional>
      <Container
        variant="div"
        className={
          "md:px-4 md:px-6 md:py-4 flex flex-col w-full min-h-130 md:min-h-120 max-h-120 md:max-h-none mb-4 md:mb-0 space-y-4 md:border md:border-gray-300"
        }
      >
        {/* header content */}
        <Container variant="header" className={"w-full flex flex-col md:flex-row gap-4"}>
          <TitleAndAction 
            title={task.title} 
            onContentOpen={onContentOpen} 
            className={"md:hidden w-full"} 
          />
          <Container
            variant="div"
            className={"flex flex-row items-center gap-2 w-full md:w-1/3"}
          >
            <img
              src={task.image}
              alt={task.title}
              className={"w-full object-cover border border-gray-400 rounded-xl h-40"}
            />
          </Container>
          <Container
            variant="div"
            className={`w-full text-base flex flex-wrap md:flex-col items-center md:items-start gap-1 md:gap-0 space-x-4 md:space-x-0 md:space-y-2`}
          >
            <TitleAndAction 
              title={task.title} 
              onContentOpen={onContentOpen} 
              className={"hidden md:flex w-full"} 
            />
            <Paragraph variant="small" className={"flex flex-row gap-1"}>
              <Span>Priority:</Span>
              <Span style={{ color: task?.priority.color }}>
                {task?.priority.label}
              </Span>
            </Paragraph>
            <Paragraph variant="small" className={"flex flex-row gap-1"}>
              <Span>Status:</Span>
              <Span style={{ color: task?.status.color }}>
                {task?.status.label}
            </Span>
            </Paragraph>
            <Paragraph className={"text-xs text-gray"}>
              {`Created on: ${new Date(task.createdAt).toLocaleDateString()}`}
            </Paragraph>
          </Container>
        </Container>

        {/* content */}
        <Container
          variant="main"
          className={"w-full flex-1 overflow-y-auto py-2 md:px-2"}
        >
          <Paragraph
            className={
              "w-full text-justify text-base text-dark leading-relaxed"
            }
          >
            {task.description}
          </Paragraph>
        </Container>

        {/* footer */}
        <Container
          variant="footer"
          className={"w-full flex flex-row items-end justify-end gap-3 mb-2 md:mb-0"}
        >
          <Button
            ariaLabel="Delete Task"
            onClick={handelDeleteModal}
            className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
          >
            <MdDelete className={styling["iconSize"]} />
          </Button>
          <Button
            ariaLabel="Edit Task"
            onClick={handleEditTask}
            className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
          >
            <LiaEdit className={styling["iconSize"]} />
          </Button>
          <Button
            ariaLabel="Vital Task"
            onClick={() => handleMarkAsVital(task._id)}
            className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
          >
            <RxExclamationMark className={styling["iconSize"]} />
          </Button>
        </Container> 
      </Container>
      <ConfirmDelete
        disabled={isPending}
        resourceName={task.title}
        show={!!isDeleteModalOpen}
        onConfirm={handelConfirmDelete}
        onCloseModal={handelCloseDeleteModal}
      />
    </>
  );
}

function TitleAndAction({
  title,
  className,
  onContentOpen,
}: {
  title: string;
  className?: string;
  onContentOpen: (open: boolean) => void;
}) {
  return (
    <Container
      variant="header"
      className={`w-full flex items-center justify-between ${className}`}
    >
      <Paragraph className={"text-dark text-xl font-semibold truncate min-w-0 w-70"}>{title}</Paragraph>
      <ModalBackButton onClick={() => onContentOpen(false)} />
    </Container>
  );
}