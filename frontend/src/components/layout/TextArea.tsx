import { forwardRef } from "react";
import { cn } from "@/lib/utils";

import ErrorMessage from "./ErrorMessage";

import type { TextAreaProps } from "./interfaces";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ id, label, name, className, error, message, ...rest }, ref) => {
        return (
            <div className={"flex flex-col gap-1 w-full"}>
                <label 
                    htmlFor={id} 
                    className={cn(`text-sm text-dark font-semibold`, className)}
                >
                    {label}
                </label>
                <textarea 
                    ref={ref}
                    id={id}
                    name={name} 
                    className={cn(
                        "text-sm p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent",
                        className,
                        error && "border-red-500"
                    )}
                    {...rest}
                />
                <ErrorMessage show={error} message={message} />
            </div>
        );
    }
);

TextArea.displayName = "TextArea";
export default TextArea;