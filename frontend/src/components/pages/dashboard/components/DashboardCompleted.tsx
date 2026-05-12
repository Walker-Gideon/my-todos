import { TbClipboardCheck } from "react-icons/tb";

import SubHeading from "./SubHeading";
import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import Conditional from "@/components/layout/Conditional";
import Information from "@/components/layout/Information";

export default function DashboardCompleted() {
    return (
        <ShadowBox
            className={"px-4 md:px-6 flex flex-col min-h-0 max-h-[500px] md:max-h-none md:flex-1 mb-4 md:mb-0"}
        >
            <SubHeading
                icon={<TbClipboardCheck size={24} />}
                subheading="Completed Task"
            />

            <Container 
                variant="main" 
                className={"w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"}
            >
                <Conditional condition={false}>
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

