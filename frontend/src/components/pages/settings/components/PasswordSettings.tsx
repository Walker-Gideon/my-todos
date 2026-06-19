import { useForm, type SubmitHandler } from "react-hook-form";

import Profile from "./Profile";
import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

type ProfileData = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export default function PasswordSettings({ onClose }: { onClose: () => void }) {
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
        <SecondaryHeading fristWord={"Change"} secondWord={"Password"} />
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
              id="current-password"
              label="Current Password"
              error={!!errors.currentPassword}
              message={errors.currentPassword?.message}
              {...register("currentPassword", {
                required: "Current Password is required",
                // disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="new-password"
              label="New Password"
              error={!!errors.newPassword}
              message={errors.newPassword?.message}
              {...register("newPassword", {
                required: "New Password is required",
                // disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="confirm-password"
              label="Confirm Password"
              error={!!errors.confirmPassword}
              message={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                // disabled: isPending,
              })}
            />
          </Container>
          <Container
            variant="div"
            className={"mt-6 flex flex-row items-center gap-2 md:gap-4"}
          >
            <Button
              type="submit"
              ariaLabel="Update password"
              className={"px-8 button-secondary-styling whitespace-nowrap"}
            >
              Update Password
            </Button>
            <Button
              ariaLabel="Cancel and close password settings"
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
