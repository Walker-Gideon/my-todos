import type { ContainerProps } from "./interfaces";

export default function Container({ children, className, styleName, variant = "div", container, as: CustomComponent, ...rest }: ContainerProps) {
    const Component = CustomComponent || (container === "div" ? "div" : variant);

    const defaultClasses = container === "div" ? "w-full min-h-screen" : "";

    return (
        <Component className={`${variant === "div" ? styleName : defaultClasses} ${className}`} {...rest}>
            {children}
        </Component>
    );
}