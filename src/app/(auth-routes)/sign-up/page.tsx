"use client";
import Link from "next/link";
import Image from "next/image";

import { FormSignUp } from "@/components/FormSignUp";
import { Flex } from "@/components/Flex";

import logo from "../../../../public/img/logo.svg";

export default function SignUp() {
  return (
    <Flex className="flex-col justify-center items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo Next E-commerce"
          className="w-16 mb-4"
        />
      </Link>

      <h2 className="text-black text-4xl font-bold ml-auto mr-auto mb-4">Cadastro</h2>
      <FormSignUp />
    </Flex>
  );
}
