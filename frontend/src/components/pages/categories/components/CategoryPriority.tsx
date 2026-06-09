import CategoryTable from "./CategoryTable";
import Container from "@/components/layout/Container";
import CategoryHeaders from "@/components/pages/categories/components/CategoryHeaders";

const priorityRows = [
  { id: 1, name: "Extreme" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Low" },
];

export default function CategoryPriority() {
  return (
    <Container variant="div" className={"flex flex-col"}>
      <CategoryHeaders heading="Priority" onOpenModal={() => {}} />
      <CategoryTable
        headers={["SN", "Task Priority", "Action"]}
        statusRows={priorityRows}
      />
    </Container>
  );
}
