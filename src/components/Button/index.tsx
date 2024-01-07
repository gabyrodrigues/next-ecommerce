import { ReactNode } from "react";
import { buttonVariantStyles } from "./functions";

export type ButtonVariant = "filled" | "outline" | "outlineSecondary";

interface ButtonProps {
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  onClick?: () => void;
  children?: ReactNode;
}

export default function Button({
  className,
  type = "button",
  variant = "filled",
  onClick = () => null,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${className} ${buttonVariantStyles(variant)}`}
      type={type}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
}
