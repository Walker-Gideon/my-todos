import type { Task } from "@/api/todos";

export const parseDueDate = (value?: string) => {
  if (!value) return null;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getNotificationSections = (
  todos: Task[] = [],
  completedTodos: Task[] = [],
) => {
  const today = new Date();
  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const allTasks = [...todos, ...completedTodos].filter(
    (task, index, array) =>
      array.findIndex((candidate) => candidate._id === task._id) === index,
  );

  const completedTasks = allTasks.filter((task) => task.completed);
  const activeTasks = allTasks.filter((task) => !task.completed);

  const dueTasks = activeTasks.filter((task) => {
    const taskDueDate = parseDueDate(task.dueDate);
    return taskDueDate && taskDueDate.getTime() === startOfToday.getTime();
  });

  const overdueTasks = activeTasks.filter((task) => {
    const taskDueDate = parseDueDate(task.dueDate);
    return taskDueDate && taskDueDate.getTime() < startOfToday.getTime();
  });

  const upcomingTasks = activeTasks.filter((task) => {
    const taskDueDate = parseDueDate(task.dueDate);
    return taskDueDate && taskDueDate.getTime() > startOfToday.getTime();
  });

  const nextTask = [...upcomingTasks].sort((firstTask, secondTask) => {
    const firstValue = firstTask.dueDate
      ? (parseDueDate(firstTask.dueDate)?.getTime() ?? Number.MAX_SAFE_INTEGER)
      : Number.MAX_SAFE_INTEGER;
    const secondValue = secondTask.dueDate
      ? (parseDueDate(secondTask.dueDate)?.getTime() ?? Number.MAX_SAFE_INTEGER)
      : Number.MAX_SAFE_INTEGER;

    return firstValue - secondValue;
  })[0];

  const remainingTasks = activeTasks.filter((task) => {
    if (task._id === nextTask?._id) return false;
    if (dueTasks.some((dueTask) => dueTask._id === task._id)) return false;
    if (overdueTasks.some((overdueTask) => overdueTask._id === task._id))
      return false;

    return true;
  });

  const sections = [
    {
      title: "Completed",
      items: completedTasks.slice(0, 3),
    },
    {
      title: "Next task",
      items: nextTask ? [nextTask] : [],
    },
    {
      title: "In progress",
      items: remainingTasks.slice(0, 3),
    },
    {
      title: "Due",
      items: dueTasks.slice(0, 3),
    },
    {
      title: "Overdue",
      items: overdueTasks.slice(0, 3),
    },
  ];

  return {
    sections,
    totalCount: sections.reduce(
      (count, section) => count + section.items.length,
      0,
    ),
  };
};
