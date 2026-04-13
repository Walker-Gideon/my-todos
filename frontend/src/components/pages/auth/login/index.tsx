import LoginForm from "./components/LoginForm";
import Headings from "@/components/ui/Headings";
import Container from "@/components/layout/Container";

import RegisterIllustration from "@/assets/registration_illustration.png";

export default function Login() {
    return (
        <Container container="div" className={"w-full max-w-md md:max-w-5xl md:w-[80%] flex flex-col md:flex-row mx-0 md:p-6 bg-white rounded-md"}>
            <div className={"w-full md:w-3/5 lg:w-1/2 p-6 md:p-0 flex flex-col justify-center"}>
                <Container variant="header" className={"w-full mb-4"}>
                    <Headings variant="h1" className={"text-dark text-2xl font-bold tracking-tight"}>Sign In</Headings>
                </Container>
                <LoginForm />
            </div>

            {/* Illustration Section (Left) */}
            <div className={"hidden md:flex md:w-2/5 lg:w-1/2 items-center justify-center p-12"}>
                <img 
                    src={RegisterIllustration} 
                    alt="Join us" 
                    className={"w-full max-w-[400px] h-auto object-contain drop-shadow-2xl animate-in fade-in zoom-in duration-700"}
                />
            </div>
        </Container>
    )
}