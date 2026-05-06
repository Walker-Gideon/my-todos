import { TbClipboardCheck } from "react-icons/tb";

import SubHeading from "./SubHeading";
import Card from "@/components/layout/Card";
import ShadowBox from "@/components/layout/ShadowBox";

export default function DashboardCompleted() {
    return (
        <ShadowBox
            className={"px-4 md:px-6 flex flex-col max-h-none md:max-h-[200px]"}
        >
            <SubHeading
                icon={<TbClipboardCheck size={24} />}
                subheading="Completed Task"
            />

            <div className="w-full mt-4 flex-none md:flex-1 flex flex-col gap-4 overflow-visible md:overflow-y-auto min-h-0">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </ShadowBox>
    )
}

