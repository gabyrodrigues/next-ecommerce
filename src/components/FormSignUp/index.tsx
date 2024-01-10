import { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Email, Lock } from "@styled-icons/material-outlined";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { useToast } from "@/components/Toast/useToast";
import { auth } from "@/lib/firebase";
import { formSchema } from "./schema";

export function FormSignUp() {
  const router = useRouter();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (submitRef.current) {
      submitRef.current.disabled = true;
    }

    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: "Usuário cadastrado com sucesso!"
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Aconteceu algum erro!",
        description: "Verifique seus dados e tente novamente."
      });
    }

    if (submitRef.current) {
      submitRef.current.disabled = false;
    }
  }

  const differentPasswords = form.getValues("password") !== form.getValues("confirmPassword");
  const noMatchPasswords = form.getValues("confirmPassword") !== "" && differentPasswords;
  const disableSubmit =
    !form.getValues("email") ||
    !form.getValues("password") ||
    !form.getValues("confirmPassword") ||
    differentPasswords;

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

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  placeholder="Senha"
                  type="password"
                  icon={<Lock />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  placeholder="Confirmar senha"
                  type="password"
                  icon={<Lock />}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {noMatchPasswords && <p className="text-sm text-destructive">Senhas não coincidem</p>}

        <Button
          type="submit"
          disabled={disableSubmit}
          ref={submitRef}
          className="w-full">
          Registre-se
        </Button>
        <div className="text-black text-small text-center">
          Já possui uma conta?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/sign-in">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
