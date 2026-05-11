import { cn } from "@/lib/utils";

import Container from "./Container";
import ErrorMessage from "./ErrorMessage";

import type { InputProps } from "./interfaces";


export default function Input({ id, label, name, type, value, onChange, className, error, message, placeholder, disabled, priority, style }: InputProps) {
    return (
        <Container variant="div" className={cn(priority ? "flex items-center gap-1" : "flex flex-col gap-1")}>
            <label 
                htmlFor={id} 
                className={cn("text-sm text-dark", priority ? "font-regular text-gray-400" : "font-semibold", className)}
            >
                {label}
            </label>
            <input 
                type={type} 
                id={id} 
                name={name} 
                value={value} 
                disabled={disabled}
                onChange={onChange} 
                style={style}
                className={cn(`w-full text-sm px-2.5 py-1.5 rounded-md border`, className, error ? "border-red-500" : "border-gray-300", priority ? `cursor-pointer` : "focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent")} 
                placeholder={placeholder} 
            />
            <ErrorMessage show={error} message={message} />
        </Container>
    )
}