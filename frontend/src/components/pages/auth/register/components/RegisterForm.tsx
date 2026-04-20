import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form"
import { 
    TbLock, 
    TbUserEdit, 
    TbLockFilled, 
    TbMailFilled, 
    TbUserFilled 
} from "react-icons/tb";

import Span from "@/components/ui/Span";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Toast from "@/components/layout/Toast";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import Conditional from "@/components/layout/Conditional";

import { useRegisterUser } from "@/components/pages/auth/hooks/useRegisterUser";

type RegisterData = {
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
}

export default function RegisterForm() {
    const navigate = useNavigate();
    const { register, handleSubmit, watch } = useForm<RegisterData>()
    const { register: registerUser, isPending, error, reset: resetMutation, isSuccess } = useRegisterUser();

    const onSubmit: SubmitHandler<RegisterData> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        registerUser(data);
    }

    const handleNavigateToSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/auth/sign-in")
    }
    
    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all",
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-5 w-full"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <Container container="div" className={styling["inputContainer"]}>
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
                    </Container>

                    <Container container="div" className={styling["inputContainer"]}>
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
                    </Container>
                </div>

                <Container container="div" className={styling["inputContainer"]}>
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
                                message: "Username must be at least 3 characters"
                            },
                            maxLength: {
                                value: 20,
                                message: "Username must be less or equal to 20 characters"
                            }
                        })}
                    />
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
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
                                message: "Invalid email address"
                            }
                    })} 
                    />
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
                    <TbLockFilled className={styling["icon"]} />
                    <Input 
                        type="password" 
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
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
                    <TbLock className={styling["icon"]} />
                    <Input 
                        type="password" 
                        defaultStyling={false} 
                        placeholder="Confirm Password" 
                        className={styling["input"]} 
                        {...register("confirmPassword", { 
                            required: "Confirm Password is required",
                            disabled: isPending,
                            validate: (val: string) => {
                                if (watch('password') !== val) {
                                  return "Your passwords do not match";
                                }
                            },
                        })}
                    />
                </Container>
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
                    <Span className={"text-sm text-zinc-600 dark:text-zinc-400"}>I agree to the terms and conditions</Span>
                </Label>

                <Button
                    type="submit"
                    variant="primary"
                    ariaLabel="Register"
                    disabled={isPending}
                    className={`w-full font-semibold shadow-lg`}
                >
                    {isPending ? "Registering..." : "Register"}
                </Button>

                <div className={"flex items-center justify-center gap-2 text-sm text-zinc-500"}>
                    <Paragraph variant="small">Already have an account?</Paragraph>
                    <Button
                        variant="text"
                        ariaLabel="Navigate to sign in page"
                        disabled={isPending}
                        onClick={handleNavigateToSignIn}
                        className={`text-primary font-semibold hover:underline transition-all ${isPending ? "cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
            <Conditional condition={isSuccess}>
                <Toast
                    message={"Registered successfully"}
                    type="success"
                    isVisible={isSuccess}
                    onClose={() => {
                        resetMutation();
                    }}
                />
            </Conditional>
            <Conditional condition={!!error}>
                <Toast
                    message={error?.message || ""}
                    type="error"
                    isVisible={!!error}
                    onClose={() => {
                        resetMutation();
                    }}
                />
            </Conditional>
        </form>
    )
}