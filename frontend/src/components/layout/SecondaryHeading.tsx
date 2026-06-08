import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";

export default function SecondaryHeading({ fristWord, secondWord, textSize="text-lg" }: { fristWord: string, secondWord: string, textSize?: string }) {
    return (
        <Paragraph className={`w-full flex items-center text-dark font-semibold ${textSize}`}>
            <Span className={"underline decoration-secondary decoration-2 underline-offset-4"}>{fristWord}</Span>
            <Span className={"ml-1"}>{secondWord}</Span>
        </Paragraph>
    )
}