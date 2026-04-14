import Container from "@/components/layout/Container";

export default function Dashboard() {
    return (
        <Container container="div" className={""}>
            <Container variant="header" className={"w-full h-full bg-primary mb-4"}>
                <p>Header</p>
            </Container>

            <Container container="div" className={"w-full h-full flex gap-4"}>
                <Container variant="aside" className={"w-1/5 h-full bg-primary"}>
                    <p>Aside</p>
                </Container>
                <Container variant="main" className={"w-4/5 h-full bg-green-500"}>
                    <p>Main</p>
                </Container>
            </Container>
        </Container>
    )
}