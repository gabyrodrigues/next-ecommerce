import { ReactNode } from "react";

interface GroupProps {
  className?: string;
  children: ReactNode;
}

export default function Group({ className, children }: GroupProps) {
  return (
    <div className={`flex items-center gap-4 justify-start flex-wrap ${className}`}>{children}</div>
  );
}
