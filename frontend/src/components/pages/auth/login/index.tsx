import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Headings from "@/components/ui/Headings";
import Container from "@/components/layout/Container";

import RegisterIllustration from "@/assets/registration_illustration.png";

const MotionContainer = motion(Container);

export default function Login() {
    const { direction } = useOutletContext<{ direction: number }>();
    
    // Direction 1 means we navigated forward (to sign-in)
    // Direction 0 means we navigated back (to register)
    const xOffset = 50;
    
    return (
        <MotionContainer 
            layoutId="auth-card"
            container="div" 
            className={"w-full max-w-md md:max-w-5xl md:w-[80%] flex flex-col md:flex-row mx-0 md:p-6 bg-white rounded-md shadow-2xl shadow-primary/5"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div 
                initial={{ x: direction === 1 ? xOffset : -xOffset, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -xOffset : xOffset, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={"w-full md:w-3/5 lg:w-1/2 p-6 md:p-0 flex flex-col justify-center"}
            >
                <Container variant="header" className={"w-full mb-4"}>
                    <Headings variant="h1" className={"text-dark text-2xl font-bold tracking-tight"}>Sign In</Headings>
                </Container>
                <LoginForm />
            </motion.div>

            {/* Illustration Section (Right in Login) */}
            <motion.div 
                initial={{ x: direction === 1 ? xOffset : -xOffset, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -xOffset : xOffset, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={"hidden md:flex md:w-2/5 lg:w-1/2 items-center justify-center p-12"}
            >
                <img 
                    src={RegisterIllustration} 
                    alt="Join us" 
                    className={"w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"}
                />
            </motion.div>
        </MotionContainer>
    )
}
