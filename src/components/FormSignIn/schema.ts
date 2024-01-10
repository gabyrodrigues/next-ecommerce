import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email("Email inválido").min(5, { message: "Email inválido" }),
  password: z.string().min(8, { message: "A senha precisa ter 8 ou mais caracteres" })
});
