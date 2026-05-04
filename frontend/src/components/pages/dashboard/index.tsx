import { TbClipboardCheck, TbClipboardData } from "react-icons/tb";

import SubHeading from "./components/SubHeading";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";

export default function Dashboard() {
    /*
    List of elements in the main:
    - Header (Greeting, People, Invite button)
    - Main content (Todos, Task Status, Completed Task)
    */

   // <DashboardMain />
    return (
        <Container variant="main" className={"w-full h-full flex flex-col"}>
            <DashboardHeader />
            <Container variant="div" className={"w-full h-full flex flex-col-reverse md:flex-row flex-1 gap-4 p-4 primary-border bg-red-500"}>
                <ShadowBox className={"px-6"}>
                    <DashboardTodos />
                </ShadowBox>

                <Container variant="div" className={"w-full flex flex-col gap-4 bg-green-500"}>
                    <ShadowBox className={"px-6"}>
                        <SubHeading icon={<TbClipboardData  size={28} />} subheading={"Task Status"} />

                        <div className="flex items-center justify-between gap-2">
                            <div className="w-20 h-20 rounded-full bg-primary" />
                            <div className="w-20 h-20 rounded-full bg-primary" />
                            <div className="w-20 h-20 rounded-full bg-primary" />
                        </div>
                    </ShadowBox>
                    <ShadowBox className={"px-6 h-full"}>
                        <SubHeading icon={<TbClipboardCheck size={28} />} subheading={"Completed Task"} />
                    </ShadowBox>
                </Container>
            </Container>
        </Container>
    )
}