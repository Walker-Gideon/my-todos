import Span from "@/components/ui/Span";
import Container from "@/components/layout/Container";

export default function FormRow({ children, errorsField, errorMessage }: { children: React.ReactNode, errorsField?: any, errorMessage?: string }) {
    return (
        <Container variant="div" className={"flex flex-col gap-1"}>
            <Container variant="div" className={"flex items-center border border-border-primary rounded-md px-3 text-sm hover:border-primary-hover focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all"}>
                {children}
            </Container>
            {errorsField && <Span className="text-xs text-red-500 ml-1">{errorMessage}</Span>}
        </Container>
    )
}