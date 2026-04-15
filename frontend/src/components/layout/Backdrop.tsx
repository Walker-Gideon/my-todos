import { motion } from "motion/react";

export default function Backdrop({ children, onClick, show }: { children: React.ReactNode, onClick: () => void, show: boolean }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 bg-black/50 z-40 ${show ? "block z-40" : "hidden"}`}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}