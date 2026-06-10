import React from "react";
import { AnimatePresence, motion } from "motion/react";

import Button from "@/components/ui/Button";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import CategoryStatus from "./components/CategoryStatus";
import CategoryPriority from "./components/CategoryPriority";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import ModalBackButton from "@/components/layout/ModalBackButton";

export default function Categories() {
  const [isOpenCreateCategory, setIsOpenCreateCategory] = React.useState(false);

  return (
    <ShadowBox
      className={
        "px-1 md:px-6 flex flex-col h-full min-h-0 md:border md:border-gray-300 md:shadow-lg md:rounded-xl md:mb-4 mb-0"
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
            className="h-full w-full"
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
            className="h-full w-full"
          >
            <Container variant="div">
              <SecondaryHeading fristWord={"Task"} secondWord={"Categories"} />
              <Button
                ariaLabel="Add Category"
                onClick={() => setIsOpenCreateCategory(true)}
                className={"mt-4 button-secondary-styling"}
              >
                Add Category
              </Button>
            </Container>
            <Container
              variant="div"
              className={
                "mt-8 flex flex-1 flex-col space-y-10 min-h-0 overflow-y-auto"
              }
            >
              <CategoryStatus />
              <CategoryPriority />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </ShadowBox>
  );
}

function CreateCategory({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between mb-4"}
      >
        <SecondaryHeading fristWord={"Create"} secondWord={"Categories"} />
        <ModalBackButton onClick={onClose} />
      </Container>
      <Container variant="div" className={"mt-4 flex flex-row gap-4"}>
        <p>Input</p>
      </Container>
      <Container variant="div" className={"mt-8 flex flex-row gap-4"}>
        <Button
          ariaLabel="Create Category"
          className={"px-8 button-secondary-styling"}
        >
          Create
        </Button>
        <Button
          ariaLabel="Cancel Create Category"
          className={"px-8 button-secondary-styling"}
          onClick={onClose}
        >
          Cancel
        </Button>
      </Container>
    </>
  );
}
