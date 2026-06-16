import CategoryTable from "./CategoryTable";
import Container from "@/components/layout/Container";
import CategoryHeaders from "@/components/pages/categories/components/CategoryHeaders";

import { useCategoryContext } from "../hooks/useCategoryContext";

const PRIORITY_ROWS = [
  { id: 1, name: "Extreme" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Low" },
];

export default function CategoryPriority() {
  const { setActiveCategoryModal } = useCategoryContext();

  return (
    <Container variant="div" className={"flex flex-col"}>
      <CategoryHeaders
        heading="Priority"
        onOpenModal={() => setActiveCategoryModal("Priority")}
      />
      <CategoryTable
        headers={["SN", "Task Priority", "Action"]}
        statusRows={PRIORITY_ROWS}
      />
    </Container>
  );
}
