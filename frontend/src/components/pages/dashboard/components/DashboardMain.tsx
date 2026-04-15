import Container from "@/components/layout/Container";

export default function DashboardMain() {
    return (
        <Container variant="main" className={"w-4/5 h-full bg-primary"}>
            <Container variant="header" className={"w-full h-full bg-primary"}>
                <p>Sub header</p>
            </Container>

            <Container variant="div" className={"w-full h-full bg-primary"}>
                <Container variant="div" className={"w-full h-full bg-primary"}>
                    <p>Todos</p>
                </Container>

                <Container variant="div" className={"w-full h-full bg-primary flex gap-4"}>
                    <Container variant="div" className={"w-full h-full bg-primary"}>
                        <p>Task Status</p>
                    </Container>
                    <Container variant="div" className={"w-full h-full bg-primary"}>
                        <p>Completed Task</p>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}