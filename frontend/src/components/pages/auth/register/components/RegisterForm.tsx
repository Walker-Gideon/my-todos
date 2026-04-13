import { useNavigate } from "react-router-dom";
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
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

export default function RegisterForm() {
    const navigate = useNavigate();
    
    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all",
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <form action={""} className={"flex flex-col gap-5 w-full"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                    <Container container="div" className={styling["inputContainer"]}>
                        <TbUserEdit className={styling["icon"]} />
                        <Input 
                            type="text" 
                            defaultStyling={false} 
                            placeholder="First Name" 
                            className={styling["input"]} 
                        />
                    </Container>

                    <Container container="div" className={styling["inputContainer"]}>
                        <TbUserEdit className={styling["icon"]} />
                        <Input 
                            type="text" 
                            defaultStyling={false} 
                            placeholder="Last Name" 
                            className={styling["input"]} 
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
                    />
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
                    <TbMailFilled className={styling["icon"]} />
                    <Input 
                        type="email" 
                        defaultStyling={false} 
                        placeholder="Email Address" 
                        className={styling["input"]} 
                    />
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
                    <TbLockFilled className={styling["icon"]} />
                    <Input 
                        type="password" 
                        defaultStyling={false} 
                        placeholder="Password" 
                        className={styling["input"]} 
                    />
                </Container>

                <Container container="div" className={styling["inputContainer"]}>
                    <TbLock className={styling["icon"]} />
                    <Input 
                        type="password" 
                        defaultStyling={false} 
                        placeholder="Confirm Password" 
                        className={styling["input"]} 
                    />
                </Container>
            </div>

            <div className={"flex flex-col gap-6 mt-2"}>
                <Label className={"flex items-center gap-2 cursor-pointer group"}>
                    <Input 
                        type="checkbox" 
                        defaultStyling={false} 
                        className={"w-4 h-4 cursor-pointer accent-primary"} 
                    />
                    <Span className={"text-sm text-zinc-600 dark:text-zinc-400"}>I agree to the terms and conditions</Span>
                </Label>

                <Button
                    type="submit"
                    variant="primary"
                    className={"w-full font-semibold shadow-lg"}
                >
                    Register
                </Button>

                <div className={"flex items-center justify-center gap-2 text-sm text-zinc-500"}>
                    <Paragraph variant="small">Already have an account?</Paragraph>
                    <Button
                        variant="text"
                        onClick={(e) => { e.preventDefault(); navigate("/auth/sign-in") }}
                        className={"text-primary font-semibold hover:underline transition-all"}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </form>
    )
}