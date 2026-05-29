import { useState } from "react";

import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";
import ConfirmDelete from "@/components/layout/ConfirmedDelete";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import type { Task } from "@/api/todos";
import { useDeleteTodo } from "@/components/hooks/useDeleteTodo";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

interface TaskListProp {
    todosTasks: Task[];
    contentId: string;
    isPanelOpen?: boolean;
    onIsContentId: (id: string) => void;
    onOpenEditModal: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}

export default function TaskList({ todosTasks, ...rest }: TaskListProp) {
    const { contentId, onIsContentId, onContentOpen, onOpenEditModal } = rest;

    const { updateTask } = useUpdateTask();
    const { isLoading, error } = useGetTodosTask();
    const { deleteTodo, isPending } = useDeleteTodo();

    const [isDeleteTitle, setIsDeleteTitle] = useState("");
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState("");

    

    return (
        <ShadowBox border={true} className={"px-4 md:px-6 flex flex-col min-h-120 max-h-160 md:min-h-120 md:max-h-none md:h-full mb-4 md:mb-0"}>
            <SecondaryHeading fristWord="Vital" secondWord=" Task" />
            <Container 
                variant="main" 
                className={"w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"}
            >
                <Conditional condition={todosTasks?.length > 0}>  
                    {todosTasks?.map((task: Task) => (
                        <Card 
                            key={task._id} 
                            task={task} 
                            onIsContentId={onIsContentId}
                            onContentOpen={onContentOpen}
                            isSelected={contentId === task._id}
                            onEdit={() => onOpenEditModal(task)} 
                            onDelete={(title, id) => {
                                setIsDeleteModalOpen(id);
                                setIsDeleteTitle(title);
                            }} 
                            onUndo={(id) => updateTask({ id, data: { isVital: false } })} 
                            undoText="vital task"
                        />
                    ))}
                </Conditional>
                <Conditional condition={todosTasks?.length === 0}>
                    <Information />
                </Conditional>
                <Conditional condition={isLoading}>
                    <Information value="Loading vital tasks..." />
                </Conditional>
                <Conditional condition={!!error}>
                    <Information value="Error while loading vital tasks." />
                </Conditional>
            </Container>
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
        </ShadowBox>
    )
}