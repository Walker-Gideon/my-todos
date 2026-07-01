import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import SettingsMain from "./components/SettingsMain";
import ShadowBox from "@/components/layout/ShadowBox";
import PasswordSettings from "./components/PasswordSettings";
import ProfileSettings from "./components/ProfileSettings";

export default function Settings() {
  const [activeSetting, setActiveSetting] = useState<
    "profile" | "password" | null
  >(null);

  function handleClose(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setActiveSetting(null);
  }

  return (
    <ShadowBox
      className={
        "px-1 md:p-4 h-full min-h-0 md:border md:border-gray-300 md:rounded-xl md:shadow-lg"
      }
    >
      <AnimatePresence mode="wait">
        {activeSetting ? (
          <motion.div
            key={`${activeSetting}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={"h-full min-h-0 w-full flex-1"}
          >
            {activeSetting === "profile" && (
              <ProfileSettings onClose={handleClose} />
            )}
            {activeSetting === "password" && (
              <PasswordSettings onClose={handleClose} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="settings-list"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={"h-full w-full py-8 md:py-0"}
          >
            <SettingsMain onOpenSetting={setActiveSetting} />
          </motion.div>
        )}
      </AnimatePresence>
    </ShadowBox>
  );
}
