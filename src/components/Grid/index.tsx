import { ReactNode } from "react";
import { cn } from "@/utils";

interface GridProps {
  className?: string;
  children: ReactNode;
}

export function Grid({ className, children }: GridProps) {
  return <div className={cn("grid gap-4 grid-cols-3", className)}>{children}</div>;
}
