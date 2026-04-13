import type { ParagraphProps } from "./interfaces";

export default function Paragraph({ children, className, ...rest }: ParagraphProps) {
    return (
        <p className={className} {...rest}>
            {children}
        </p>
    )
}