import { Outlet } from "react-router-dom";

import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";


export default function AppLayout() {
    return (
        <Container container="div" className={""}>
            <Header />

            <Container container="div" className={"w-full h-full flex gap-4"}>
                <Navigation />
                <Outlet />
            </Container>
        </Container>
    )
}
