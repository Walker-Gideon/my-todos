import { cn } from "@/lib/utils";
import ErrorMessage from "./ErrorMessage";

import type { TextAreaProps } from "./interfaces";

export default function TextArea({ id, label, name, value, onChange, className, error, message, placeholder, rows, maxLength, disabled }: TextAreaProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <label 
                htmlFor={id} 
                className={cn(`text-sm text-dark font-semibold`, className)}
            >
                {label}
            </label>
            <textarea 
                id={id}
                rows={rows}
                name={name} 
                value={value}
                disabled={disabled}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
                className={cn(
                    "text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent",
                    className,
                    error && "border-red-500"
                )}
            />
            <ErrorMessage
                show={error}
                message={message}
                className="mt-1"
            />
        </div>
    )
}