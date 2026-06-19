import { AnimatePresence, motion } from "motion/react";

export default function AnimationWraper({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="create-category"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={`h-full w-full ${className}`}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
