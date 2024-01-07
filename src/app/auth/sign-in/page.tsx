"use client";
import Link from "next/link";
import Image from "next/image";

import FormSignIn from "@/components/FormSignIn";
import Flex from "@/components/Flex";

import logo from "../../../../public/img/logo-full.svg";

export default function SignIn() {
  return (
    <Flex className="flex-col justify-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo Next E-commerce"
          className="w-28"
        />
      </Link>

      <h2 className="text-black text-4xl font-bold ml-auto mr-auto mb-4">Sign In</h2>
      <FormSignIn />
    </Flex>
  );
}
