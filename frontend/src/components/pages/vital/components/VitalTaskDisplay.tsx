import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import Card from "@/components/layout/Card";

export default function VitalTaskContent() {
    return (
        <ShadowBox className={"w-full md:w-2/5 mb-2 medium:px-8"}>
            <SecondaryHeading fristWord="Vital" secondWord="Task" />

            <Container
                variant="div"
                className={"mt-4 w-full flex flex-col gap-2"}
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </ShadowBox>
    )
}