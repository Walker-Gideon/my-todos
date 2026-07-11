import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useUserProfile } from "@/components/hooks/useUserProfile";

export default function DashboardHeader() {
  const { firstName } = useUserProfile();
  const greeting = "Welcome back";

  return (
    <Container
      variant="header"
      className={
        "w-full flex min-w-0 items-center flex-row gap-2 text-3xl shrink-0 mb-4 md:mb-2"
      }
    >
      <Paragraph className={"font-medium truncate"}>
        {greeting}, <Span>{firstName}</Span>
      </Paragraph>
      <Span>👋</Span>
    </Container>
  );
}
