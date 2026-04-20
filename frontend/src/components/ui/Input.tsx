import type { InputProps } from "./interfaces";

export default function Input({ type, placeholder, className, defaultStyling, disabled, ...rest }: InputProps) {
    const defaultClasses = defaultStyling ? "border border-border-primary rounded-md px-3 py-2 text-sm" : "";
    const disabledStyling = "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";

    return (
        <input disabled={disabled} type={type} placeholder={placeholder} className={`${defaultClasses} ${className} ${disabledStyling}`} {...rest} />
    )
}