import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

export default function CreateCategory({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between mb-4"}
      >
        <SecondaryHeading fristWord={"Create"} secondWord={"Categories"} />
        <ModalBackButton onClick={onClose} />
      </Container>
      <Container variant="div" className={"w-full mt-4 flex flex-row gap-4"}>
        <Input
          label="Category Name"
          name="category-name"
          type="text"
          id="category-name"
          className={"w-100"}
        />
      </Container>
      <Container variant="div" className={"mt-6 flex flex-row gap-4"}>
        <Button
          type="submit"
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
