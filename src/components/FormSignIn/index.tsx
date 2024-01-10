import { useRef } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Email, Lock } from "@styled-icons/material-outlined";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { useToast } from "@/components/Toast/useToast";
import { formSchema } from "./schema";

export function FormSignIn() {
  const router = useRouter();
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (submitRef.current) {
      submitRef.current.disabled = true;
    }

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false
    });

    if (!result?.ok || result?.error) {
      toast({
        variant: "destructive",
        title: "Aconteceu algum problema!",
        description: "Verifique seus dados e tente novamente."
      });
    } else {
      router.replace("/");
    }

    if (submitRef.current) {
      submitRef.current.disabled = false;
    }
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

        <Button
          type="submit"
          ref={submitRef}
          className="w-full">
          Login
        </Button>
        <div className="text-black text-small text-center">
          <Link
            className="border-b-2 border-solid border-b-primary text-primary"
            href="/forgot-password">
            Esqueci minha senha
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
