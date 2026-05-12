import { TbUsersPlus } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useUserProfile } from "@/components/hooks/useUserProfile";

const PEOPLE = [
    {id: 1, alt: "username1", imageUrl: ""},
    {id: 2, alt: "username2", imageUrl: ""},
    {id: 3, alt: "username3", imageUrl: ""},
    {id: 4, alt: "username4", imageUrl: ""},
];

export default function DashboardHeader({ onOpenInviteModal }: { onOpenInviteModal: () => void }) {
    const { username } = useUserProfile();
    const greeting = "Welcome back";

    return (
        <Container variant="header" className={"w-full flex gap-4 md:gap-0 flex-col md:flex-row items-center md:justify-between shrink-0 mb-4 md:mb-2"}>
            <Container variant="div" className={"w-full md:flex-1 flex min-w-0 items-center flex-row gap-2 text-3xl"}>
                <Paragraph className={"font-medium truncate"}>
                    {greeting}, <Span>{username}</Span>
                </Paragraph>
                <Span>👋</Span>
            </Container>

            <Container variant="div" className={"w-full md:w-auto flex items-center justify-between md:justify-end flex-row gap-3"}>
                <Container variant="div" className={"flex items-center gap-1"}>
                    {PEOPLE.map((person) => (
                        <img 
                            key={person.id}
                            src={person.imageUrl}
                            alt={person.alt}
                            className={"w-9 h-9 rounded-md bg-gray-300"}
                        />
                    ))}
                </Container>
                <Button 
                    variant="outline"
                    ariaLabel="Invite people to join the task"
                    className={"flex items-center gap-2 border border-primary text-secondary font-medium"}
                    onClick={onOpenInviteModal}
                >
                    <TbUsersPlus className={"w-4 h-4"} />
                    <Span>Invite</Span>
                </Button>
            </Container>
        </Container>
    )
}