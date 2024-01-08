import { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonVariantStyles } from "./functions";
import { cn } from "@/utils";

export type ButtonVariant = "filled" | "outline" | "outlineSecondary" | "unstyled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  onClick?: () => void;
  children?: ReactNode;
  disabled?: boolean;
}

export function Button({
  className,
  type = "button",
  variant = "filled",
  disabled = false,
  onClick = () => null,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(className, buttonVariantStyles(variant))}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
}
