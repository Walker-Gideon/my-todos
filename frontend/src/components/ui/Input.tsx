import type { InputProps } from "./interfaces";

export default function Input({ type, placeholder, className, defaultStyling, ...rest }: InputProps) {
    const defaultClasses = defaultStyling ? defaultStyling : "";

    return (
        <input type={type} placeholder={placeholder} className={`${defaultClasses} ${className}`} {...rest} />
    )
}