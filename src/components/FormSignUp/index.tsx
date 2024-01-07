import Link from "next/link";
import { Email, Lock } from "@styled-icons/material-outlined";
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function FormSignUp() {
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
        <TextField
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          icon={<Lock />}
        />

        <Button className="w-full">Sign up now</Button>
        <div className="text-black text-small text-center">
          Already have an account?{" "}
          <Link
            className="border-b-2 border-solid border-b-secondary text-secondary"
            href="/auth/sign-in">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
