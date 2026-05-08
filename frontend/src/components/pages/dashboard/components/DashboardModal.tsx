import { GoDotFill } from "react-icons/go";

import Modal from "@/components/layout/Modal";
import Input from "@/components/layout/Input";
import TextArea from "@/components/layout/TextArea";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";
import Button from "@/components/ui/Button";

export default function DashboardModal({ show, onOpenModal }: { show: boolean, onOpenModal: () => void }) {
    return (
        <Modal show={show} center={true}>
            <form 
                className={"p-6 bg-white md:min-w-2xl w-full rounded-xl flex flex-col gap-6"}
            >
                <Container 
                    variant="div" 
                    className={"w-full flex items-center justify-between"}
                >
                    <SecondaryHeading fristWord="Add New" secondWord="Task" />
                    <Button 
                        variant="text" 
                        ariaLabel="Go Back" 
                        onClick={onOpenModal}
                        className={"whitespace-nowrap text-sm underline-offset-4 underline decoration-dark decoration-2"}
                    >
                        Go Back
                    </Button>
                </Container>
                
                <Container 
                    variant="div" 
                    className={"w-full flex flex-col gap-4 border border-gray-300 p-4"}
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

                    <Container 
                        variant="div" 
                        className={"w-full"}
                    >
                        <p className={"text-sm text-dark font-semibold"}>Priority</p>

                        <Container
                            variant="div"
                            className={"flex items-center gap-4"}
                        >
                            <Input 
                                id="extreme"
                                type="checkbox"
                                label={<span className="flex items-center gap-1">
                                    <GoDotFill size={14} className="text-[#F21E1E]" /> Extreme
                                </span>}
                                name="priority"
                                value="extreme"
                                onChange={() => {}}
                                priority={true}
                            />
                            <Input 
                                id="moderate"
                                type="checkbox"
                                label={<span className="flex items-center gap-1">
                                    <GoDotFill size={14} className="text-[#3ABEFF]" /> Moderate
                                </span>}
                                name="priority"
                                value="moderate"
                                onChange={() => {}}
                                priority={true}
                            />
                            <Input 
                                id="low"
                                type="checkbox"
                                label={<span className="flex items-center gap-1">
                                    <GoDotFill size={14} className="text-[#05A301]" /> Low
                                </span>}
                                name="priority"
                                value="low"
                                onChange={() => {}}
                                priority={true}
                            />
                        </Container>
                    </Container>

                    <Container 
                        variant="div" 
                        className={"w-full flex flex-col md:flex-row gap-4"}
                    >
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
                        <div className="w-full md:w-1/3">
                            <p className="text-sm text-dark font-semibold mb-1">Upload image</p>
                            <div className="w-full h-34 rounded-md bg-border-primary" />
                        </div>
                    </Container>
                </Container>

                <Container variant="div" className="w-full flex gap-3 justify-start">
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