import type { LayoutProps } from "./interfac";

export default function Container({ children, className, ...rest }: LayoutProps) {
    return (
        <div className={`w-full min-h-screen ${className}`} {...rest}>
            {children}
        </div>
    )
}