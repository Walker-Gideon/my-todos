import type { HeadingsProps } from "./interfaces";

export default function Headings({ children, className, variant = "h1", ...rest }: HeadingsProps) {
    const Component = variant === "h1" ? "h1" : variant;
    
    return (
        <Component className={className} {...rest}>
            {children}
        </Component>
    )
}