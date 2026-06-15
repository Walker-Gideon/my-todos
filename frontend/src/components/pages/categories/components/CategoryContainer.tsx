import CategoryModal from "./CategoryModal";
import Button from "@/components/ui/Button";
import CategoryStatus from "./CategoryStatus";
import CategoryPriority from "./CategoryPriority";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useCategoryContext } from "../context/CategoryContext";

export default function CategoryContainer({
  setIsOpenCreateCategory,
}: {
  setIsOpenCreateCategory: (isOpenCreateCategory: boolean) => void;
}) {
  const { activeCategoryModal, setActiveCategoryModal } = useCategoryContext();

  return (
    <Container
      variant="main"
      className={"flex flex-col h-full min-h-0"}
    >
      <Container
        variant="div"
        className={"w-full mb-6"}
      >
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
      {activeCategoryModal && (<CategoryModal category={activeCategoryModal} onClose={() => setActiveCategoryModal(null)} />)}
    </Container>
  );
}