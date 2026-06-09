import Button from "@/components/ui/Button";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import CategoryStatus from "./components/CategoryStatus";
import CategoryPriority from "./components/CategoryPriority";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

export default function Categories() {
  return (
    <ShadowBox
      className={
        "px-1 md:px-6 flex flex-col h-full min-h-0 md:border md:border-gray-300 md:shadow-lg md:rounded-xl md:mb-4 mb-0"
      }
    >
      <Container variant="div">
        <SecondaryHeading fristWord={"Task"} secondWord={"Categories"} />
        <Button
          ariaLabel="Add Category"
          onClick={() => {}}
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
    </ShadowBox>
  );
}
