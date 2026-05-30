import { motion, AnimatePresence } from "motion/react";

import CardContent from "@/components/layout/CardContent";

import type { Task } from "@/api/todos";
import type { TaskContentProps } from "@/components/pages/interface";
import { useGetTodosTask } from "@/components/hooks/useGetTodosTask";

export default function VitalTaskContent({isPanelOpen, ...rest}: TaskContentProps) {
    const { todos, isLoading } = useGetTodosTask();
    const { contentId, onEditTask, onContentOpen } = rest;

    const task = todos?.find((t: Task) => t._id === contentId) || null;

    return (
        <>
            <div className="hidden md:flex md:w-3/5">
                <CardContent 
                    task={task} 
                    isLoading={isLoading} 
                    {...rest} 
                />
            </div>
            <AnimatePresence>
                {isPanelOpen && (
                    <motion.div
                        key="content"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-50 bg-white md:hidden"
                    >
                        <CardContent 
                            task={task} 
                            isLoading={isLoading} 
                            onEditTask={onEditTask}
                            onContentOpen={onContentOpen}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}