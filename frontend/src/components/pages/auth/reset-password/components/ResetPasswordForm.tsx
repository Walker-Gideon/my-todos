import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
    TbEye, 
    TbEyeOff,
    TbLockFilled
} from "react-icons/tb";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormRow from "@/components/pages/auth/components/FormRow";

type ResetPasswordInput = {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordForm() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token"); // We'll get token from the URL e.g. /auth/reset-password?token=abc
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ResetPasswordInput>();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit: SubmitHandler<ResetPasswordInput> = async (data) => {
        // Will implement backend connection later
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log({ ...data, token });
        // After successful reset, navigate to sign in
        // navigate("/auth/sign-in");
    }

    const handlePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleConfirmPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowConfirmPassword(!showConfirmPassword);
    }

    const styling = {
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-5 w-full"}>
            <FormRow errorsField={errors.password} errorMessage={errors.password?.message}>
                <TbLockFilled className={styling["icon"]} />
                <Input 
                    type={showPassword ? "text" : "password"} 
                    defaultStyling={false} 
                    placeholder="New Password" 
                    className={styling["input"]} 
                    {...register("password", { 
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    })}
                />
                <Button 
                    variant="text" 
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={handlePassword}
                    className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                    {showPassword ? <TbEyeOff className="text-zinc-400" /> : <TbEye className="text-zinc-400" />}
                </Button>
            </FormRow>

            <FormRow errorsField={errors.confirmPassword} errorMessage={errors.confirmPassword?.message}>
                <TbLockFilled className={styling["icon"]} />
                <Input 
                    type={showConfirmPassword ? "text" : "password"} 
                    defaultStyling={false} 
                    placeholder="Confirm New Password" 
                    className={styling["input"]} 
                    {...register("confirmPassword", { 
                        required: "Please confirm your password",
                        validate: (val: string) => {
                            if (watch('password') != val) {
                                return "Your passwords do not match";
                            }
                        },
                    })}
                />
                <Button 
                    variant="text" 
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    onClick={handleConfirmPassword}
                    className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                    {showConfirmPassword ? <TbEyeOff className="text-zinc-400" /> : <TbEye className="text-zinc-400" />}
                </Button>
            </FormRow>

            <Button 
                type="submit"
                ariaLabel="Reset Password"
                variant="primary"
                className={"w-full font-semibold shadow-lg py-3 mt-2"}
            >
                Reset Password
            </Button>
        </form>
    )
}
