import { motion, AnimatePresence } from "motion/react";

import CardContent from "@/components/layout/CardContent";
import type { Task } from "@/api/todos";

interface VitalTaskContentProps {
    contentId: string;
    isPanelOpen: boolean;
    onEditTask: (task: Task) => void;
    onContentOpen: (open: boolean) => void;
}

export default function VitalTaskContent({isPanelOpen, ...rest}: VitalTaskContentProps) {
    const { contentId, onEditTask, onContentOpen } = rest;

    return (
        <>
            {/* Desktop view */}
            <div className="hidden md:flex md:w-3/5">
                <CardContent {...rest} />
            </div>

            {/* Mobile view */}
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
                            contentId={contentId}
                            onEditTask={onEditTask}
                            onContentOpen={onContentOpen}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}