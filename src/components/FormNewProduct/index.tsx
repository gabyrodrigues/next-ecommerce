import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Textarea } from "@/components/TextArea";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { useToast } from "@/components/Toast/useToast";
import { InputFile } from "@/components/InputFile";

import { currencyToFloat, handleConvertPriceToBRL, maskCurrency } from "@/utils/formatCurrency";
import { createProducts } from "@/lib/firebase/firestore";
import { formSchema } from "./schema";

export function FormNewProduct() {
  const router = useRouter();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { toast } = useToast();

  const [price, setPrice] = useState<string>(handleConvertPriceToBRL(0));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: new File([], ""),
      availableQuantity: 1
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (submitRef.current) {
      submitRef.current.disabled = true;
    }

    try {
      await createProducts(values);

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

    if (submitRef.current) {
      submitRef.current.disabled = false;
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
                  {...field}
                  label="Preço"
                  placeholder="Preço do produto"
                  type="text"
                  value={price}
                  onChange={(event) => {
                    const formattedValue = maskCurrency(event.target.value);
                    setPrice(formattedValue);
                    form.setValue("price", currencyToFloat(formattedValue));
                  }}
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
                  {...field}
                  min={1}
                  type="number"
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
          ref={submitRef}
          type="submit"
          className="w-full">
          Cadastrar novo produto
        </Button>
      </form>
    </Form>
  );
}
