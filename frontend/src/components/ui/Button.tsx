import type { ButtonProps } from "./interfaces";

export default function Button({ children, type, className, variant, ...rest }: ButtonProps) {
    const defaultStyling = "cursor-pointer text-sm";
    
    if (variant === "primary") {
        return (
            <button type={type} className={`${defaultStyling} bg-primary hover:bg-primary-hover hover:text-white transition-all duration-300 ease-in-out text-col-white px-4 py-3 rounded-md ${className}`} {...rest}>
                {children}
            </button>
        )
    }

    if (variant === "outline") {
        return (
            <button type={type} className={`${defaultStyling} px-4 py-2 rounded-md ${className}`} {...rest}>
                {children}
            </button>
        )
    }

    if (variant === "text") {
        return (
            <button type={type} className={`${defaultStyling} ${className}`} {...rest}>
                {children}
            </button>
        )
    }

    return (
        <button type={type} className={`${defaultStyling} ${className}`} {...rest}>
            {children}
        </button>
    )
}