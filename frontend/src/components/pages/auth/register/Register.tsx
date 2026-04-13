import {
    TbLock,
    TbUserEdit,
    TbLockFilled,
    TbMailFilled,
    TbUserFilled
} from "react-icons/tb";

import { useNavigate } from "react-router-dom";

import Span from "../../../ui/Span";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import Headings from "../../../ui/Headings";
import Paragraph from "../../../ui/Paragraph";
import Container from "../../../layout/Container";

import RegisterIllustration from "../../../../assets/registration_illustration.png";

export default function Register() {
    const navigate = useNavigate();

    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all",
        input: "w-full focus:outline-none px-2 py-2.5 md:p-2 bg-transparent",
        icon: "text-zinc-400"
    }

    return (
        <Container container="div" className={"min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-primary/10"}>
            <Container className={"w-full max-w-md md:max-w-5xl md:w-[80%] flex flex-col md:flex-row mx-0 md:p-6 bg-white rounded-md"}>
                
                {/* Illustration Section (Left) */}
                <div className={"hidden md:flex md:w-2/5 lg:w-1/2 items-center justify-center p-12"}>
                    <img 
                        src={RegisterIllustration} 
                        alt="Join us" 
                        className={"w-full max-w-[400px] h-auto object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"}
                    />
                </div>

                {/* Form Section (Right) */}
                <div className={`w-full md:w-3/5 lg:w-1/2 p-6 md:p-0 flex flex-col justify-center`}>
                    <Container variant="header" className={"w-full mb-4"}>
                        <Headings variant="h1" className={"text-dark text-2xl font-bold tracking-tight"}>Sign Up</Headings>
                    </Container>

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
                                    onClick={(e) => { e.preventDefault(); navigate("/auth/login") }}
                                    className={"text-primary font-semibold hover:underline transition-all"}
                                >
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </Container>
        </Container>
    )
}