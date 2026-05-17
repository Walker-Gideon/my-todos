import { TbCircle, TbDots, TbCircleCheck } from "react-icons/tb";

import Container from "./Container";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";

import type { Task } from "@/api/todos";

export default function Card({ task }: { task: Task }) {
    return (
        <Container 
            variant="div" 
            className={"flex flex-col gap-4 border border-gray-400 rounded-2xl px-4 py-2"}
        >
            <Container 
                variant="div" 
                className={"flex items-center justify-between gap-2"}
            >
                <Container 
                    variant="div" 
                    className={"flex items-center gap-2 w-full max-w-[75%] md:max-w-[80%] min-w-0"}
                >
                    {task.completed ? (
                        <TbCircleCheck style={{ color: task.status.color }} className="shrink-0" size={20} />
                    ) : (
                        <TbCircle style={{ color: task.status.color }} className="shrink-0" size={20} />
                    )}
                    <Paragraph className={"truncate min-w-0 text-xl font-bold text-dark"}>{task.title}</Paragraph>
                </Container>
                <Button
                    variant="text"
                    ariaLabel="More options"
                    className={"shrink-0"}
                    onClick={() => { }}
                >
                    <TbDots />
                </Button>
            </Container>

            <Container 
                variant="div" 
                className={"flex flex-row gap-2 text-sm"}
            >
                <Paragraph className={"line-clamp-3 w-2/3 h-[60px] text-gray-600"}>{task.description || "No description provided."}</Paragraph>
                {task.image ? (
                    <img 
                        src={task.image} 
                        alt={task.title} 
                        className={"w-1/3 h-[60px] object-cover rounded-xl border border-gray-400"} 
                    />
                ) : (
                    <Container 
                        variant="div" 
                        className={"w-1/3 h-[60px] border border-gray-400 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] text-gray-400"}
                    >
                        No Image
                    </Container>
                )}
            </Container>

            <Container
                variant="div"
                className={"w-full rounded-md text-xs flex flex-row flex-wrap items-center justify-between gap-2 text-gray-500"}
            >
                <Paragraph className={"flex items-center gap-1"}>
                    Priority: 
                    <span 
                        style={{ color: task.priority.color }}
                        className={"font-semibold"}
                    >
                        {task.priority.label}
                    </span>
                </Paragraph>
                <Paragraph className={"flex items-center gap-1"}>
                    Status: 
                    <span 
                        style={{ color: task.status.color }}
                        className={"font-semibold"}
                    >
                        {task.status.label}
                    </span>
                </Paragraph>
                <Paragraph>
                    Created on: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "Unknown"}
                </Paragraph>
            </Container> 
        </Container>
    )
}
