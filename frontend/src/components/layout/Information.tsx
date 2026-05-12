import Container from "./Container";
import Paragraph from "@/components/ui/Paragraph";

export default function Information({ value = "No tasks yet", height = "120", className }: { value?: string, height?: string, className?: string }) {
    return (
        <Container 
            variant="div" 
            className={`w-full h-${height} flex items-center justify-center ${className}`}
        >
            <Paragraph 
                variant="small" 
                className={"text-gray flex items-center justify-center gap-1"}
            >
                {value}
            </Paragraph>
        </Container>
    )
}