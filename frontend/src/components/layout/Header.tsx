import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SlActionUndo } from "react-icons/sl";
import {
  TbBell,
  TbCalendarWeek,
  TbChevronLeft,
  TbChevronRight,
  TbMenu2,
  TbSearch,
} from "react-icons/tb";

import Span from "@/components/ui/Span";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Headings from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import Information from "@/components/layout/Information";

import type { Task } from "@/api/todos";
import { useGeneral } from "@/context/useGeneralContext";
import { useDateFormat } from "@/components/hooks/useDateFormat";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";
import { useGetCompletedTodos } from "@/components/hooks/useGetCompletedTodos";

import {
  getNotificationSections,
  parseDueDate,
} from "@/components/hooks/useNotification";

type StylingProps = {
  inputContainer: string;
  input: string;
  icon: string;
  iconSize: string;
};

export default function Header({
  menuOpen,
  onMenuClick,
}: {
  menuOpen: boolean;
  onMenuClick: () => void;
}) {
  const { heading } = useGeneral();
  const [openModal, setOpenModal] = useState<
    "notification" | "calendar" | null
  >(null);

  const location = useLocation();
  const { dayInWords, day, monthInWords, year } = useDateFormat();
  const shouldShowSearch = ["/dashboard", "/my-task", "/vital-task"].includes(
    location.pathname,
  );
  const isDashboardRoute = location.pathname === "/dashboard";

  const toggleModal = (modal: "notification" | "calendar" | null) => {
    setOpenModal((currentModal) => (currentModal === modal ? null : modal));
  };

  const styling = {
    inputContainer:
      "w-full flex items-center border border-white rounded-md text-sm hover:border-primary focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 shadow-md shadow-primary/50 transition-all",
    input: "w-full focus:outline-none p-1.5 px-3 bg-transparent",
    icon: "text-col-white bg-primary p-1.5 rounded-md",
    iconSize: "w-5 h-5 group-hover:scale-80 transition-all duration-300",
  };

  const getHeadingParts = (value: string) => {
    if (!value) return ["", ""];

    const spaceIndex = value.indexOf(" ");
    const hyphenIndex = value.indexOf("-");

    if (spaceIndex > 0) {
      return [value.slice(0, spaceIndex), value.slice(spaceIndex)];
    }

    if (hyphenIndex > 0) {
      return [value.slice(0, hyphenIndex), value.slice(hyphenIndex)];
    }

    if (value.length <= 4) {
      return [value, ""];
    }

    return [value.slice(0, 4), value.slice(4)];
  };

  const [primaryHeading, secondaryHeading] = getHeadingParts(heading);

  return (
    <Container
      variant="header"
      className={
        "relative w-full md:h-20 bg-col-white-2 mb-6 md:mb-7 py-4 px-4 md:px-8 max-w-screen-2xl mx-auto shrink-0 shadow-md shadow-primary/50"
      }
    >
      <Container
        variant="div"
        className={
          "w-full flex items-center justify-between gap-4 lg:space-x-32"
        }
      >
        <Container variant="div" className={"flex items-center gap-4"}>
          <Button
            ariaLabel={menuOpen ? "Close Menu" : "Open Menu"}
            onClick={onMenuClick}
            className={`${styling["icon"]} md:hidden group`}
          >
            <TbMenu2 size={20} />
          </Button>
          <Headings
            variant="h1"
            className={
              "flex items-center font-semibold text-xl md:text-[1.7rem] lg:text-3xl w-40"
            }
          >
            <Span className={"text-primary"}>{primaryHeading}</Span>
            <Span className={"text-dark"}>{secondaryHeading}</Span>
          </Headings>
        </Container>

        <Container
          variant="div"
          className={`flex items-center justify-between md:w-full h-full gap-4 lg:space-x-16 ${shouldShowSearch ? "md:justify-between" : "md:w-full md:justify-end lg:space-x-16"}`}
        >
          {shouldShowSearch && (
            <Container variant="div" className={"w-full hidden md:block"}>
              <SearchBar styling={styling} disabled={!isDashboardRoute} />
            </Container>
          )}

          <Container
            variant="div"
            className={"relative flex items-center gap-4 md:space-x-8 shrink-0"}
          >
            <NotificationAndDate onOpen={toggleModal} styling={styling} />
            {openModal === "notification" && (
              <NotificationContent onClose={toggleModal} />
            )}
            {openModal === "calendar" && (
              <CalendarContent onClose={toggleModal} />
            )}

            <Container
              variant="div"
              className={
                "hidden medium:flex flex-col items-center justify-center"
              }
            >
              <Paragraph variant="large" className={"font-medium text-dark"}>
                {dayInWords}
              </Paragraph>
              <Paragraph variant="small" className={"font-medium text-blue"}>
                {day}/{monthInWords}/{year}
              </Paragraph>
            </Container>
          </Container>
        </Container>
      </Container>

      {shouldShowSearch && (
        <Container variant="div" className={"md:hidden mt-6"}>
          <SearchBar styling={styling} disabled={!isDashboardRoute} />
        </Container>
      )}
    </Container>
  );
}

function SearchBar({
  styling,
  disabled,
}: {
  styling: StylingProps;
  disabled: boolean;
}) {
  const { query, setQuery } = useGeneral();
  const location = useLocation();
  const isDashboardRoute = location.pathname === "/dashboard";

  useEffect(() => {
    if (!isDashboardRoute) {
      setQuery("");
    }
  }, [isDashboardRoute, setQuery]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={styling["inputContainer"]}>
      <Input
        type="text"
        defaultStyling={false}
        placeholder="Search your task here..."
        className={styling["input"]}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={disabled}
      />
      <Button
        type="submit"
        ariaLabel="Search query"
        className={`${styling["icon"]} group`}
      >
        <TbSearch className={styling["iconSize"]} />
      </Button>
    </form>
  );
}

function NotificationAndDate({
  styling,
  onOpen,
}: {
  styling: StylingProps;
  onOpen: (modal: "notification" | "calendar") => void;
}) {
  const { todos } = useGetTodosTask();
  const { completedTodos } = useGetCompletedTodos();
  const { totalCount } = getNotificationSections(
    todos ?? [],
    completedTodos ?? [],
  );

  return (
    <Container variant="div" className={"flex items-center gap-4"}>
      <Button
        ariaLabel="Notifications"
        onClick={() => onOpen("notification")}
        className={`relative shadow-lg shadow-primary/50 group ${styling["icon"]}`}
      >
        <TbBell className={styling["iconSize"]} />
        {totalCount > 0 && (
          <span className="absolute -right-1 -top-1 flex min-h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
            {totalCount > 99 ? "99+" : totalCount}
          </span>
        )}
      </Button>
      <Button
        ariaLabel="Calendar"
        onClick={() => onOpen("calendar")}
        className={`shadow-lg shadow-primary/50 group ${styling["icon"]}`}
      >
        <TbCalendarWeek className={styling["iconSize"]} />
      </Button>
    </Container>
  );
}

function NotificationContent({
  onClose,
}: {
  onClose: (modal: "notification" | "calendar" | null) => void;
}) {
  const { todos, isLoading, error } = useGetTodosTask();
  const {
    completedTodos,
    isLoading: onLoading,
    error: onError,
  } = useGetCompletedTodos();

  const formatDueDate = (value?: string) => {
    const parsedDate = parseDueDate(value);

    if (!parsedDate) return "No due date";

    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const { sections } = getNotificationSections(
    todos ?? [],
    completedTodos ?? [],
  );

  return (
    <Container
      variant="div"
      className={
        "absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-xl border border-stone-300 bg-white shadow-xl shadow-primary/20"
      }
    >
      <Container
        variant="header"
        className={
          "flex items-center justify-between border-b border-stone-300 bg-white px-4 py-3"
        }
      >
        <Container variant="header" className={"flex flex-col"}>
          <Paragraph className={"font-semibold text-dark"}>
            Notifications
          </Paragraph>
          <Paragraph variant="small" className={"text-gray-500"}>
            Today
          </Paragraph>
        </Container>
        <Button
          variant="text"
          onClick={() => onClose(null)}
          className={"text-btn-col hover:text-btn-col/80"}
        >
          <SlActionUndo size={24} />
        </Button>
      </Container>

      <Container
        variant="main"
        className={"h-80 overflow-y-auto bg-gray-50 px-4 py-3"}
      >
        {isLoading || onLoading ? (
          <Information value="Loading notifications..." />
        ) : error || onError ? (
          <Information value="Unable to load notifications." />
        ) : sections.every((section) => section.items.length === 0) ? (
          <Information value="No notifications." />
        ) : (
          sections.map((section) => (
            <Container
              key={section.title}
              variant="div"
              className={"mb-4 last:mb-0"}
            >
              {section.items.map((task: Task) => (
                <Container
                  key={task._id}
                  variant="div"
                  className={
                    "mb-2 flex items-center justify-between last:mb-0 px-2"
                  }
                >
                  <Container
                    variant="div"
                    className={"w-4/6 flex flex-col gap-1"}
                  >
                    <Paragraph
                      variant="small"
                      className={"line-clamp-2 font-medium text-gray-500"}
                    >
                      {section.title === "Completed"
                        ? "Complete the"
                        : section.title === "Next task"
                          ? "Next task"
                          : section.title === "Due"
                            ? "Due today"
                            : section.title === "Overdue"
                              ? "Overdue task"
                              : "In progress task"}{" "}
                      <span className={"text-dark font-bold"}>
                        {task.title}
                      </span>
                    </Paragraph>
                    <Paragraph className={"mt-1 text-gray-500 text-xs"}>
                      Priority{" "}
                      <span style={{ color: task.priority?.color }}>
                        {" "}
                        {task.priority?.label ?? "No priority"}{" "}
                      </span>{" "}
                      • {formatDueDate(task.dueDate)}
                    </Paragraph>
                  </Container>
                  <Container
                    variant="div"
                    className={"w-2/6 flex items-center justify-end"}
                  >
                    {task.image ? (
                      <img
                        src={task.image}
                        alt={task.title}
                        className={
                          "w-[80%] h-18 object-cover rounded-xl border border-gray-400"
                        }
                      />
                    ) : (
                      <Container
                        variant="div"
                        className={
                          "w-[80%] h-18 border border-gray-400 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] text-gray-400"
                        }
                      >
                        No Image
                      </Container>
                    )}
                  </Container>
                </Container>
              ))}
            </Container>
          ))
        )}
      </Container>
    </Container>
  );
}

function CalendarContent({
  onClose,
}: {
  onClose: (modal: "notification" | "calendar" | null) => void;
}) {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputValue, setInputValue] = useState("");

  const monthLabel = viewDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const placeholderValue = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const startOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
  const firstDayOffset = (startOfMonth.getDay() + 6) % 7;

  const calendarDays = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(startOfMonth);
    day.setDate(startOfMonth.getDate() - firstDayOffset + index);
    return day;
  });

  const isSameDay = (first: Date, second: Date) =>
    first.toDateString() === second.toDateString();

  const handleDateInput = (value: string) => {
    setInputValue(value);

    const parsedDate = new Date(value);
    if (!Number.isNaN(parsedDate.getTime())) {
      const normalizedDate = new Date(parsedDate);
      setSelectedDate(normalizedDate);
      setViewDate(
        new Date(normalizedDate.getFullYear(), normalizedDate.getMonth(), 1),
      );
    }
  };

  return (
    <Container
      variant="div"
      className={
        "absolute right-0 top-full z-50 mt-3 w-80 overflow-hidden rounded-xl border border-stone-300 bg-white shadow-xl shadow-primary/20"
      }
    >
      <Container
        variant="div"
        className={"flex items-center justify-between bg-white px-4 py-3"}
      >
        <Paragraph className={"font-semibold text-dark"}>Calendar</Paragraph>
        <Button
          variant="text"
          onClick={() => onClose(null)}
          className={"text-btn-col hover:text-btn-col/80"}
        >
          <SlActionUndo size={24} />
        </Button>
      </Container>

      <Container variant="div" className={"w-full px-4 pb-4"}>
        <input
          type="text"
          value={inputValue || placeholderValue}
          onChange={(event) => handleDateInput(event.target.value)}
          placeholder={placeholderValue}
          className={
            "w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          }
        />

        <Container
          variant="div"
          className={"mt-3 flex items-center justify-between"}
        >
          <Button
            ariaLabel="Previous month"
            variant="text"
            onClick={() =>
              setViewDate(
                new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1),
              )
            }
            className={"rounded-full p-1 text-dark hover:bg-gray-100"}
          >
            <TbChevronLeft size={18} />
          </Button>
          <Paragraph className={"text-sm font-semibold text-dark"}>
            {monthLabel}
          </Paragraph>
          <Button
            ariaLabel="Next month"
            variant="text"
            onClick={() =>
              setViewDate(
                new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1),
              )
            }
            className={"rounded-full p-1 text-dark hover:bg-gray-100"}
          >
            <TbChevronRight size={18} />
          </Button>
        </Container>

        <Container
          variant="div"
          className={
            "mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-gray-500"
          }
        >
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </Container>

        <Container
          variant="main"
          className={"mt-2 grid grid-cols-7 gap-1 rounded-lg bg-gray-50 p-2"}
        >
          {calendarDays.map((day, index) => {
            const isCurrentMonth = day.getMonth() === viewDate.getMonth();
            const isSelected = isSameDay(day, selectedDate);
            const isToday = isSameDay(day, new Date());

            return (
              <button
                key={`${day.toISOString()}-${index}`}
                type="button"
                onClick={() => {
                  setSelectedDate(day);
                  setViewDate(new Date(day.getFullYear(), day.getMonth(), 1));
                }}
                className={`h-8 rounded-md text-sm ${
                  !isCurrentMonth ? "text-gray-300" : "text-dark"
                } ${isSelected ? "bg-primary text-white" : "hover:bg-gray-200"} ${isToday && !isSelected ? "font-semibold ring-1 ring-primary/40" : ""}`}
              >
                {day.getDate()}
              </button>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
}
