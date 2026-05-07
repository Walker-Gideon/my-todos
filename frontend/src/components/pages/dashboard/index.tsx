import Container from "@/components/layout/Container";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import DashboardCompleted from "./components/DashboardCompleted";

export default function Dashboard() {
    return (
        <Container
            variant="main"
            className={"w-full h-full flex flex-col min-h-0"}
        >
            <DashboardHeader />
            <Container
                variant="div"
                className={"w-full flex-1 min-h-0 flex flex-col md:flex-row gap-4 medium:p-4 medium:border medium:border-gray-300 overflow-y-auto md:overflow-hidden"}
            >
                <Container 
                    variant="div" 
                    // w-full md:flex-1 min-w-0 min-h-0 flex flex-col order-2 md:order-1
                    className={"w-full flex-none md:flex-1 min-w-0 flex flex-col order-2 md:order-1"}
                >
                    <DashboardTodos />
                </Container>
                <Container
                    variant="div"
                    // w-full flex-none md:flex-1 min-w-0 flex flex-col gap-4
                    className={"w-full flex-none md:flex-1 min-w-0 flex flex-col gap-4 order-1 md:order-2"}
                >
                    <DashboardStatus />
                    <DashboardCompleted />
                </Container>
            </Container>
        </Container>
    )
}