import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email("Email inválido").min(5, { message: "Email inválido" })
});
