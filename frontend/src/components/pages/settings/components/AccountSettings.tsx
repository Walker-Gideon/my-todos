import { useForm, type SubmitHandler } from "react-hook-form";

import Profile from "./Profile";
import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

type ProfileData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  contactNumber: string;
  position: string;
};

export default function AccountSettings({ onClose }: { onClose: () => void }) {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<ProfileData>();

  const onSubmit: SubmitHandler<ProfileData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(data);
  };

  return (
    <Container variant="div" className={"flex flex-col h-full min-h-0"}>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between"}
      >
        <SecondaryHeading fristWord={"Account"} secondWord={"Information"} />
        <ModalBackButton onClick={onClose} />
      </Container>
      <Profile primary={false} />
      <ShadowBox border={true} className={"p-4 min-h-0 flex- overflow-y-auto"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container
            variant="div"
            className={"flex flex-col gap-2 w-full md:w-140"}
          >
            <Input
              type="text"
              id="first-name"
              label="First Name"
              error={!!errors.firstName}
              message={errors.firstName?.message}
              {...register("firstName", {
                required: "First Name is required",
                // disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="last-name"
              label="Last Name"
              error={!!errors.lastName}
              message={errors.lastName?.message}
              {...register("lastName", {
                // disabled: isPending,
              })}
            />
            <Input
              type="email"
              id="email"
              label="Email Address"
              error={!!errors.email}
              message={errors.email?.message}
              {...register("email", {
                // disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="contactNumber"
              label="contact Number"
              error={!!errors.contactNumber}
              message={errors.contactNumber?.message}
              {...register("contactNumber", {
                // disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="position"
              label="Position"
              error={!!errors.position}
              message={errors.position?.message}
              {...register("position", {
                // disabled: isPending,
              })}
            />
          </Container>
          <Container variant="div" className={"mt-6 flex flex-row gap-4"}>
            <Button
              type="submit"
              ariaLabel="Save changes"
              className={"px-8 button-secondary-styling"}
            >
              Save Changes
            </Button>
            <Button
              ariaLabel="Cancel and close account settings"
              className={"px-8 button-secondary-styling"}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Container>
        </form>
      </ShadowBox>
    </Container>
  );
}
