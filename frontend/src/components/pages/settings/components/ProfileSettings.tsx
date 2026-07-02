import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import Profile from "./Profile";
import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useAuth } from "@/context/useAuthContex";
import { useUpdateProfile } from "@/components/hooks/useUpdateProfile";

type AccountData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image?: File;
};

export default function ProfileSettings({
  onClose,
}: {
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const { user } = useAuth();
  const { profile, isPending } = useUpdateProfile();

  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountData>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      username: user?.username || "",
      email: user?.email || "",
    },
  });

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit: SubmitHandler<AccountData> = async (data) => {
    profile({ ...data, image: imageFile ?? undefined });
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Profile
          primary={false}
          showBtn={true}
          preview={preview}
          onImageChange={handleImageChange}
        />
        <ShadowBox
          border={true}
          className={"p-4 min-h-0 flex- overflow-y-auto"}
        >
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
                disabled: isPending,
              })}
            />
            <Input
              type="text"
              id="last-name"
              label="Last Name"
              error={!!errors.lastName}
              message={errors.lastName?.message}
              {...register("lastName", {
                required: "Last Name is required",
                disabled: isPending,
              })}
            />
            <Input
              type="email"
              id="email"
              label="Email Address"
              error={!!errors.email}
              message={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                disabled: isPending,
              })}
            />
          </Container>
          <Container
            variant="div"
            className={"mt-6 flex flex-row gap-2 md:gap-4"}
          >
            <Button
              type="submit"
              ariaLabel="Save changes"
              disabled={isPending}
              className={"px-8 button-secondary-styling"}
            >
              Save Changes
            </Button>
            <Button
              ariaLabel="Cancel and close profile settings"
              className={"px-8 button-secondary-styling"}
              disabled={isPending}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Container>
        </ShadowBox>
      </form>
    </Container>
  );
}
