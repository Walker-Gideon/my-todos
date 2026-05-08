import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

import Header from "@/components/layout/Header";
import Backdrop from "@/components/layout/Backdrop";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";


export default function AppLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container 
            container="div" 
            className={"h-screen flex flex-col overflow-hidden"}
        >
            <Header 
                menuOpen={isMenuOpen} 
                onMenuClick={handleMenu} 
            />

            <Container 
                variant="div" 
                className={"w-full flex-1 flex min-h-0 overflow-hidden"}
            >
                <Navigation />
                <Container 
                    variant="main" 
                    className={"flex-1 min-h-0 mx-4 md:mx-8 overflow-y-auto md:overflow-hidden"}
                >
                    <Outlet />
                </Container>
            </Container>

            <AnimatePresence>
                {isMenuOpen && (
                    <Backdrop onClick={handleMenu} show={isMenuOpen}>
                        <Navigation show={isMenuOpen} onClick={handleMenu} />
                    </Backdrop>
                )}
            </AnimatePresence>
        </Container>
    )
}
