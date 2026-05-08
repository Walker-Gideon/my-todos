import { TbClipboardCheck } from "react-icons/tb";

import SubHeading from "./SubHeading";
import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";

export default function DashboardCompleted() {
    return (
        <ShadowBox
            className={"px-4 md:px-6 flex flex-col min-h-0 max-h-[300px] md:max-h-[290px] mb-4 md:mb-0"}
        >
            <SubHeading
                icon={<TbClipboardCheck size={24} />}
                subheading="Completed Task"
            />

            <Container 
                variant="main" 
                className={"w-full mt-4 flex-1 min-h-0 flex flex-col gap-4 overflow-y-auto"}
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </Container>
        </ShadowBox>
    )
}

