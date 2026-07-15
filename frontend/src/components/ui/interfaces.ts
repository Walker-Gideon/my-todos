import React from "react";

export interface UiProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export interface HeadingsProps extends UiProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultStyling?: boolean;
}

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  type?: "submit" | "reset";
  variant?: "primary" | "outline" | "text";
}

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  variant?: "small" | "medium" | "large" | undefined;
}
