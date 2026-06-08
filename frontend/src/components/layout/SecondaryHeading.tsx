import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";

export default function SecondaryHeading({ fristWord, secondWord }: { fristWord: string, secondWord: string }) {
    return (
        <Paragraph className={"w-full flex items-center text-dark text-lg font-semibold"}>
            <Span className={"underline decoration-secondary decoration-2 underline-offset-4"}>{fristWord}</Span>
            <Span className={"ml-1"}>{secondWord}</Span>
        </Paragraph>
    )
}