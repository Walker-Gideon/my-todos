import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  TbLock,
  TbUserEdit,
  TbLockFilled,
  TbMailFilled,
  TbUserFilled,
  TbEye,
  TbEyeOff,
} from "react-icons/tb";

import Span from "@/components/ui/Span";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import FormRow from "@/components/layout/FormRow";

import { useRegisterUser } from "@/components/pages/auth/hooks/useRegisterUser";

type RegisterData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const { register: registerUser, isPending } = useRegisterUser();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterData>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    registerUser(data);
  };

  const handleNavigateToSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/auth/sign-in");
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };
  const handlePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
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
      <div className={"flex flex-col gap-4"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <FormRow
            errorsField={errors.firstName}
            errorMessage={errors.firstName?.message}
          >
            <TbUserEdit className={styling["icon"]} />
            <Input
              type="text"
              defaultStyling={false}
              placeholder="First Name"
              className={styling["input"]}
              {...register("firstName", {
                required: "First Name is required",
                disabled: isPending,
              })}
            />
          </FormRow>

          <FormRow
            errorsField={errors.lastName}
            errorMessage={errors.lastName?.message}
          >
            <TbUserEdit className={styling["icon"]} />
            <Input
              type="text"
              defaultStyling={false}
              placeholder="Last Name"
              className={styling["input"]}
              {...register("lastName", {
                required: "Last Name is required",
                disabled: isPending,
              })}
            />
          </FormRow>
        </div>

        <FormRow
          errorsField={errors.username}
          errorMessage={errors.username?.message}
        >
          <TbUserFilled className={styling["icon"]} />
          <Input
            type="text"
            defaultStyling={false}
            placeholder="Username"
            className={styling["input"]}
            {...register("username", {
              required: "Username is required",
              disabled: isPending,
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 20,
                message: "Username must be less or equal to 20 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          errorsField={errors.email}
          errorMessage={errors.email?.message}
        >
          <TbMailFilled className={styling["icon"]} />
          <Input
            type="email"
            defaultStyling={false}
            placeholder="Email Address"
            className={styling["input"]}
            {...register("email", {
              required: "Email is required",
              disabled: isPending,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
        </FormRow>

        <FormRow
          errorsField={errors.password}
          errorMessage={errors.password?.message}
        >
          <TbLockFilled className={styling["icon"]} />
          <Input
            type={showPassword ? "text" : "password"}
            defaultStyling={false}
            placeholder="Password"
            className={styling["input"]}
            {...register("password", {
              required: "Password is required",
              disabled: isPending,
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <Button
            variant="text"
            onClick={handlePassword}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            {showPassword ? (
              <TbEyeOff className="text-zinc-400 h-4 w-4" />
            ) : (
              <TbEye className="text-zinc-400 h-4 w-4" />
            )}
          </Button>
        </FormRow>

        <FormRow
          errorsField={errors.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
        >
          <TbLock className={styling["icon"]} />
          <Input
            type={showConfirmPassword ? "text" : "password"}
            defaultStyling={false}
            placeholder="Confirm Password"
            className={styling["input"]}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              disabled: isPending,
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          />
          <Button
            variant="text"
            onClick={handleConfirmPassword}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            {showConfirmPassword ? (
              <TbEyeOff className="text-zinc-400 h-4 w-4" />
            ) : (
              <TbEye className="text-zinc-400 h-4 w-4" />
            )}
          </Button>
        </FormRow>
      </div>

      <div className={"flex flex-col gap-6 mt-2"}>
        <Label className={"flex items-center gap-2 cursor-pointer group"}>
          <Input
            type="checkbox"
            defaultStyling={false}
            className={"w-4 h-4 cursor-pointer accent-primary"}
            {...register("agreeToTerms", {
              required: "You must agree to the terms and conditions",
              disabled: isPending,
            })}
          />
          <Span className={"text-sm text-zinc-600 dark:text-zinc-400"}>
            I agree to all terms
          </Span>
        </Label>
        {errors.agreeToTerms && (
          <Span className="text-xs text-red-500 ml-1 -mt-5">
            {errors.agreeToTerms.message}
          </Span>
        )}

        <Button
          type="submit"
          variant="primary"
          ariaLabel="Register"
          disabled={isPending}
          className={`w-full font-semibold shadow-lg`}
        >
          {isPending ? "Registering..." : "Register"}
        </Button>

        <div
          className={
            "flex items-center justify-center gap-2 text-sm text-zinc-500"
          }
        >
          <Paragraph variant="small">Already have an account?</Paragraph>
          <Button
            variant="text"
            ariaLabel="Navigate to sign in page"
            disabled={isPending}
            onClick={handleNavigateToSignIn}
            className={`text-blue font-semibold hover:underline transition-all ${isPending ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            Sign In
          </Button>
        </div>
      </div>
    </form>
  );
}
