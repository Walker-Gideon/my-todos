import { LuX } from "react-icons/lu";

import Backdrop from "./Backdrop";
import Container from "./Container";
import Button from "@/components/ui/Button";
import Headings from "../ui/Headings";
import Span from "../ui/Span";
import Paragraph from "../ui/Paragraph";

interface ConfirmDeleteProps {
    resourceName: string;
    onConfirm: () => void;
    disabled: boolean;
    onCloseModal: () => void;
    show: boolean;
}

export default function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal, show }: ConfirmDeleteProps) {
    return (
        <Backdrop 
            show={show} 
            center={true}
        >
            <Container 
                variant="div" 
                className={"p-6 bg-white w-80 md:w-96 rounded-md shadow-2xl"}
            >
                <Container
                    variant="div" 
                    className={"w-full flex justify-end"}
                >
                    <Button 
                        variant="text" 
                        ariaLabel="Close delete modal"
                        onClick={onCloseModal} 
                    >
                        <LuX className={"w-6 h-6"} />
                    </Button>
                </Container>

                <Container 
                    variant="div" 
                    className={"space-y-2 flex-1 min-w-0"}
                >
                    <Headings
                        variant="h1" 
                        className={"font-semibold text-xl flex items-center min-w-0 w-full"}
                    >
                        <Span className={"shrink-0 whitespace-nowrap"}>Delete </Span>
                        <Span className={"pl-1 italic truncate min-w-0 flex-1"} title={resourceName}>{resourceName}</Span>
                    </Headings>

                    <Paragraph variant="small" className={"text-gray-500 break-words"}>
                        Are you sure you want to delete this 
                        <Span className={"px-1 italic break-all text-base font-semibold"} title={resourceName}>{resourceName}</Span> 
                        permanently? This action cannot be undone.
                    </Paragraph>

                    <Container 
                        variant="div" 
                        className={"flex gap-2 justify-end"}
                    >
                        <Button 
                            variant="outline" 
                            ariaLabel="Cancel delete modal"
                            onClick={onCloseModal} 
                            className={"border-gray text-dark"}
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="primary" 
                            ariaLabel="Confirm delete modal"
                            onClick={onConfirm} 
                            disabled={disabled}
                        >
                            Delete
                        </Button>
                    </Container>
                </Container>
            </Container>
        </Backdrop>
    );
}

