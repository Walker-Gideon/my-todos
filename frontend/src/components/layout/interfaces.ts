import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: "header" | "nav" | "main" | "footer" | "aside" | "section" | "div";
    container?: "div";
    styleName?: string;
    as?: any;
}

export interface InputProps {
    id: string;
    label: React.ReactNode;
    name: string;
    type: "text" | "email" | "password" | "date" | "number" | "time" | "datetime-local" | "month" | "week" | "url" | "search" | "tel" | "range" | "color" | "file" | "checkbox";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: boolean;
    message?: string;
    placeholder?: string;
    disabled?: boolean;
    priority?: boolean;
}

export interface TextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label: React.ReactNode;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    error?: boolean;
    message?: string;
    placeholder?: string;
    rows?: number;
    maxLength?: number;
    disabled?: boolean;
}

