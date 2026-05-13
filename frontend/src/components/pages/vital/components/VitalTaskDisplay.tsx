import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import Card from "@/components/layout/Card";

export default function VitalTaskDisplay() {
    // md:w-2/5 min-h-0 max-h-[500px] md:max-h-none md:flex-1 md:bg-blue-200
    return (
        <ShadowBox className={"px-4 md:px-6 flex flex-col w-full md:w-2/5 min-h-0 max-h-[500px] md:max-h-none md:flex-1 mb-4 md:mb-0"}>
            <SecondaryHeading fristWord="Vital" secondWord=" Task" />

            <Container 
                variant="main" 
                className={"w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"}
            >
                <Conditional condition={false}>  
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> 
                </Conditional>
                <Conditional condition={true}>
                    <Information />
                </Conditional>
            </Container>
        </ShadowBox>
    )
}