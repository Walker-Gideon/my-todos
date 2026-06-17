import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";
import Container from "@/components/layout/Container";

import { useUserProfile } from "@/components/hooks/useUserProfile";

export default function Profile({ primary = true }: { primary?: boolean }) {
  const { name, capName, email } = useUserProfile();

  return (
    <Container
      variant="div"
      className={`mb-8 flex md:flex-row items-center gap-2 md:gap-4 ${primary ? "flex-col" : "flex-row"}`}
    >
      <Container variant="div" className={"flex shrink-0"}>
        <Span
          className={`rounded-full bg-dark flex items-center justify-center text-white font-bold  ${primary ? "w-30 h-30 text-3xl" : "w-18 h-18 text-2xl"}`}
        >
          {capName}
        </Span>
      </Container>
      <Container
        variant="div"
        className={`flex flex-col md:items-start md:justify-start ${primary ? "items-center justify-center" : "items-start justify-start"}`}
      >
        <Paragraph
          className={`font-semibold leading-none truncate ${primary ? "text-2xl" : "text-xl"}`}
        >
          {name}
        </Paragraph>
        <Paragraph className={"leading-none truncate"}>{email}</Paragraph>
      </Container>
    </Container>
  );
}
