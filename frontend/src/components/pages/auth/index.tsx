import { AnimatePresence } from "motion/react";
import { useLocation, Outlet } from "react-router-dom";

import Container from "@/components/layout/Container";

export default function AuthLayout() {
    const location = useLocation();
    
    // Direction logic: register = 0, sign-in = 1
    const pages = ["/auth/register", "/auth/sign-in"];
    const currentIndex = pages.indexOf(location.pathname);
    
    return (
        <Container container="div" className={"min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-primary/10 overflow-hidden"}>
            <AnimatePresence mode="wait">
                <Outlet context={{ direction: currentIndex, pathname: location.pathname }} />
            </AnimatePresence>
        </Container>
    )
}
