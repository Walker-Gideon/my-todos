import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface HeadersProps extends LayoutProps {
    variant: "nav" | "main" | "footer" | "aside" | "section" | "div";
}
