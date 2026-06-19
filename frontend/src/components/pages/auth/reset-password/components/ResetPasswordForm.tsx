import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TbEye, TbEyeOff, TbLockFilled } from "react-icons/tb";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormRow from "@/components/layout/FormRow";

import { useResetPassword } from "@/components/pages/auth/hooks/useResetPassword";

type ResetPasswordInput = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordForm() {
  const { passwordReset, isPending } = useResetPassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordInput>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<ResetPasswordInput> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    passwordReset(data);
  };

  const handlePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const styling = {
    input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
    icon: "text-zinc-400",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col gap-5 w-full"}
    >
      <FormRow
        errorsField={errors.password}
        errorMessage={errors.password?.message}
      >
        <TbLockFilled className={styling["icon"]} />
        <Input
          type={showPassword ? "text" : "password"}
          defaultStyling={false}
          disabled={isPending}
          placeholder="New Password"
          className={styling["input"]}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        <Button
          variant="text"
          disabled={isPending}
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={handlePassword}
          className="p-1 hover:bg-slate-100 rounded-full transition-colors"
        >
          {showPassword ? (
            <TbEyeOff className="text-zinc-400" />
          ) : (
            <TbEye className="text-zinc-400" />
          )}
        </Button>
      </FormRow>

      <FormRow
        errorsField={errors.confirmPassword}
        errorMessage={errors.confirmPassword?.message}
      >
        <TbLockFilled className={styling["icon"]} />
        <Input
          type={showConfirmPassword ? "text" : "password"}
          disabled={isPending}
          defaultStyling={false}
          placeholder="Confirm New Password"
          className={styling["input"]}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (val: string) => {
              if (watch("password") != val) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        <Button
          variant="text"
          disabled={isPending}
          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          onClick={handleConfirmPassword}
          className="p-1 hover:bg-slate-100 rounded-full transition-colors"
        >
          {showConfirmPassword ? (
            <TbEyeOff className="text-zinc-400" />
          ) : (
            <TbEye className="text-zinc-400" />
          )}
        </Button>
      </FormRow>

      <Button
        type="submit"
        ariaLabel="Reset Password"
        variant="primary"
        disabled={isPending}
        className={"w-full font-semibold shadow-lg py-3 mt-2"}
      >
        {isPending ? "Resetting..." : "Reset Password"}
      </Button>
    </form>
  );
}
