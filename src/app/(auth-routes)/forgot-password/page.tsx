"use client";
import Link from "next/link";
import Image from "next/image";

import { FormForgotPassword } from "@/components/FormForgotPassword";
import { Flex } from "@/components/Flex";

import logo from "../../../../public/img/logo.svg";

export default function ForgotPassword() {
  return (
    <Flex className="flex-col justify-center items-center">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo Next E-commerce"
          className="w-16 mb-4"
        />
      </Link>

      <h2 className="text-black text-4xl font-bold ml-auto mr-auto mb-4">Esqueci minha senha</h2>
      <FormForgotPassword />
    </Flex>
  );
}
