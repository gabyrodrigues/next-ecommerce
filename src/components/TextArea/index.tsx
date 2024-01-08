import React, { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils";

export interface TextareaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
  className?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, labelFor = "", icon = false, className, ...props }, ref) => {
    return (
      <div className="text-left">
        {!!label && (
          <label
            className="block font-bold text-black mb-2"
            htmlFor={labelFor}>
            {label}
          </label>
        )}
        <div className="bg-lightGray rounded-sm border-2 border-lightGray border-solid flex py-0 px-3 focus-within:shadow-basic">
          {!!icon && <div className="text-gray flex order-none w-6">{icon}</div>}
          <textarea
            type="text"
            className={cn(
              "bg-transparent border-0 min-h-[80px] text-black text-base outline-none py-2 px-0 pl-4 w-full",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
