import Link from "next/link";
import { Email } from "@styled-icons/material-outlined";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { formSchema } from "./schema";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function FormForgotPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await sendPasswordResetEmail(auth, values.email);
    return;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  placeholder="Email"
                  type="email"
                  icon={<Email />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full">
          Enviar e-mail
        </Button>
        <div className="text-black text-small text-center">
          Já possui uma conta?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/sign-up">
            Login
          </Link>
        </div>
        <div className="text-black text-small text-center">
          Não possui uma conta?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/sign-up">
            Cadastre-se
          </Link>
        </div>
      </form>
    </Form>
  );
}
