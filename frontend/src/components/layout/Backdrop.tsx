import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Backdrop({ children, onClick, show, center }: { children: React.ReactNode, onClick?: () => void, show: boolean, center?: boolean }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(`fixed inset-0 bg-black/50 z-40`, show ? "block z-40" : "hidden", center ? "flex items-center justify-center" : "")}
            onClick={onClick}
        >
            <div onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </motion.div>
    )
}