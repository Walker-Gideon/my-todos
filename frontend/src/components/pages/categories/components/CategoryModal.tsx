import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Backdrop from "@/components/layout/Backdrop";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

export default function CategoryModal({
  category,
  onClose,
}: {
  category: string;
  onClose: () => void;
}) {
  return (
    <Backdrop show={true} center={true}>
      <Container
        variant="div"
        className={
          "p-6 md:py-6 md:px-10 bg-white h-auto max-h-[90vh] md:max-h-none w-[95vw] md:w-full md:min-w-xl rounded-md flex flex-col overflow-y-auto md:overflow-visible shadow-2xl"
        }
      >
        <Container
          variant="div"
          className={"w-full flex items-center justify-between mb-4"}
        >
          {/* When the user is in the edit mode, the firstword should be "Edit" */}
          <SecondaryHeading fristWord={"Add"} secondWord={`Task ${category}`} />
          <ModalBackButton onClick={onClose} />
        </Container>
        <ShadowBox className={"flex-1 border primary-border"}>
          <form className={"min-h-80"}>
            <Container variant="div" className={"w-full flex flex-row gap-4"}>
              <Input
                label={`Task ${category} Title`}
                name={`${category.toLowerCase()}-title`}
                type="text"
                id={`${category.toLowerCase()}-title`}
                className={"w-70 md:w-100"}
              />
            </Container>
            <Container variant="div" className={"mt-6 flex flex-row gap-4"}>
              {/* In the edit mode the button text should be "Update" */}
              <Button
                type="submit"
                ariaLabel={`Create ${category}`}
                className={"px-8 button-secondary-styling"}
              >
                Create
              </Button>
              <Button
                ariaLabel={`Cancel Create ${category}`}
                className={"px-8 button-secondary-styling"}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Container>
          </form>
        </ShadowBox>
      </Container>
    </Backdrop>
  );
}
