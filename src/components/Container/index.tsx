import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={`ml-auto mr-auto w-full max-w-[120rem] pl-6 pr-6 ${className}`}>{children}</div>;
}
