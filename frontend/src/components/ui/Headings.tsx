import type { HeadingsProps } from "./interfaces";

export default function Headings({ children, className, variant, ...rest }: HeadingsProps) {
    if(variant === "h1") {
        return (
            <h1 className={className} {...rest}>
                {children}
            </h1>
        )
    }

    if(variant === "h2") {
        return (
            <h2 className={className} {...rest}>
                {children}
            </h2>
        )
    }

    if(variant === "h3") {
        return (
            <h3 className={className} {...rest}>
                {children}
            </h3>
        )
    }
}