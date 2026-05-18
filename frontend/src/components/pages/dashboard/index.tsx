import { useState } from "react";

import Container from "@/components/layout/Container";
import DashboardTodos from "./components/DashboardTodos";
import DashboardHeader from "./components/DashboardHeader";
import DashboardStatus from "./components/DashboardStatus";
import DashboardCompleted from "./components/DashboardCompleted";
import CreateTaskModal from "@/components/layout/CreateTaskModal";
import DashboardInviteModal from "./components/DashboardInviteModal";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

    function handleModal() {
        setIsModalOpen(!isModalOpen);
    }

    function handleInviteModal() {
        setIsInviteModalOpen(!isInviteModalOpen);
    }

    return (
        <Container
            variant="main"
            className={"w-full h-full flex flex-col min-h-0"}
        >
            <DashboardHeader onOpenInviteModal={handleInviteModal} />
            <Container
                variant="div"
                className={"w-full flex-1 min-h-0 flex flex-col md:flex-row gap-4 medium:p-4 md:border md:border-gray-300 overflow-y-auto md:overflow-hidden"}
            >
                <Container 
                    variant="div" 
                    className={"w-full flex-none md:flex-1 min-w-0 flex flex-col order-2 md:order-1"}
                >
                    <DashboardTodos onOpenModal={handleModal} />
                </Container>
                <Container
                    variant="div"
                    className={"w-full flex-none md:flex-1 min-w-0 flex flex-col gap-4 order-1 md:order-2"}
                >
                    <DashboardStatus />
                    <DashboardCompleted />
                </Container>
            </Container>

            <CreateTaskModal
                show={isModalOpen} 
                onCloseModal={handleModal} 
                fristWord="Add New Ta"
                secondWord="sk"
            />
            <DashboardInviteModal 
                show={isInviteModalOpen} 
                onCloseModal={handleInviteModal} 
            />
        </Container>
    )
}
