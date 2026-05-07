import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";

export default function VitalTask() {
    return (
        <Container 
            variant="main" 
            className={"w-full h-full flex flex-row gap-4 min-h-0"}
        >
            <ShadowBox className={"w-full mb-2"}>
                <p>Vital Task</p>
            </ShadowBox>
            <ShadowBox className={"w-full mb-2 hidden md:flex"}>
                <p>Vital Task display</p>
            </ShadowBox>
        </Container>
    )
}