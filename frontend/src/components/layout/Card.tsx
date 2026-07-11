import { RxExclamationMark } from "react-icons/rx";
import { TbCircle, TbCircleCheck, TbPencil, TbTrash } from "react-icons/tb";

import Menus from "./Menu";
import Container from "./Container";
import Conditional from "./Conditional";
import Paragraph from "@/components/ui/Paragraph";

import type { Task } from "@/api/todos";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";

interface TaskProps {
  task: Task;
  undoText?: string;
  isSelected?: boolean;
  onEdit: (id: string) => void;
  onUndo?: (id: string) => void;
  onComplete?: (id: string) => void;
  onIsContentId?: (id: string) => void;
  onContentOpen?: (open: boolean) => void;
  onDelete: (title: string, id: string) => void;
}

export default function Card({
  task,
  onEdit,
  onDelete,
  isSelected,
  onComplete,
  onIsContentId,
  onContentOpen,
}: TaskProps) {
  const { updateTask } = useUpdateTask();

  function handleMarkAsVital(id: string, isVital: boolean) {
    updateTask({
      id,
      data: { isVital },
      successMessage: isVital
        ? "Task marked as vital"
        : "Task removed from vital",
    });
  }

  function handleContentOpen() {
    onContentOpen?.(true);
    onIsContentId?.(task._id);
  }

  return (
    <Container
      variant="div"
      className={`flex flex-col gap-4 border border-gray-400 rounded-2xl px-4 py-2 ${isSelected ? "bg-gray" : ""}`}
    >
      <Container
        variant="div"
        className={"flex items-center justify-between gap-2"}
      >
        <Container
          variant="div"
          className={
            "flex items-center gap-2 w-full max-w-[75%] md:max-w-[80%] min-w-0"
          }
        >
          {task.completed ? (
            <TbCircleCheck
              style={{ color: task.status.color }}
              className="shrink-0"
              size={20}
            />
          ) : (
            <TbCircle
              style={{ color: task.status.color }}
              className="shrink-0"
              size={20}
            />
          )}
          <Paragraph className={"truncate min-w-0 text-xl font-bold text-dark"}>
            {task.title}
          </Paragraph>
        </Container>

        <Menus>
          <Menus.Toggle />
          <Menus.Lists>
            <Conditional
              condition={task.completed === false && task.isVital === true}
            >
              <Menus.Buttons onClick={() => handleMarkAsVital(task._id, false)}>
                <RxExclamationMark />
                Remove from Vital
              </Menus.Buttons>
            </Conditional>
            <Conditional
              condition={task.completed === false && task.isVital === false}
            >
              <Menus.Buttons onClick={() => handleMarkAsVital(task._id, true)}>
                <RxExclamationMark />
                Vital
              </Menus.Buttons>
            </Conditional>
            <Menus.Buttons onClick={() => onEdit(task._id)}>
              <TbPencil />
              Edit
            </Menus.Buttons>
            <Menus.Buttons onClick={() => onDelete(task.title, task._id)}>
              <TbTrash />
              Delete
            </Menus.Buttons>
            <Conditional condition={task.completed === false}>
              <Menus.Buttons onClick={() => onComplete && onComplete(task._id)}>
                <TbCircleCheck />
                Finish
              </Menus.Buttons>
            </Conditional>
          </Menus.Lists>
        </Menus>
      </Container>

      <div
        role="button"
        onClick={task.completed === true ? undefined : handleContentOpen}
        className={`${task.completed === true ? "" : "cursor-pointer"} px-4`}
      >
        <Container variant="div" className={"flex flex-row gap-2 text-sm"}>
          <Paragraph className={"line-clamp-3 w-2/3 h-19 text-gray-600"}>
            {task.description}
          </Paragraph>
          {task.image ? (
            <img
              src={task.image}
              alt={task.title}
              className={
                "w-1/3 h-19 object-cover rounded-xl border border-gray-400"
              }
            />
          ) : (
            <Container
              variant="div"
              className={
                "w-1/3 h-19 border border-gray-400 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] text-gray-400"
              }
            >
              No Image
            </Container>
          )}
        </Container>

        <Container
          variant="div"
          className={
            "mt-4 w-full rounded-md text-xs flex flex-row flex-wrap items-center justify-between text-gray-500"
          }
        >
          <Conditional condition={task.completed === false}>
            <Paragraph variant="small" className={"flex items-center gap-1"}>
              Priority:
              <span
                style={{ color: task.priority.color }}
                className={"font-semibold"}
              >
                {task.priority.label}
              </span>
            </Paragraph>
          </Conditional>
          <Paragraph variant="small" className={"flex items-center gap-1"}>
            Status:
            <span
              style={{ color: task.status.color }}
              className={"font-semibold flex items-center flex-row"}
            >
              {task.status.label}
            </span>
          </Paragraph>
          <Paragraph variant="small">
            {task.completed
              ? formatTimeAgo(task.updatedAt)
              : task.createdAt
                ? `Created on: ${new Date(task.createdAt).toLocaleDateString()}`
                : "Unknown"}
          </Paragraph>
        </Container>
      </div>
    </Container>
  );
}

function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Completed just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `Completed ${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `Completed ${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return `Completed ${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `Completed ${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
  }

  const diffInYears = Math.floor(diffInMonths / 12);
  return `Completed ${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
}
