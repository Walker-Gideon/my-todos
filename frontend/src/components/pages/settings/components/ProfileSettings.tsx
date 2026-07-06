import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import Profile from "./Profile";
import Button from "@/components/ui/Button";
import Input from "@/components/layout/Input";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useAuth } from "@/context/useAuthContex";
import { useUpdateProfile } from "@/components/hooks/useUpdateProfile";

type AccountData = {
  firstName: string;
  lastName: string;
  image?: File;
};

export default function ProfileSettings() {
  const { user } = useAuth();
  const { profile, isPending } = useUpdateProfile();

  const [preview, setPreview] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AccountData>();

  useEffect(() => {
    reset({
      firstName: "",
      lastName: "",
    });
  }, [user, reset]);

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit: SubmitHandler<AccountData> = async (data) => {
    profile({
      firstName: data.firstName,
      lastName: data.lastName,
      image: imageFile ?? undefined,
    });
  };

  return (
    <Container variant="div" className={"flex flex-col h-full min-h-0"}>
      <Container
        variant="div"
        className={"w-full flex items-center justify-between"}
      >
        <SecondaryHeading fristWord={"Account"} secondWord={"Information"} />
      </Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Profile
          primary={false}
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
          </Container>
          <Container
            variant="div"
            className={"mt-6 flex items-end justify-end gap-2 md:gap-4"}
          >
            <Button
              type="submit"
              ariaLabel="Save changes"
              disabled={isPending || !isDirty}
              className={"px-8 button-secondary-styling"}
            >
              {isPending ? "Saving changes..." : "Save Changes"}
            </Button>
          </Container>
        </ShadowBox>
      </form>
    </Container>
  );
}
