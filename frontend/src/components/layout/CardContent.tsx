import { useState } from "react";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { RxExclamationMark } from "react-icons/rx";

import Container from "./Container";
import ShadowBox from "./ShadowBox";
import Conditional from "./Conditional";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import ModalBackButton from "./ModalBackButton";
import Paragraph from "@/components/ui/Paragraph";
import Information from "@/components/layout/Information";
import ConfirmDelete from "@/components/layout/ConfirmedDelete";

import type { Task } from "@/api/todos";
import { useDeleteTodo } from "@/components/hooks/useDeleteTodo";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

interface CardContentProps {
  board?: boolean;
  contentId?: string;
  className?: string;
  onEditTask?: (task: Task) => void;
  onContentOpen?: (open: boolean) => void;
}

interface CardContentStyling {
  icon: string;
  iconSize: string;
}

export default function CardContent({
  board,
  contentId,
  className,
  onEditTask,
  onContentOpen,
}: CardContentProps) {
  /*
  const { updateTask } = useUpdateTask();
  const { todos, isLoading } = useGetTodosTask();
  const { deleteTodo, isPending } = useDeleteTodo();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");

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
  */

  const styling: CardContentStyling = {
    icon: "text-col-white bg-primary p-1.5 rounded-md",
    iconSize: "w-5 h-5 group-hover:scale-80 transition-all duration-300",
  };
  //min-h-120 max-h-120

  return (
    <>
      <ShadowBox
        className={`px-4 md:px-6 flex flex-col w-full min-h-130 max-h-120 md:max-h-none mb-4 md:mb-0 space-y-4 md:border md:border-gray-300 ${board ? "" : "md:w-3/5"} ${className}`}
      >
        {/* <Conditional condition={!isLoading}> */}
        <Conditional condition={true}>
          {/* header content */}
          <Container variant="header" className={"w-full flex flex-row gap-4"}>
            <Container
              variant="div"
              className={`flex flex-row items-center gap-2 ${board ? "w-1/3" : "w-1/2"}`}
            >
              <img
                // src={task.image}
                // alt={task.title}
                src={""}
                alt=""
                className={`w-full border border-gray-400 rounded-xl ${board ? "h-40" : "h-30"}`}
              />
            </Container>

            <Container
              variant="div"
              className={`w-full space-y-2 text-base flex flex-col ${board ? "" : "items-start justify-end"}`}
            >
              <Container
                variant="div"
                className={`${board ? "w-full flex items-center justify-between" : ""}`}
              >
                <Paragraph
                  className={
                    "text-dark text-xl font-semibold truncate min-w-0 w-70"
                  }
                >
                  {/* {task?.title || "Task Title"} */}
                  Task Title
                </Paragraph>
                <Conditional condition={board}>
                  <ModalBackButton
                    onClick={() => onContentOpen && onContentOpen(false)}
                  />
                </Conditional>
              </Container>
              <Paragraph variant="small" className={"flex flex-row gap-1"}>
                <Span>Priority:</Span>
                <Span >
                  {/* style={{ color: task?.priority.color }} */}
                  {/* {task?.priority.label} */}
                  Priority
                </Span>
              </Paragraph>
              <Paragraph variant="small" className={"flex flex-row gap-1"}>
                <Span>Status:</Span>
                <Span>
                  {/* style={{ color: task?.status.color }} */}
                  {/* {task?.status.label} */}
                  Status
                </Span>
              </Paragraph>
              <Paragraph className={"text-xs text-gray"}>
                {/* {`Created on: ${new Date(task.createdAt).toLocaleDateString()}`} */}
                Created on: 11/11/1111
              </Paragraph>
            </Container>
          </Container>

          <Container
            variant="main"
            className={"w-full flex-1 overflow-y-auto p-2"}
          >
            <Paragraph
              className={
                "w-full text-justify text-base text-dark leading-relaxed"
              }
            >
              {/* {task.description} */}
              Task Description
            </Paragraph>
          </Container>

          <Container
            variant="footer"
            className={"w-full flex flex-row items-end justify-end gap-3"}
          >
            <Button
              ariaLabel="Delete Task"
              // onClick={handelDeleteModal}
              className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
            >
              <MdDelete className={styling["iconSize"]} />
            </Button>
            <Button
              ariaLabel="Edit Task"
              // onClick={handleEditTask}
              className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
            >
              <LiaEdit className={styling["iconSize"]} />
            </Button>
            <Conditional condition={board}>
              <Button
                ariaLabel="Vital Task"
                // onClick={() => handleMarkAsVital(task._id)}
                className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
              >
                <RxExclamationMark className={styling["iconSize"]} />
              </Button>
            </Conditional>
          </Container>
        </Conditional>

        {/* <Conditional condition={isLoading}>
        </Conditional> */}
        <Conditional condition={false}>
          <Information value="Loading..." />
        </Conditional>
      </ShadowBox>
      {/* <ConfirmDelete
        disabled={isPending}
        resourceName={task.title}
        show={!!isDeleteModalOpen}
        onConfirm={handelConfirmDelete}
        onCloseModal={handelCloseDeleteModal}
      /> */}
    </>
  );
}
