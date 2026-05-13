import TaskDisplay from "./components/TaskDisplay";
import TaskContent from "./components/TaskContent";
import Container from "@/components/layout/Container";

export default function Task() {
    return (
        <Container 
            variant="main" 
            className={"w-full h-full flex flex-col md:flex-row gap-4 min-h-0 overflow-y-auto md:overflow-hidden"}
        >
            <TaskDisplay />
            <TaskContent />
        </Container>
    )
}