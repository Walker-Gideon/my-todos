import { TbClipboardCheck } from "react-icons/tb";

import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import SubHeading from "@/components/layout/SubHeading";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";

import type { Task } from "@/api/todos";
import { useGetCompletedTodos } from "@/components/hooks/useGetCompletedTodos";

export default function DashboardCompleted() {
  const { completedTodos, isLoading, error } = useGetCompletedTodos();

  return (
    <ShadowBox
      border={true}
      className={
        "p-4 flex flex-1 flex-col h-full max-h-120 min-h-56 md:min-h-0 md:max-h-none"
      }
    >
      <SubHeading
        icon={<TbClipboardCheck size={24} />}
        subheading="Completed Task"
      />
      <Container
        variant="main"
        className={
          "w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"
        }
      >
        <Conditional condition={isLoading}>
          <Information value="Loading completed tasks..." />
        </Conditional>
        <Conditional condition={!!error}>
          <Information value="Error while loading completed tasks." />
        </Conditional>
        <Conditional
          condition={
            (!completedTodos || completedTodos.length === 0) && !isLoading
          }
        >
          <Information value="No completed tasks." />
        </Conditional>
        <Conditional condition={!!completedTodos && completedTodos.length > 0}>
          {completedTodos?.map((task: Task) => (
            <Card
              key={task._id}
              task={task}
            />
          ))}
        </Conditional>
      </Container>
    </ShadowBox>
  );
}
