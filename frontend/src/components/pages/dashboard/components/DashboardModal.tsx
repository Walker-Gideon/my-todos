import { TbCloudUpload } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

import Button from "@/components/ui/Button";
import Modal from "@/components/layout/Modal";
import Input from "@/components/layout/Input";
import Paragraph from "@/components/ui/Paragraph";
import TextArea from "@/components/layout/TextArea";
import Container from "@/components/layout/Container";
import ModalBackButton from "@/components/layout/ModalBackButton";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

const PRIORITIES = [
    { id: "extreme", label: "Extreme", color: "var(--color-red)" },
    { id: "moderate", label: "Moderate", color: "var(--color-blue)" },
    { id: "low", label: "Low", color: "var(--color-green)" },
];

export default function DashboardModal({ show, onCloseModal }: { show: boolean, onCloseModal: () => void }) {
    return (
        <Modal show={show} center={true}>
            <form className={"p-6 md:py-6 md:px-10 bg-white h-[85vh] md:h-auto w-[95vw] md:w-full md:min-w-xl rounded-md flex flex-col gap-4 overflow-y-auto md:overflow-visible"}>
                <Container 
                    variant="div" 
                    className={"w-full flex items-center justify-between"}
                >
                    <SecondaryHeading fristWord="Add New Ta" secondWord="sk" />
                    <ModalBackButton onClick={onCloseModal} />
                </Container>
                
                <Container 
                    variant="div" 
                    className={"w-full flex flex-col md:flex-row gap-4 border border-gray-300 p-4"}
                >
                    <Container 
                        variant="div" 
                        className={"w-full md:w-3/4 space-y-2 md:space-y-4"}
                    >
                        <Input 
                            id="task-title"
                            type="text"
                            label="Title"
                            name="taskTitle"
                            value=""
                            onChange={() => {}}
                        />
                        <Input 
                            id="due-date"
                            type="date"
                            label="Date"
                            name="dueDate"
                            value=""
                            onChange={() => {}}
                        />

                        {/* Priority Container */}
                        <Container 
                            variant="div" 
                            className={"w-full"}
                        >
                            <Paragraph 
                                variant="small" 
                                className={"text-dark font-semibold mb-1"}
                            >
                                Priority
                            </Paragraph>

                            <Container
                                variant="div"
                                className={"flex flex-wrap items-center gap-4"}
                            >
                                {PRIORITIES.map((priority) => (
                                    <Input 
                                        key={priority.id}
                                        id={priority.id}
                                        type="checkbox"
                                        label={
                                            <span className={"flex items-center gap-1"}>
                                                <GoDotFill size={14} style={{ color: priority.color }} /> {priority.label}
                                            </span>
                                        }
                                        name="priority"
                                        value={priority.id}
                                        onChange={() => {}}
                                        priority={true}
                                        style={{ accentColor: priority.color }}
                                    />
                                ))}
                            </Container>
                        </Container>

                        <TextArea 
                            id="description"
                            label="Description"
                            name="description"
                            value=""
                            placeholder="Start writing here..."
                            rows={6}
                            onChange={() => {}}
                            className={"resize-none"}
                        />
                    </Container>

                    <Container 
                        variant="div" 
                        className={"w-full medium:w-1/3 flex md:items-end md:justify-end"}
                    >
                        <Container 
                            variant="div" 
                            className={"w-full"}
                        >
                            <Paragraph 
                                variant="small" 
                                className={"text-dark font-semibold mb-1"}
                            >
                                Upload image
                            </Paragraph>
                            
                            <label
                                htmlFor="image"
                                className={"w-full flex flex-col items-center justify-center gap-1 rounded-md border border-gray-300 h-34 cursor-pointer hover:bg-gray-50 transition-colors"}
                            >
                                <TbCloudUpload className={"text-gray-400"} size={28} />
                                <Paragraph className={"text-gray-400 uppercase font-bold text-[10px]"}>Click to upload</Paragraph>
                                <input 
                                    type="file"
                                    id="image"
                                    name="image"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </label>
                        </Container>
                    </Container>
                </Container>

                <Container 
                    variant="div" 
                    className={"w-full flex gap-3 justify-start"}
                >
                    <Button 
                        type="submit"
                        ariaLabel="Create task" 
                        className={"px-8 bg-btn-col hover:text-white text-col-white px-4 py-3 rounded-md"}
                    >
                        Done
                    </Button>
                </Container>
            </form>
        </Modal>
    )
}