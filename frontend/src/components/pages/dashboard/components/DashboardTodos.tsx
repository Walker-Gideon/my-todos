import { TbWifi0, TbPlus, TbClipboard } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

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
        <>
            <Container variant="header" className={"w-full flex flex-col gap-2"}>
                <Container variant="div" className={"w-full flex flex-row items-center justify-between"}>
                    <Paragraph className={"flex items-center gap-1 text-lg text-gray"}> 
                        <TbClipboard size={32} />
                        <Span className={"font-regular text-secondary"}>To-Do</Span>
                    </Paragraph>
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
        </>
    )
}

function DashboardTodosList() {
    return (
        <Container variant="main" className="w-full flex flex-col gap-4">
            <Paragraph>Todos</Paragraph>
        </Container>
    )
}