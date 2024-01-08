import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Email, Lock } from "@styled-icons/material-outlined";
import * as z from "zod";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/Form";
import { formSchema } from "./schema";

export function FormSignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
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

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <TextField
                  placeholder="Confirm Password"
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
          Sign up now
        </Button>
        <div className="text-black text-small text-center">
          Already have an account?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/sign-in">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
