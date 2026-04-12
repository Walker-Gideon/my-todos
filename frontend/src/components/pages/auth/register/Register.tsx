import Input from "../../../ui/Input";
import Container from "../../../layout/Container";

export default function Register() {
    return (
        <Container container="div" className={""}>
            <Container variant="header" className={""}>
                <h1>Sign Up</h1>
            </Container>

            <Container variant="main" className={"flex items-center justify-center"}>
                <div className={"hidden md:block"}>
                    <p>Welcome to Todo App</p>
                    <p>Sign up to get started</p>
                </div>

                <form action={""} className="flex flex-col gap-4">
                {/* Inpute : icon and placeholder (6 in total) */}
                    <div className="flex flex-col gap-4">
                        <Input type="text" placeholder="Enter First Name" className="w-full" />
                        <Input type="text" placeholder="Enter Last Name" className="w-full" />
                        <Input type="text" placeholder="Enter Username" className="w-full" />
                        <Input type="email" placeholder="Enter Email" className="w-full" />
                        <Input type="password" placeholder="Enter Password" className="w-full" />
                        <Input type="password" placeholder="Confirm Password" className="w-full" />
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <button type="submit">Register</button>
                        <div>
                            <p>Already have an account?</p>
                            <button>
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </Container>
        </Container>
    )
}