import { ReactNode } from "react";
import { cn } from "@/utils";

interface GroupProps {
  className?: string;
  children: ReactNode;
}

export function Group({ className, children }: GroupProps) {
  return (
    <div className={cn("flex items-center gap-4 justify-start flex-wrap", className)}>
      {children}
    </div>
  );
}
