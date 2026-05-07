import Container from "@/components/layout/Container";
import VitalTaskDisplay from "./components/VitalTaskDisplay";
import VitalTaskContent from "./components/VitalTaskContent";

export default function VitalTask() {
    return (
        <Container 
            variant="main" 
            className={"w-full h-full flex flex-row gap-4 min-h-0"}
        >
            <VitalTaskDisplay />
            <VitalTaskContent />
        </Container>
    )
}