import type { LayoutProps } from "./interfaces";

export default function Container({ children, className, ...rest }: LayoutProps) {
    return (
        <div className={`w-full min-h-screen ${className}`} {...rest}>
            {children}
        </div>
    )
}