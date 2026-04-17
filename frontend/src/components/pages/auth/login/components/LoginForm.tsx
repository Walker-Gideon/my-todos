import { useNavigate } from "react-router-dom";
import { TbLockFilled, TbUserFilled } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

export default function LoginForm() {
    const navigate = useNavigate();
    
    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all",
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <form action={""} className={"flex flex-col gap-5 w-full"}>
            <Container container="div" className={styling["inputContainer"]}>
                <TbUserFilled className={styling["icon"]} />
                <Input 
                    type="text" 
                    defaultStyling={false} 
                    placeholder="Username" 
                    className={styling["input"]} 
                />
            </Container>

            <Container container="div" className={"flex items-center border border-border-primary rounded-md pl-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all"}>
                <TbLockFilled className={styling["icon"]} />
                <Input 
                    type="password" 
                    defaultStyling={false} 
                    placeholder="Password" 
                    className={styling["input"]} 
                />
            </Container>

            <div className={"flex flex-col gap-6 mt-2"}>
                <Label className={"flex items-center gap-2 cursor-pointer group"}>
                    <Input 
                        type="checkbox" 
                        defaultStyling={false} 
                        className={"w-4 h-4 cursor-pointer accent-primary"} 
                    />
                    <Span className={"text-sm text-zinc-600 dark:text-zinc-400"}>Remember Me</Span>
                </Label>

                <Button
                    type="submit"
                    ariaLabel="Sign In"
                    variant="primary"
                    className={"w-full font-semibold shadow-lg"}
                >
                    Sign In
                </Button>

                <div className={"flex items-center justify-center gap-2 text-sm text-zinc-500"}>
                    <Paragraph variant="small">Don't have an account?</Paragraph>
                    <Button
                        variant="text"
                        ariaLabel="Navigate to register page"
                        onClick={(e) => { e.preventDefault(); navigate("/auth/register") }}
                        className={"text-primary font-semibold hover:underline transition-all"}
                    >
                        Create One
                    </Button>
                </div>
            </div>
        </form>
    )
}