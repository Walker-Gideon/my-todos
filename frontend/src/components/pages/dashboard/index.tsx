import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";

export default function Dashboard() {
    /*
    List of elements in the main:
    - Header (Greeting, People, Invite button)
    - Main content (Todos, Task Status, Completed Task)
    */

   // <DashboardMain />
    return (
        <Container variant="main" className={"w-full h-full flex flex-col"}>
            <DashboardHeader />
            <Container variant="div" className={"w-full flex flex-col md:flex-row flex-1 gap-4 p-4 primary-border"}>
                <ShadowBox className={"px-6"}>
                    <DashboardTodos />
                </ShadowBox>

                <Container variant="div" className={"w-full flex flex-col gap-4"}>
                    <ShadowBox className={"px-6"}>
                        <p>Task Status</p>
                    </ShadowBox>
                    <ShadowBox className={"px-6"}>
                        <p>Completed Task</p>
                    </ShadowBox>
                </Container>
            </Container>
        </Container>
    )
}