import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Headings from "@/components/ui/Headings";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import MailSentIllustration from "@/assets/mail-sent.svg";

const MotionContainer = motion(Container);

export default function ForgotPasswordSuccess() {
    return (
        <MotionContainer 
            layoutId="auth-card"
            container="div" 
            className={"flex flex-col md:flex-row gap-8 max-w-4xl mx-auto"}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={"w-full md:w-1/2 flex flex-col justify-center"}
            >
                <Container variant="header" className={"w-full mb-6"}>
                    <Headings variant="h1" className={"text-dark text-3xl font-bold tracking-tight"}>
                        Check your email
                    </Headings>
                    <Paragraph className={"text-dark/70 text-base mt-4 leading-relaxed"}>
                        We've sent a reset link to your email. Click it to set a new password.
                    </Paragraph>
                    <Paragraph className={"text-dark/50 text-sm mt-4 italic"}>
                        Don't see it? Check your spam folder or wait a few minutes.
                    </Paragraph>
                </Container>
                
                <Link to="/auth/sign-in" className="w-full">
                    <Button 
                        variant="primary"
                        className={"w-full font-semibold shadow-lg py-3.5"}
                    >
                        Back to Login
                    </Button>
                </Link>
            </motion.div>

            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={"hidden md:flex md:w-1/2 items-center justify-center"}
            > 
                <img 
                    src={MailSentIllustration} 
                    alt="Email verification" 
                    className={"w-full max-w-[180px] object-contain drop-shadow-2xl"}
                />
            </motion.div>
        </MotionContainer>
    )
}