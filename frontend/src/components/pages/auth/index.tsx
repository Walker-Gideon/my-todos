import { AnimatePresence } from "motion/react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

import { TbArrowNarrowLeft } from "react-icons/tb";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import Conditional from "@/components/layout/Conditional";

export default function AuthLayout() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    
    // Direction logic: register = 0, sign-in = 1, forget-password = 2
    const pages = ["/auth/register", "/auth/sign-in", "/auth/forget-password"];
    const currentIndex = pages.indexOf(pathname);
    
    return (
        <Container container="div" className={"min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-primary/10 overflow-hidden"}>
            <Conditional condition={pathname === "/auth/forget-password"}>
                <Button 
                    variant="text" 
                    ariaLabel="Back to sign in" 
                    className="absolute top-4 left-4 p-2 rounded-full text-gray-600 hover:bg-white hover:text-primary hover:-translate-x-1 hover:shadow-sm transition-all duration-300"
                    onClick={() => navigate("/auth/sign-in")}
                >
                    <TbArrowNarrowLeft className="w-6 h-6" />
                </Button>
            </Conditional>
            <AnimatePresence mode="wait">
                <Outlet context={{ direction: currentIndex, pathname: location.pathname }} />
            </AnimatePresence>
        </Container>
    )
}
