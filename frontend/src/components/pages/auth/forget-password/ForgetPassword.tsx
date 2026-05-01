import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";

import Headings from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import ForgetPasswordForm from "./components/ForgetPasswordForm";

import ForgetPasswordIllustration from "@/assets/forgot-password.svg";

const MotionContainer = motion(Container);

export default function ForgetPassword() {
    const { direction } = useOutletContext<{ direction: number }>();
    
    const xOffset = 50;
    
    return (
        <MotionContainer 
            layoutId="auth-card"
            container="div" 
            className={"flex flex-col md:flex-row gap-8"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div 
                initial={{ x: direction === 1 ? xOffset : -xOffset, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -xOffset : xOffset, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={"w-full md:w-1/2 flex flex-col justify-center"}
            >
                <Container variant="header" className={"w-full mb-4"}>
                    <Headings variant="h1" className={"text-dark text-2xl font-bold tracking-tight"}>Forgot Password</Headings>
                    <Paragraph className={"text-dark text-sm mt-2"}>We'll email you a link to reset your password. Check your spam folder if it doesn't arrive within a few minutes.</Paragraph>
                </Container>
                <ForgetPasswordForm />
            </motion.div>
            <motion.div 
                initial={{ x: direction === 1 ? xOffset : -xOffset, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -xOffset : xOffset, opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={"hidden md:flex md:w-1/2 items-end justify-end"}
            > 
                <img 
                    src={ForgetPasswordIllustration} 
                    alt="Join us" 
                    className={"w-full max-w-[400px] h-4/5 object-contain drop-shadow-2xl"}
                />
            </motion.div>
        </MotionContainer>
    )
}