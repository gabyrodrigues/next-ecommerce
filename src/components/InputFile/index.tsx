import { TextField } from "@/components/TextField";

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <TextField
        id="picture"
        type="file"
        label="Picture"
        labelFor="picture"
      />
    </div>
  );
}
