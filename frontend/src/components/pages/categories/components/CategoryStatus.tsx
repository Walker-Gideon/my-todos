import CategoryTable from "./CategoryTable";
import Container from "@/components/layout/Container";
import CategoryHeaders from "@/components/pages/categories/components/CategoryHeaders";

const statusRows = [
  { id: 1, name: "Completed" },
  { id: 2, name: "In Progress" },
  { id: 3, name: "Not Started" },
];

export default function CategoryStatus() {
  return (
    <Container variant="div" className={"flex flex-col "}>
      <CategoryHeaders heading="Status" onOpenModal={() => {}} />
      <CategoryTable
        headers={["SN", "Task Status", "Action"]}
        statusRows={statusRows}
      />
    </Container>
  );
}
