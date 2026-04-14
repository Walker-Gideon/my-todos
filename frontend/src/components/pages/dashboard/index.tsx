import Header from "@/components/layout/Header";
import DashboardMain from "./components/DashboardMain";
import Container from "@/components/layout/Container";
import Navigation from "@/components/layout/Navigation";

export default function Dashboard() {
    return (
        <Container container="div" className={""}>
            <Header />

            <Container container="div" className={"w-full h-full flex gap-4"}>
                <Navigation />
                <DashboardMain />
            </Container>
        </Container>
    )
}