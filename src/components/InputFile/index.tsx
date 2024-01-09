import React from "react";
import { TextField, TextFieldProps } from "@/components/TextField";

export interface InputFileProps extends TextFieldProps {}
const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>((props, ref) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <TextField
        type="file"
        ref={ref}
        {...props}
      />
    </div>
  );
});
InputFile.displayName = "InputFile";

export { InputFile };
