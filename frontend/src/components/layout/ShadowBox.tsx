import Container from "./Container";

export default function ShadowBox({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <Container variant="div" className={`w-full bg-white shadow-lg rounded-xl p-4 primary-border ${className}`}>
            {children}
        </Container>
    )
}