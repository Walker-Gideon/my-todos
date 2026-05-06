import Span from "@/components/ui/Span";
import Paragraph from "@/components/ui/Paragraph";

interface SubHeadingProps {
    icon: React.ReactNode;
    subheading: string;
}

export default function SubHeading({ icon, subheading }: SubHeadingProps) {
    return (
        <Paragraph className={"flex items-center gap-1 text-[0.9rem] text-gray"}>
            {icon}
            <Span className={"font-regular text-secondary"}>{subheading}</Span>
        </Paragraph>
    )
}