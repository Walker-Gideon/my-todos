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

export default function Register() {
    const styling = {
        inputContainer: "flex items-center border border-border-primary rounded-md pl-3 text-sm",
        input: "w-full focus:outline-none px-2 py-2"
    }

    return (
        <Container container="div" className={"flex flex-col gap-4 p-8 mx-8 md:mx-0 md:p-0"}>
            <Container variant="header" className={""}>
                <h1>Sign Up</h1>
            </Container>

            <Container variant="main" className={"flex items-center justify-center"}>
                <div className={"hidden md:block"}>
                    <p>Welcome to Todo App</p>
                    <p>Sign up to get started</p>
                </div>

                {/* border border-gray-300 rounded-md p-4 */}
                <form action={""} className={"flex flex-col gap-4 min-w-0 w-full"}>
                    <div className="flex flex-col gap-4">
                        <Container container="div" className={styling["inputContainer"]}>
                            <TbUserEdit />
                            <Input type="text" placeholder="Enter First Name" defaultStyling={false} className={styling["input"]} />
                        </Container>

                        <Container container="div" className={styling["inputContainer"]}>
                            <TbUserEdit />
                            <Input type="text" placeholder="Enter Last Name" defaultStyling={false} className={styling["input"]} />
                        </Container>

                        <Container container="div" className={styling["inputContainer"]}>
                            <TbUserFilled />
                            <Input type="text" placeholder="Enter Username" defaultStyling={false} className={styling["input"]} />
                        </Container>

                        <Container container="div" className={styling["inputContainer"]}>
                            <TbMailFilled />
                            <Input type="email" placeholder="Enter Email" defaultStyling={false} className={styling["input"]} />
                        </Container>

                        <Container container="div" className={styling["inputContainer"]}>
                            <TbLockFilled />
                            <Input type="password" placeholder="Enter Password" defaultStyling={false} className={styling["input"]} />
                        </Container>

                        <Container container="div" className={styling["inputContainer"]}>
                            <TbLock />
                            <Input type="password" placeholder="Confirm Password" defaultStyling={false} className={styling["input"]} />
                        </Container>
                    </div>

                    <Container container="div" className={"flex flex-col gap-4"}>
                        <Label className={"flex items-center gap-2 cursor-pointer group"}>
                            <Input type="checkbox" defaultStyling={false} className={"w-4 h-4 cursor-pointer accent-primary"} />
                            <Span className={"text-sm"}>I agree to all terms and conditions</Span>
                        </Label>

                        <Button
                            type="submit"
                            variant="primary"
                        >
                            Register
                        </Button>

                        <Container container="div" className={"flex items-center gap-2 text-sm"}>
                            <Paragraph>Already have an account?</Paragraph>
                            <Button
                                onClick={(e) => { e.preventDefault(); console.log("Sign In") }}
                                className={"text-blue-500"}
                            >
                                Sign In
                            </Button>
                        </Container>
                    </Container>
                </form>
            </Container>
        </Container>
    )
}