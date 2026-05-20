import { useState } from "react";
import { TbClipboardCheck } from "react-icons/tb";

import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import SubHeading from "@/components/layout/SubHeading";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";
import ConfirmDelete from "@/components/layout/ConfirmedDelete";

import type { Task } from "@/api/todos";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useDeleteTodo } from "@/components/hooks/useDeleteTodo";
import { useGetCompletedTodos } from "@/components/hooks/useGetCompletedTodos";

export default function DashboardCompleted({ onEditTask }: { onEditTask: (task: Task) => void }) {
    const { updateTask } = useUpdateTask();
    const { deleteTodo, isPending } = useDeleteTodo();
    const { completedTodos, isLoading, error } = useGetCompletedTodos();
    
    const [isDeleteTitle, setIsDeleteTitle] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");

    return (
        <ShadowBox
            className={"px-4 md:px-6 flex flex-col min-h-[300px] max-h-[500px] md:min-h-0 md:max-h-none md:flex-1 mb-4 md:mb-0"}
        >
            <SubHeading
                icon={<TbClipboardCheck size={24} />}
                subheading="Completed Task"
            />
            <Container 
                variant="main" 
                className={"w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"}
            >
                <Conditional condition={isLoading}>
                    <Information value="Loading completed tasks..." />
                </Conditional>
                <Conditional condition={!!error}>
                    <Information value="Error while loading completed tasks." />
                </Conditional>

                <Conditional condition={(!completedTodos || completedTodos.length === 0) && !isLoading}>
                    <Information value="No completed tasks." />
                </Conditional>
                
                <Conditional condition={!!completedTodos && completedTodos.length > 0}>
                    {completedTodos?.map((task: Task) => (
                        <Card 
                            key={task._id} 
                            task={task} 
                            onEdit={() => onEditTask(task)}
                            onDelete={(title, id) => {
                                setIsDeleteModalOpen(id);
                                setIsDeleteTitle(title);
                            }}
                            onUndo={(id) => {
                                updateTask({
                                    id,
                                    data: { completed: false }
                                });
                            }}
                        />
                    ))}
                </Conditional>

                <ConfirmDelete
                    resourceName={isDeleteTitle}
                    onConfirm={() => {
                        deleteTodo(isDeleteModalOpen, {
                            onSuccess: () => {
                                setIsDeleteModalOpen("");
                                setIsDeleteTitle("");
                            }
                        });
                    }}
                    onCloseModal={() => {
                        setIsDeleteModalOpen("");
                        setIsDeleteTitle("");
                    }}
                    disabled={isPending}
                    show={!!isDeleteModalOpen}
                />
            </Container>
        </ShadowBox>
    )
}

