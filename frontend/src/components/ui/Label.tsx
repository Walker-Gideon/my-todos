import type { LabelProps } from "./interfaces";

export default function Label({ children, className, ...rest }: LabelProps) {
    return (
        <label className={className} {...rest}>
            {children}
        </label>
    )
}