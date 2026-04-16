import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import DashboardMain from "./components/DashboardMain";

export default function Dashboard() {
    /*
    List of elements in the main:
    - Header (Greeting, People, Invite button)
    - Main content (Todos, Task Status, Completed Task)
    */

   // <DashboardMain />
    return (
        <Container variant="main" className={"w-full h-full flex flex-col"}>
            <Container variant="header" className={"w-full flex gap-2 md:gap-0 flex-col md:flex-row items-center md:justify-between mb-2"}>
                <Container variant="div" className={"w-full md:flex-1 flex min-w-0 items-center flex-row gap-2 text-3xl"}>
                    <Paragraph className={"font-medium truncate"}>
                        Welcome back, <Span>username</Span>
                    </Paragraph>
                    <Span>👋</Span>
                </Container>

                <Container variant="div" className={"w-full md:w-auto flex items-center justify-between md:justify-end flex-row gap-2"}>
                    <Paragraph>People</Paragraph>
                    <Button>Invite</Button>
                </Container>
            </Container>

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