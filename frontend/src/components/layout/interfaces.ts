import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface ContainerProps extends LayoutProps {
    variant?: "header" | "nav" | "main" | "footer" | "aside" | "section" | "div";
    container?: "div";
}

