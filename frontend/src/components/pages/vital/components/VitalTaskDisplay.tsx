import { motion, AnimatePresence } from "motion/react";

import Container from "@/components/layout/Container";
import TaskList from "@/components/layout/TaskList";

import type { Task } from "@/api/todos";
import type { TaskDisplayProps } from "@/components/pages/interface";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

export default function VitalTaskDisplay({
  isPanelOpen,
  ...rest
}: TaskDisplayProps) {
  const { todos } = useGetTodosTask();

  const vitalTodos = todos?.filter((t: Task) => t.isVital === true);

  return (
    <>
      <Container variant="div" className={"hidden md:flex md:w-2/5 h-full"}>
        <TaskList
          fristWord="Vital"
          secondWord=" Task"
          taksTodos={vitalTodos}
          {...rest}
        />
      </Container>

      <AnimatePresence>
        {!isPanelOpen && (
          <motion.div
            key="display"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={"md:hidden w-full md:w-2/5 flex flex-1 h-full"}
          >
            <TaskList
              fristWord="Vital"
              secondWord=" Task"
              taksTodos={vitalTodos}
              {...rest}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
