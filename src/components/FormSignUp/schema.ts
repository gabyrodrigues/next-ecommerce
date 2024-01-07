import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email("Email inválido").min(5),
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
});
