import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { formSchema } from "./schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function FormSignIn() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false
    });

    if (!result?.ok || result?.error) {
      console.log(result);
      return;
    }

    router.replace("/");
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
                  placeholder="Password"
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
          className="w-full">
          Sign in now
        </Button>
        <div className="text-black text-small text-center">
          Don&apos;t have an account?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/sign-up">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
