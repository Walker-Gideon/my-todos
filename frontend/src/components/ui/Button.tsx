import type { ButtonProps } from "./interfaces";

export default function Button({ children, ariaLabel, type, className, disabled, variant, ...rest }: ButtonProps) {
    const defaultStyling = "text-sm transition-all duration-300 ease-in-out";
    const disabledStyling = "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-col-white";
    
    if (variant === "primary") {
        return (
            <button 
                disabled={disabled} 
                aria-label={ariaLabel} 
                type={type} 
                className={`${defaultStyling} ${disabledStyling} cursor-pointer bg-primary hover:bg-primary-hover hover:text-white text-col-white px-4 py-3 rounded-md ${className}`} 
                {...rest}
            >
                {children}
            </button>
        )
    }

    if (variant === "outline") {
        return (
            <button 
                disabled={disabled} 
                aria-label={ariaLabel} 
                type={type} 
                className={`${defaultStyling} ${disabledStyling} cursor-pointer px-4 py-2 border border-border-primary rounded-md ${className}`} 
                {...rest}
            >
                {children}
            </button>
        )
    }

    if (variant === "text") {
        return (
            <button 
                disabled={disabled} 
                aria-label={ariaLabel} 
                type={type} 
                className={`${defaultStyling} ${disabledStyling} cursor-pointer ${className}`} 
                {...rest}
            >
                {children}
            </button>
        )
    }

    return (
        <button 
            disabled={disabled} 
            aria-label={ariaLabel} 
            type={type} 
            className={`${defaultStyling} ${disabledStyling} cursor-pointer ${className}`} 
            {...rest}
        >
            {children}
        </button>
    )
}