import { useState } from "react";
import { TbPlus, TbClipboard } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Card from "@/components/layout/Card";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import SubHeading from "@/components/layout/SubHeading";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";
import ConfirmDelete from "@/components/layout/ConfirmedDelete";

import type { Task } from "@/api/todos";
import { useGeneral } from "@/context/useGeneralContext";
import { useDateFormat } from "@/components/hooks/useDateFormat";
import { useDeleteTodo } from "@/components/hooks/useDeleteTodo";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

interface DashboardTodosProps {
  onIsContentId: (id: string) => void;
  onOpenModal: () => void;
  onEditTask: (task: Task) => void;
  onContentOpen: (open: boolean) => void;
}

export default function DashboardTodos({
  onEditTask,
  onIsContentId,
  onOpenModal,
  onContentOpen,
}: DashboardTodosProps) {
  return (
    <ShadowBox
      border={true}
      className={
        "p-4 flex flex-1 flex-col h-full max-h-120 min-h-0 md:max-h-none"
      }
    >
      <DashboardTodosHeader onOpenModal={onOpenModal} />
      <DashboardTodosList
        onEditTask={onEditTask}
        onIsContentId={onIsContentId}
        onContentOpen={onContentOpen}
      />
    </ShadowBox>
  );
}

function DashboardTodosHeader({ onOpenModal }: { onOpenModal: () => void }) {
  const { day, monthInWords } = useDateFormat();

  return (
    <Container variant="header" className={"w-full flex flex-col gap-2"}>
      <Container
        variant="div"
        className={"w-full flex flex-row items-center justify-between"}
      >
        <SubHeading icon={<TbClipboard size={24} />} subheading={"To-Do"} />
        <Button
          variant="text"
          ariaLabel="Add task"
          onClick={onOpenModal}
          className={
            "group w-auto flex items-center gap-1 font-regular text-gray hover:text-secondary transition-primary"
          }
        >
          <TbPlus
            className={
              "w-4 h-4 group-hover:rounded-full group-hover:bg-secondary group-hover:text-col-white transition-primary text-secondary"
            }
          />
          <Span>Add task</Span>
        </Button>
      </Container>
      <Container variant="div" className={"w-full flex flex-col gap-4"}>
        <Paragraph className={"text-dark flex items-center gap-2 text-sm"}>
          {day}
          {", "}
          {monthInWords}
          <Span className={"text-gray flex items-center justify-center gap-1"}>
            <span className={"w-1.5 h-1.5 rounded-full bg-[#A1A3AB]"} />
            <Span>Today</Span>
          </Span>
        </Paragraph>
      </Container>
    </Container>
  );
}

function DashboardTodosList({
  onEditTask,
  onIsContentId,
  onContentOpen,
}: {
  onEditTask: (task: Task) => void;
  onIsContentId: (id: string) => void;
  onContentOpen: (open: boolean) => void;
}) {
  const { query } = useGeneral();
  const { updateTask } = useUpdateTask();
  const { deleteTodo, isPending } = useDeleteTodo();
  const { todos, isLoading, error } = useGetTodosTask();

  const [isDeleteTitle, setIsDeleteTitle] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTodos = (todos ?? []).filter((task: Task) => {
    if (!normalizedQuery) return true;

    const searchableText = [
      task.title,
      task.description,
      task.priority?.label,
      task.status?.label,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  function handelConfirmDelete() {
    deleteTodo(isDeleteModalOpen, {
      onSuccess: () => {
        setIsDeleteModalOpen("");
        setIsDeleteTitle("");
      },
    });
  }

  function handelCloseDeleteModal() {
    setIsDeleteModalOpen("");
    setIsDeleteTitle("");
  }

  if (isLoading) return <Information value="Loading tasks..." />;
  if (error) return <Information value="Error while loading tasks." />;

  return (
    <Container
      variant="main"
      className={
        "w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"
      }
    >
      <Conditional condition={!todos || todos.length === 0}>
        <Information
          value={query.trim() ? "No tasks match your search." : "No tasks yet"}
        />
      </Conditional>

      <Conditional
        condition={
          !!todos &&
          todos.length > 0 &&
          filteredTodos.length === 0 &&
          !!query.trim()
        }
      >
        <Information value="No tasks match your search." />
      </Conditional>

      <Conditional condition={filteredTodos.length > 0}>
        {filteredTodos.map((task: Task) => (
          <Card
            key={task._id}
            task={task}
            onContentOpen={onContentOpen}
            onEdit={() => onEditTask(task)}
            onIsContentId={(id: string) => onIsContentId(id)}
            onDelete={(title, id) => {
              setIsDeleteModalOpen(id);
              setIsDeleteTitle(title);
            }}
            onComplete={(id) => {
              updateTask({
                id,
                data: { completed: true },
              });
            }}
          />
        ))}
      </Conditional>

      <ConfirmDelete
        disabled={isPending}
        show={!!isDeleteModalOpen}
        resourceName={isDeleteTitle}
        onConfirm={handelConfirmDelete}
        onCloseModal={handelCloseDeleteModal}
      />
    </Container>
  );
}
