"use client";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AddCircleOutline, Logout } from "@styled-icons/material-outlined";

import { Button } from "@/components/Button";
import { Group } from "@/components/Group";
import { Flex } from "@/components/Flex";
import CartSheet from "@/components/Cart/CartSheet";

import logo from "../../../public/img/logo-full.svg";

interface MenuProps {
  session: Session | null;
}

export function Menu({ session }: MenuProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      redirect: false
    });

    router.push("/");
  }

  return (
    <Flex className="p-4 bg-mainBg justify-center">
      <Flex className="justify-between px-3 max-w-screen-xl w-full">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo Next E-commerce"
            className="w-28"
            priority
          />
        </Link>

        <Group>
          <CartSheet />

          <Group>
            <Link href={session?.user ? "/products/new" : "/sign-in"}>
              <Button variant="secondary">
                <AddCircleOutline
                  className="mr-1"
                  size={24}
                />
                Produto
              </Button>
            </Link>
            {session?.user ? (
              <Button
                onClick={handleSignOut}
                variant="ghost">
                <Logout
                  className="mr-1"
                  size={24}
                />
                Sair
              </Button>
            ) : (
              <Link href="/sign-in">
                <Button className="px-5">Login</Button>
              </Link>
            )}
          </Group>
        </Group>
      </Flex>
    </Flex>
  );
}
