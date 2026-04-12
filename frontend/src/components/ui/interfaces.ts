import React from "react";

export interface UiProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export interface HeadingsProps extends UiProps {
    variant: "h1" | "h2" | "h3";
}

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder?: string;
    className?: string;
    defaultStyling?: string;
}
