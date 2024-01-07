import { ReactNode } from "react";
import { cn } from "@/utils";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("ml-auto mr-auto w-full max-w-[120rem] pl-6 pr-6", className)}>
      {children}
    </div>
  );
}
