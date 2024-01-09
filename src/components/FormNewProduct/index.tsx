import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { useToast } from "@/components/Toast/useToast";
import { InputFile } from "@/components/InputFile";
import { formSchema } from "./schema";
import { db } from "@/lib/firebase";

export function FormNewProduct() {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      image: new File([], ""),
      availableQuantity: 1
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const regex = /^(.+?)(\.\w+)$/;
      const match = form.getValues("image").name.match(regex);

      const storage = getStorage();

      const productBucket = "product";
      const productName = match ? match[1] : null;
      const fileExtension = match ? match[2] : null;
      const filePath = `${productBucket}/${productName}${fileExtension}`;
      const storageRef = ref(storage, filePath);
      await uploadBytesResumable(storageRef, values.image);

      await addDoc(collection(db, "products"), {
        name: values.name.trim(),
        description: values.description.trim(),
        price: Number(values.price),
        image: filePath
      });
      toast({
        title: "Produto cadastrado com sucesso!"
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Aconteceu algum problema!",
        description: "Tente novamente mais tarde."
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  label="Nome"
                  placeholder="Nome do produto"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  label="Descrição"
                  placeholder="Descrição do produto"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  label="Preço"
                  placeholder="Preço do produto"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="availableQuantity"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  label="Quantidade disponível"
                  placeholder="Quantidade de produtos disponíveis no estoque"
                  type="number"
                  min={1}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputFile
                  id="image"
                  placeholder="Imagem do produto"
                  accept=".jpg, .jpeg, .png, .svg, .gif, .mp4"
                  type="file"
                  onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={
            !form.getValues("name") || !form.getValues("description") || !form.getValues("price")
          }
          type="submit"
          className="w-full">
          Cadastrar novo produto
        </Button>
      </form>
    </Form>
  );
}
