import * as z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const formSchema = z.object({
  name: z.string().min(5, { message: "O nome do produto precisa ter 5 ou mais caracteres" }),
  description: z
    .string()
    .min(10, { message: "A descrição do produto precisa ter 5 ou mais caracteres" }),
  price: z.string().min(4, { message: "Valor inválido" }),
  image: z
    .custom<File>((file) => file instanceof File)
    .refine((file) => file.size <= MAX_FILE_SIZE, `O tamanho máximo de imagem é 5MB`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files.type),
      "Apenas os formatos .jpg, .jpeg, .png and .webp são aceitos"
    ),
  availableQuantity: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z
      .number()
      .positive()
      .min(1, { message: "O produto precisa ter pelo menos uma unidade disponível em estoque" })
  )
});
