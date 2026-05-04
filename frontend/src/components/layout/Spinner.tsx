export default function Spinner({ size = 'h-6 w-6', color = 'border-primary' }: { size?: string, color?: string }) {
    return (
        <div className={`animate-spin rounded-full ${size} ${color} border-t-2 border-b-2`} />
    );
}