import type { SpanProps } from "./interfaces";

export default function Span({ children, className, ...rest }: SpanProps) {
    return (
        <span className={className} {...rest}>
            {children}
        </span>
    )
}