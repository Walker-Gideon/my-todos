import Span from "@/components/ui/Span";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

export default function DashboardHeader() {
    return (
        <Container variant="header" className={"w-full flex gap-2 md:gap-0 flex-col md:flex-row items-center md:justify-between mb-2"}>
            <Container variant="div" className={"w-full md:flex-1 flex min-w-0 items-center flex-row gap-2 text-3xl"}>
                <Paragraph className={"font-medium truncate"}>
                    Welcome back, <Span>username</Span>
                </Paragraph>
                <Span>👋</Span>
            </Container>

            <Container variant="div" className={"w-full md:w-auto flex items-center justify-between md:justify-end flex-row gap-2"}>
                <Paragraph>People</Paragraph>
                <Button>Invite</Button>
            </Container>
        </Container>
    )
}