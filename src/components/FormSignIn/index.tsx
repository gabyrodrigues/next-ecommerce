import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function FormSignIn() {
  return (
    <div>
      <form className="flex flex-col gap-2">
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />

        <Button className="w-full">Sign in now</Button>
        <div className="text-black text-small text-center">
          Don&apos;t have an account?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/auth/sign-up">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
