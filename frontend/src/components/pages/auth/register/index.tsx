import Headings from "@/components/ui/Headings";
import RegisterForm from "./components/RegisterForm";
import Container from "@/components/layout/Container";

import RegisterIllustration from "@/assets/registration_illustration.png";

export default function Register() {
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
                    <RegisterForm />
                </div>
            </Container>
        </Container>
    )
}