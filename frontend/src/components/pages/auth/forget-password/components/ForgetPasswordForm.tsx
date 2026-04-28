import { useForm, type SubmitHandler } from "react-hook-form"

import { TbUserFilled } from "react-icons/tb";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import FormRow from "@/components/pages/auth/components/FormRow";

type ForgetPasswordInput = {
  email: string
}

export default function ForgetPasswordForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<ForgetPasswordInput>();

    const onSubmit: SubmitHandler<ForgetPasswordInput> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log(data);
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-5 w-full"}>
            <FormRow errorsField={errors.email} errorMessage={errors.email?.message}>
                <TbUserFilled className={"text-zinc-400"} />
                <Input 
                    type="email" 
                    defaultStyling={false} 
                    placeholder="Email" 
                    className={"w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent"}
                    {...register("email", { 
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                />
            </FormRow>
            <Button 
                type="submit"
                ariaLabel="Send Reset Link"
                variant="primary"
                className={"w-full font-semibold shadow-lg py-3"}
            >
                Send Reset Link
            </Button>
        </form>
    )
}