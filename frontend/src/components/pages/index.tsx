import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";


export default function AppLayout() {
    return (
        <Container container="div" className={"h-screen flex flex-col overflow-hidden"}>
            <Header />

            <Container variant="div" className={"w-full flex-1 flex ga overflow-visible"}>
                <Navigation />
                <Container variant="main" className="flex-1 h-full">
                    <Outlet />
                </Container>
            </Container>
        </Container>
    )
}
