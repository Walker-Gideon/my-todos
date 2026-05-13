import Container from "@/components/layout/Container";
import VitalTaskDisplay from "./components/VitalTaskDisplay";
import VitalTaskContent from "./components/VitalTaskContent";

export default function VitalTask() {
    return (
        <Container 
            variant="main" 
            // w-full h-full flex flex-row gap-4 min-h-0
            className={"w-full h-full flex flex-col md:flex-row gap-4 min-h-0 overflow-y-auto md:overflow-hidden"}
        >
            <VitalTaskDisplay />
            <VitalTaskContent />
        </Container>
    )
}