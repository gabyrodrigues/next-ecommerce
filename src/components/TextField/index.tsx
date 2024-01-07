import React, { InputHTMLAttributes, ReactNode } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, labelFor = "", icon = false, ...props }, ref) => {
    return (
      <div>
        {!!label && (
          <label
            className="text-sm text-black cursor-pointer"
            htmlFor={labelFor}>
            {label}
          </label>
        )}
        <div className="bg-lightGray rounded-sm border-2 border-lightGray border-solid flex py-0 px-3 focus-within:shadow-basic">
          {!!icon && <div className="text-gray flex order-none w-6">{icon}</div>}
          <input
            type="text"
            className="bg-transparent border-0 text-black text-base outline-none py-2 px-0 pl-4 w-full"
            ref={ref}
            {...props}
          />
        </div>
      </div>
    );
  }
);
TextField.displayName = "TextField";

export { TextField };
