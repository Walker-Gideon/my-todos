import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import DashboardMain from "./components/DashboardMain";
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
            <Container variant="div" className={"w-full flex-1 border border-gray-300"}>
                <Container variant="div" className={"w-full"}>
                    <p>Todos</p>
                </Container>

                <Container variant="div" className={"w-full flex gap-4"}>
                    <Container variant="div" className={"w-full"}>
                        <p>Task Status</p>
                    </Container>
                    <Container variant="div" className={"w-full"}>
                        <p>Completed Task</p>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}