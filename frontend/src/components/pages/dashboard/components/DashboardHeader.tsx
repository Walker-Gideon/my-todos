import { TbUsersPlus } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useUserProfile } from "@/components/hooks/useUserProfile";

export default function DashboardHeader() {
    const { username } = useUserProfile();
    const greeting = "Welcome back";

    return (
        <Container variant="header" className={"w-full flex gap-4 md:gap-0 flex-col md:flex-row items-center md:justify-between mb-4 md:mb-2"}>
            <Container variant="div" className={"w-full md:flex-1 flex min-w-0 items-center flex-row gap-2 text-3xl"}>
                <Paragraph className={"font-medium truncate"}>
                    {greeting}, <Span>{username}</Span>
                </Paragraph>
                <Span>👋</Span>
            </Container>

            <Container variant="div" className={"w-full md:w-auto flex items-center justify-between md:justify-end flex-row gap-2"}>
                <Paragraph>People</Paragraph>
                <Button 
                    variant="outline"
                    ariaLabel="Invite people to join the task"
                    className={"flex items-center gap-2 border border-primary text-secondary font-medium hover:bg-secondary/10 hover:text-secondary transition-primary"}
                >
                    <TbUsersPlus className={"w-4 h-4"} />
                    <Span>Invite</Span>
                </Button>
            </Container>
        </Container>
    )
}