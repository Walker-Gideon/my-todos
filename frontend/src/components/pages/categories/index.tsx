import React from "react";
import { AnimatePresence, motion } from "motion/react";

import ShadowBox from "@/components/layout/ShadowBox";
import CreateCategory from "./components/CreateCategory";
import CategoryContainer from "./components/CategoryContainer";

import { CategoryProvider } from "./context/CategoryContext";

export default function Categories() {
  const [isOpenCreateCategory, setIsOpenCreateCategory] = React.useState(false);

  return (
    <CategoryProvider>
      <ShadowBox
        className={
          "px-1 md:p-4 h-full min-h-0 md:border md:border-gray-300 md:rounded-xl"
        }
      >
        <AnimatePresence mode="wait">
          {isOpenCreateCategory ? (
            <motion.div
              key="create-category"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={"h-full w-full"}
            >
              <CreateCategory onClose={() => setIsOpenCreateCategory(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="categories-list"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={"h-full w-full"}
            >
              <CategoryContainer
                setIsOpenCreateCategory={setIsOpenCreateCategory}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </ShadowBox>
    </CategoryProvider>
  );
}
