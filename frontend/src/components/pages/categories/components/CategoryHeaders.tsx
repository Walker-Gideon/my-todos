import { TbPlus } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

interface CategoryHeadersProps {
    onOpenModal: () => void;
    heading?: string;
}

export default function CategoryHeaders({ onOpenModal, heading }: CategoryHeadersProps) {
    return (
        <Container variant="div" className={"flex items-center gap-2"}>
            <SecondaryHeading fristWord="Task" secondWord={heading} textSize="text-sm" />
            <Button 
                variant="text"
                ariaLabel="Add Task Status"
                onClick={onOpenModal}
                className={"group w-auto flex items-center gap-1 font-regular text-gray hover:text-secondary transition-primary whitespace-nowrap"}
            >
                <TbPlus
                    className={"w-4 h-4 group-hover:rounded-full group-hover:bg-secondary group-hover:text-col-white transition-primary text-secondary"}
                />
                <Span>Add Task {heading}</Span>
            </Button>
        </Container>
    )
}