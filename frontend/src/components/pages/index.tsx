import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";
import Backdrop from "@/components/layout/Backdrop";
import Conditional from "@/components/layout/Conditional";


export default function AppLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <Container container="div" className={"h-screen flex flex-col overflow-hidden"}>
            <Header onMenuClick={handleMenu} />

            <Container variant="div" className={"w-full flex-1 flex overflow-visible"}>
                <Navigation />
                <Container variant="main" className="flex-1 h-full">
                    <Outlet />
                </Container>
            </Container>

            <Conditional condition={isMenuOpen}>
                <Backdrop onClick={handleMenu} show={isMenuOpen}>
                    <Navigation show={isMenuOpen} onClick={handleMenu} />
                </Backdrop>
            </Conditional>
        </Container>
    )
}
