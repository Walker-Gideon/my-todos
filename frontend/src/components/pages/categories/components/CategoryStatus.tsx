import CategoryTable from "./CategoryTable";
import Container from "@/components/layout/Container";
import CategoryHeaders from "@/components/pages/categories/components/CategoryHeaders";

import { useCategoryContext } from "../context/CategoryContext";

const STATUS_ROWS = [
  { id: 1, name: "Completed" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Not Started" },
];

export default function CategoryStatus() {
  const { setActiveCategoryModal } = useCategoryContext();
  
  return (
    <Container variant="div" className={"flex flex-col "}>
      <CategoryHeaders heading="Status" onOpenModal={() => setActiveCategoryModal("Status")} />
      <CategoryTable
        headers={["SN", "Task Status", "Action"]}
        statusRows={STATUS_ROWS}
      />
    </Container>
  );
}
