import { AnimatePresence, motion } from "motion/react";

import ShadowBox from "@/components/layout/ShadowBox";
import ProfileSettings from "./components/ProfileSettings";

export default function Settings() {
  return (
    <ShadowBox
      className={
        "px-1 md:p-4 h-full min-h-0 md:border md:border-gray-300 md:rounded-xl md:shadow-lg"
      }
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="settings-list"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={"h-full w-full py-8 md:py-0"}
        >
          <ProfileSettings />
        </motion.div>
      </AnimatePresence>
    </ShadowBox>
  );
}
