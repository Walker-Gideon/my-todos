import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
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
                <ShadowBox>
                    <p>Todos</p>
                </ShadowBox>

                <Container variant="div" className={"w-full flex flex-col gap-4"}>
                    <ShadowBox>
                        <p>Task Status</p>
                    </ShadowBox>
                    <ShadowBox>
                        <p>Completed Task</p>
                    </ShadowBox>
                </Container>
            </Container>
        </Container>
    )
}