export default function Conditional({ children, condition }: { children: React.ReactNode, condition: boolean }) {
    if (!condition) return null;
    return <>{children}</>;
}
