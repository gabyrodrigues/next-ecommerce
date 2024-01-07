import { ReactNode } from "react";
import { cn } from "@/utils";

interface FlexProps {
  className?: string;
  children: ReactNode;
}

export function Flex({ className, children }: FlexProps) {
  return (
    <div className={cn("flex items-start justify-start flex-wrap", className)}>{children}</div>
  );
}
