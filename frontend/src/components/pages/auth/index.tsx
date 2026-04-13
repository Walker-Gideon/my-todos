import { Outlet } from "react-router-dom";


import Container from "@/components/layout/Container";

export default function AuthLayout() {
    return (
        <Container container="div" className={"min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-primary/10"}>
            <Outlet />
        </Container>
    )
}