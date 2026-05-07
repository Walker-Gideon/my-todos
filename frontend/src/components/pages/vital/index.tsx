import Container from "@/components/layout/Container";

export default function VitalTask() {
    return (
        <Container 
            variant="main" 
            className={"w-full min-h-0 grid grid-cols-2"}
        >
            <Container variant="div">
                <p>Vital Task</p>
            </Container>
            <Container variant="div">
                <p>Vital Task</p>
            </Container>
        </Container>
    )
}