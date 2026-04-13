import type { ParagraphProps } from "./interfaces";

export default function Paragraph({ children, className, variant, ...rest }: ParagraphProps) {
    const defaultStyling = {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg"
    }
    
    return (
        <p className={`${defaultStyling[variant]} ${className}`} {...rest}>
            {children}
        </p>
    )
}