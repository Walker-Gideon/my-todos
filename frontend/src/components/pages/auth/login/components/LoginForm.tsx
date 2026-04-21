import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form"
import { 
    TbEye, 
    TbEyeOff,
    TbLockFilled,
    TbUserFilled
} from "react-icons/tb";

import Span from "@/components/ui/Span";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import FormRow from "@/components/pages/auth/components/FormRow";

import { useLoginUser } from "@/components/pages/auth/hooks/useLoginUser";

type LoginData = {
  email: string
  password: string
  rememberMe: boolean
}

export default function LoginForm() {
    const navigate = useNavigate();
    const { login, isPending } = useLoginUser();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginData>()

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit: SubmitHandler<LoginData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        login(data);
    }

    const handleNavigateToRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/auth/register")
    }

    const handlePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    const styling = {
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-5 w-full"}>
            <FormRow errorsField={errors.email} errorMessage={errors.email?.message}>
                <TbUserFilled className={styling["icon"]} />
                <Input 
                    type="text" 
                    defaultStyling={false} 
                    placeholder="Email" 
                    className={styling["input"]} 
                    {...register("email", { 
                        required: "Email is required",
                        disabled: isPending,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
            </FormRow>

            <FormRow errorsField={errors.password} errorMessage={errors.password?.message}>
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
                            message: "Password must be at least 8 characters"
                        }
                    })}
                />
                <Button 
                    variant="text" 
                    onClick={handlePassword}
                    className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                    {showPassword ? <TbEyeOff className="text-zinc-400" /> : <TbEye className="text-zinc-400" />}
                </Button>
            </FormRow>

            <div className={"flex flex-col gap-6 mt-2"}>
                <Label className={"flex items-center gap-2 cursor-pointer group"}>
                    <Input 
                        type="checkbox" 
                        disabled={isPending}
                        defaultStyling={false} 
                        className={"w-4 h-4 cursor-pointer accent-primary disabled:cursor-not-allowed"} 
                        {...register("rememberMe")}
                    />
                    <Span className={"text-sm text-zinc-600 dark:text-zinc-400"}>Remember Me</Span>
                </Label>

                <Button
                    type="submit"
                    ariaLabel="Sign In"
                    variant="primary"
                    disabled={isPending}
                    className={"w-full font-semibold shadow-lg py-3"}
                >
                    {isPending ? "Signing In..." : "Sign In"}
                </Button>

                <div className={"flex items-center justify-center gap-2 text-sm text-zinc-500"}>
                    <Paragraph variant="small">Don't have an account?</Paragraph>
                    <Button
                        variant="text"
                        ariaLabel="Navigate to register page"
                        disabled={isPending}
                        onClick={handleNavigateToRegister}
                        className={`text-primary font-semibold hover:underline transition-all ${isPending ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        Create One
                    </Button>
                </div>
            </div>
        </form>
    )
}