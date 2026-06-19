import { useForm, type SubmitHandler } from "react-hook-form";

import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

type CreateCategoryData = {
  name: string;
};

export default function CreateCategory({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<CreateCategoryData>();

  const onSubmit: SubmitHandler<CreateCategoryData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(data);
  };

  return (
    <>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between mb-4"}
      >
        <SecondaryHeading fristWord={"Create"} secondWord={"Categories"} />
        <ModalBackButton onClick={onClose} />
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container variant="div" className={"w-full mt-4 flex flex-row gap-4"}>
          <Input
            type="text"
            id="category-name"
            label="Category Name"
            className={"w-80 md:w-100"}
            error={!!errors.name}
            message={errors.name?.message}
            {...register("name", {
              required: "Category name is required",
              // disabled: isPending,
            })}
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
      </form>
    </>
  );
}
