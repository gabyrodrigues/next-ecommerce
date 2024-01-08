import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(3),
  email: z.string().email("Email inválido").min(5),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
});
