import React from "react";
import { AnimatePresence, motion } from "motion/react";

import SettingsMain from "./components/SettingsMain";
import ShadowBox from "@/components/layout/ShadowBox";
import AccountSettings from "./components/AccountSettings";
import ProfileSettings from "./components/ProfileSettings";

export default function Settings() {
  const [activeSetting, setActiveSetting] = React.useState<
    "profile" | "account" | null
  >(null);

  function handleClose() {
    setActiveSetting(null);
  }

  return (
    <ShadowBox
      //   border={true}
      className={
        "px-1 md:px-6 md:py-4 flex flex-col h-full min-h-0 md:border md:border-gray-300 md:shadow-lg md:rounded-xl md:mb-4 mb-0"
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
            className="h-full w-full"
          >
            {activeSetting === "profile" && <ProfileSettings />}
            {activeSetting === "account" && (
              <AccountSettings onClose={handleClose} />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="settings-list"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="h-full w-full py-8 md:py-0"
          >
            <SettingsMain onOpenSetting={setActiveSetting} />
          </motion.div>
        )}
      </AnimatePresence>
    </ShadowBox>
  );
}
