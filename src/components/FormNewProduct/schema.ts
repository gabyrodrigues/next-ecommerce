import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const formSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.string().min(4),
  image: z
    .custom<File>((file) => file instanceof File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
});
