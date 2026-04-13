import {
    TbLock,
    TbUserEdit,
    TbLockFilled,
    TbMailFilled,
    TbUserFilled
} from "react-icons/tb";

import Input from "../../../ui/Input";
import Container from "../../../layout/Container";
import Span from "../../../ui/Span";
import Label from "../../../ui/Label";
import Paragraph from "../../../ui/Paragraph";
import Button from "../../../ui/Button";
import Headings from "../../../ui/Headings";

export default function Register() {
    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm",
        input: "w-full focus:outline-none px-2 py-2"
    }

    return (
        <Container container="div" className={"h-screen flex flex-col gap-4 items-center justify-center bg-primary/10"}>
            {/* max-w-sm */}
            <Container className={"w-full max-w-xs md:mx-0 px-5 py-3 md:p-0 bg-white rounded-md"}>
                <Container variant="header" className={"w-full mb-4"}>
                    <Headings variant="h1" className={"text-dark text-2xl font-bold"}>Sign Up</Headings>
                </Container>

                <Container variant="main" className={"flex items-center justify-center w-full"}>
                    <div className={"hidden medium:block"}>
                        <p>Welcome to Todo App</p>
                        <p>Sign up to get started</p>
                    </div>

                {/* border border-gray-300 rounded-md p-4 */}
                    <form action={""} className={"flex flex-col gap-4 min-w-0 w-full"}>
                        <div className="flex flex-col gap-4">
                            <Container container="div" className={styling["inputContainer"]}>
                                <TbUserEdit />
                                <Input 
                                    type="text" 
                                    defaultStyling={false} 
                                    placeholder="Enter First Name" 
                                    className={styling["input"]} 
                                />
                            </Container>

                            <Container container="div" className={styling["inputContainer"]}>
                                <TbUserEdit />
                                <Input 
                                    type="text" 
                                    defaultStyling={false} 
                                    placeholder="Enter Last Name" 
                                    className={styling["input"]} 
                                />
                            </Container>

                            <Container container="div" className={styling["inputContainer"]}>
                                <TbUserFilled />
                                <Input 
                                    type="text" 
                                    defaultStyling={false} 
                                    placeholder="Enter Username" 
                                    className={styling["input"]} 
                                />
                            </Container>

                            <Container container="div" className={styling["inputContainer"]}>
                                <TbMailFilled />
                                <Input 
                                    type="email" 
                                    defaultStyling={false} 
                                    placeholder="Enter Email" 
                                    className={styling["input"]} 
                                />
                            </Container>

                            <Container container="div" className={styling["inputContainer"]}>
                                <TbLockFilled />
                                <Input 
                                    type="password" 
                                    defaultStyling={false} 
                                    placeholder="Enter Password" 
                                    className={styling["input"]} 
                                />
                            </Container>

                            <Container container="div" className={styling["inputContainer"]}>
                                <TbLock />
                                <Input 
                                    type="password" 
                                    defaultStyling={false} 
                                    placeholder="Confirm Password" 
                                    className={styling["input"]} 
                                />
                            </Container>
                        </div>

                        <Container container="div" className={"flex flex-col gap-4"}>
                            <Label className={"flex items-center gap-2 cursor-pointer group"}>
                                <Input 
                                    type="checkbox" 
                                    defaultStyling={false} 
                                    className={"w-4 h-4 cursor-pointer accent-primary"} 
                                />
                                <Span className={"text-sm"}>I agree to all terms and conditions</Span>
                            </Label>

                            <Button
                                type="submit"
                                variant="primary"
                            >
                                Register
                            </Button>

                            <Container container="div" className={"flex items-center gap-2 text-sm"}>
                                <Paragraph variant="small">Already have an account?</Paragraph>
                                <Button
                                    onClick={(e) => { e.preventDefault(); console.log("Sign In") }}
                                    className={"text-blue-500 hover:text-blue-600 hover:underline transition-all duration-200"}
                                >
                                    Sign In
                                </Button>
                            </Container>
                        </Container>
                    </form>
                </Container>
            </Container>
        </Container>
    )
}