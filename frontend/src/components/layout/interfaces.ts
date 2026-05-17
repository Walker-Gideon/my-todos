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

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: React.ReactNode;
    name: string;
    error?: boolean;
    message?: string;
    priority?: boolean;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label?: React.ReactNode;
    name: string;
    error?: boolean;
    message?: string;
}

