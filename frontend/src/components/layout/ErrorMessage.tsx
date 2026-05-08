import { cn } from "@/lib/utils";

export default function ErrorMessage({ show, message, className }: { show?: boolean, message?: string, className?: string }) {
    if (!show || !message) return null;
    return (
        <p className={cn(`text-red-500 text-xs mt-1`, className)}>{message}</p>
    )
}