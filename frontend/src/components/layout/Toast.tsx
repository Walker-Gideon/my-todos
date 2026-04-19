import { useEffect } from "react";

import { LuX } from "react-icons/lu";
import { GoCheckCircle } from "react-icons/go";
import { IoAlertCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

type ToastProps = {
    message: string;
    type: "success" | "error";
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, type = "success", isVisible, onClose }: ToastProps) {
    useEffect(() => {
        if (isVisible && message) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, message, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: -50, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: -50, x: "-50%" }}
                    className={"fixed top-10 left-1/2 z-[9999] flex items-center gap-4 px-6 py-3 rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] primary-border min-w-[320px] max-w-[90vw]"}
                >
                    <div className={`p-1.5 rounded-full ${type === "success" ? "bg-green-100" : "bg-primary/10"}`}>
                        {type === "success" ? (
                            <GoCheckCircle className={"text-green-600 iconSize"} />
                        ) : (
                            <IoAlertCircleOutline className={"text-primary iconSize"} />
                        )}
                    </div>
                    
                    <div className={"flex-1"}>
                        <span className={"block text-sm font-bold text-headlines leading-tight"}>
                            {type === "success" ? "Success!" : "Action Required"}
                        </span>
                        <span className={"block text-xs text-quaternary mt-1"}>
                            {message}
                        </span>
                    </div>

                    <button 
                        onClick={onClose}
                        aria-label="Close toast"
                        className={"p-1 hover:bg-black/5 rounded-full transition-colors text-quaternary hover:text-headlines cursor-pointer"}
                    >
                        <LuX size={20} />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
