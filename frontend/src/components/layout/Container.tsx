import type { ContainerProps } from "./interfaces";

export default function Container({ children, className, variant, container, ...rest }: ContainerProps) {
    if (variant === "nav") {
        return (
            <nav className={className} {...rest}>
                {children}
            </nav>
        )
    }

    if (variant === "main") {
        return (
            <main className={className} {...rest}>
                {children}
            </main>
        )
    }

    if (variant === "footer") {
        return (
            <footer className={className} {...rest}>
                {children}
            </footer>
        )
    }

    if (variant === "aside") {
        return (
            <aside className={className} {...rest}>
                {children}
            </aside>
        )
    }

    if (variant === "section") {
        return (
            <section className={className} {...rest}>
                {children}
            </section>
        )
    }

    if (variant === "div") {
        return (
            <div className={className} {...rest}>
                {children}
            </div>
        )
    }

    if (variant === "header") {
        return (
            <header className={className} {...rest}>
                {children}
            </header>
        )
    }

    if (container === "div") {
        return (
            <div className={`w-full min-h-screen ${className}`} {...rest}>
                {children}
            </div>
        )
    }
}