import { TbWifi0, TbPlus, TbClipboard } from "react-icons/tb";

import SubHeading from "./SubHeading";
import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";
import ShadowBox from "@/components/layout/ShadowBox";
import Card from "@/components/layout/Card";

import { useDateFormat } from "@/components/hooks/useDateFormat";

export default function DashboardTodos() {
    const { day, monthInWords } = useDateFormat();
    /*
    List of elements in the main:
    - Header (Todo icon, date)
    - Main content (Todos)
    */
   
    function handleAddTodo() {}

    return (
        <ShadowBox className={"px-4 md:px-6 flex flex-col max-h-none md:max-h-[400px]"}>
            <Container variant="header" className={"w-full flex flex-col gap-2"}>
                <Container variant="div" className={"w-full flex flex-row items-center justify-between"}>
                    <SubHeading icon={<TbClipboard size={24} />} subheading={"To-Do"} />
                    <Button
                        variant="text"
                        ariaLabel="Add task"
                        onClick={handleAddTodo}
                        className={"w-auto flex items-center gap-1 font-regular text-gray hover:text-secondary transition-primary"}
                    >
                        <TbPlus className={"w-4 h-4 text-secondary"} />
                        <Span>Add task</Span>
                    </Button>
                </Container>
                <Container variant="div" className="w-full flex flex-col gap-4">
                    <Paragraph className={"text-dark flex items-center gap-2 text-sm"}>
                        {day}{", "}{monthInWords} 
                        <Span className={"text-gray flex items-center justify-center gap-1"}>
                            <span className={"w-1.5 h-1.5 rounded-full bg-[#A1A3AB]"} />
                            <Span>Today</Span>
                        </Span>
                    </Paragraph>
                </Container>
            </Container>
            <DashboardTodosList />
        </ShadowBox>
    )
}

function DashboardTodosList() {
    return (
        <Container variant="main" className="w-full mt-4 flex-none md:flex-1 flex flex-col gap-4 overflow-visible md:overflow-y-auto min-h-0">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Container>
    )
}