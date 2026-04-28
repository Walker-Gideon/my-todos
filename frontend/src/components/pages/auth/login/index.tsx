import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import Headings from "@/components/ui/Headings";
import Container from "@/components/layout/Container";

import RegisterIllustration from "@/assets/registration_illustration.png";

const MotionContainer = motion(Container);

export default function Login() {
    const { direction } = useOutletContext<{ direction: number }>();
    
    const xOffset = 50;
    
    return (
        <MotionContainer 
            layoutId="auth-card"
            container="div" 
            className={"flex flex-col md:flex-row"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div 
                initial={{ x: direction === 1 ? xOffset : -xOffset, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -xOffset : xOffset, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={"w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center"}
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
