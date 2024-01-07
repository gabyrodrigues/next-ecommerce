import React, { InputHTMLAttributes, ReactNode, useState } from "react";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelFor?: string;
  initialValue?: string;
  icon?: ReactNode;
  disabled?: boolean;
  error?: string;
}

export default function TextField({
  onChange,
  label,
  labelFor = "",
  initialValue = "",
  icon,
  disabled = false,
  error,
  ...props
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    !!onChange && onChange(event);
  }
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
          onChange={handleOnChange}
          value={value}
          {...props}
          disabled={disabled}
          className="bg-transparent border-0 text-black text-base outline-none py-2 px-0 pl-4 w-full"
        />
      </div>
      {!!error && <p className="text-red text-xs">{error}</p>}
    </div>
  );
}
