import CategoryModal from "./CategoryModal";
import CategoryStatus from "./CategoryStatus";
import CategoryPriority from "./CategoryPriority";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useCategoryContext } from "../hooks/useCategoryContext";

export default function CategoryContainer() {
  const { activeCategoryModal, setActiveCategoryModal } = useCategoryContext();

  return (
    <Container variant="main" className={"flex flex-col h-full min-h-0"}>
      <Container variant="div" className={"w-full mb-6"}>
        <SecondaryHeading fristWord={"Task"} secondWord={"Categories"} />
      </Container>
      <Container
        variant="div"
        className={
          "pb-4 flex flex-1 flex-col space-y-10 min-h-0 overflow-y-auto"
        }
      >
        <CategoryStatus />
        <CategoryPriority />
      </Container>
      {activeCategoryModal && (
        <CategoryModal
          category={activeCategoryModal}
          onClose={() => setActiveCategoryModal(null)}
        />
      )}
    </Container>
  );
}
