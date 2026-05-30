import { motion, AnimatePresence } from "motion/react";

import TaskList from "@/components/layout/TaskList";

import type { Task } from "@/api/todos";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

interface VitalTaskDisplayPropa {
    contentId: string;
    isPanelOpen?: boolean;
    onIsContentId: (id: string) => void;
    onOpenEditModal: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}

export default function VitalTaskDisplay({ isPanelOpen, ...rest }: VitalTaskDisplayPropa) {
    const { todos } = useGetTodosTask();
    const vitalTodos = todos?.filter((t: Task)=>{
        if(t.isVital===true){
            return t
        }
    })

    return (
        <>
            <div className="hidden md:flex md:w-2/5 h-full">
                <TaskList todosTasks={vitalTodos} {...rest} />
            </div>
        
            <AnimatePresence>
                {!isPanelOpen && (
                    <motion.div
                        key="display"
                        initial={{ x: 0 }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={"md:hidden w-full md:w-2/5"}
                    >
                        <TaskList todosTasks={vitalTodos} {...rest} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}