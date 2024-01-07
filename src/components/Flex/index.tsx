import { ReactNode } from "react";

interface FlexProps {
  className?: string;
  children: ReactNode;
}

export default function Flex({ className, children }: FlexProps) {
  return <div className={`flex items-start justify-start flex-wrap ${className}`}>{children}</div>;
}
