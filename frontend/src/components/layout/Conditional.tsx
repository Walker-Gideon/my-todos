export default function Conditional({ children, condition }: { children: React.ReactNode, condition: any }) {
    if (!condition) return null;
    return <>{children}</>;
}
