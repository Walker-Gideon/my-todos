import { TbLogout } from "react-icons/tb";

import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import ShadowBox from "@/components/layout/ShadowBox";
import Container from "@/components/layout/Container";
import SecondaryHeading from "@/components/layout/SecondaryHeading";

import { useUserProfile } from "@/components/hooks/useUserProfile";

export default function Settings() {
    return (
        <ShadowBox
            className={
                "px-1 md:px-6 flex flex-col h-full min-h-0 md:border md:border-gray-300 md:shadow-lg md:rounded-xl md:mb-4 mb-0"
            }
        >
            <Container
                variant="div"
                className={"w-full mb-8"}
            >
                <SecondaryHeading fristWord={"Settings"} />
            </Container>
            <Profile />
            <Container
                variant="div"
                className={"flex flex-col gap-4"}
            >
                <Button
                    variant={"outline"}
                >
                    Profile
                </Button>
                <Button
                    variant={"outline"}
                >
                    Account
                </Button>
                <Button
                    variant={"outline"}
                >
                    <TbLogout />
                    Log out
                </Button>
            </Container>
        </ShadowBox>
    )
}

function Profile() {
    const { name, capName, email } = useUserProfile();
    return (
        <Container
            variant="div"
            className={"mb-8 flex flex-col md:flex-row items-center gap-2 md:gap-4"}
        >
            <Container variant="div" className={"flex shrink-0"}>
                <Span className={`rounded-full bg-dark flex items-center justify-center text-white font-bold w-30 h-30 text-3xl`}>
                    {capName}
                </Span>
            </Container>
            <Container variant="div" className={"flex flex-col items-center justify-center md:items-start md:justify-start"}>
                <Paragraph className={"text-2xl font-semibold leading-none truncate"}>{name}</Paragraph>
                <Paragraph className={"leading-none truncate"}>{email}</Paragraph>
            </Container>
        </Container>
    )
}