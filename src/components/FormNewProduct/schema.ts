import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  price: z.string().min(4)
});
