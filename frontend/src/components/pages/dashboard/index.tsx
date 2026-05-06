import Container from "@/components/layout/Container";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import DashboardCompleted from "./components/DashboardCompleted";

export default function Dashboard() {
    return (
        <Container
            variant="main"
            className={"w-full h-screen md:h-full flex flex-col min-h-0"}
        >
            <DashboardHeader />
            <Container
                variant="div"
                className={"w-full flex-1 flex flex-col-reverse md:flex-row justify-end md:justify-start gap-4 medium:p-4 medium:border medium:border-gray-300 min-h-0 overflow-y-auto"}
            >
                <div className="w-full flex-none md:flex-1 min-w-0 flex flex-col">
                    <DashboardTodos />
                </div>
                <Container
                    variant="div"
                    className={"w-full flex-none md:flex-1 min-w-0 flex flex-col gap-4"}
                >
                    <DashboardStatus />
                    <DashboardCompleted />
                </Container>
            </Container>
        </Container>
    )
}