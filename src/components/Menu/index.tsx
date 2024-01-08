"use client";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Favorite, Logout, ShoppingCart } from "@styled-icons/material-outlined";

import { Button } from "@/components/Button";
import { Group } from "@/components/Group";
import { Flex } from "@/components/Flex";

import logo from "../../../public/img/logo-full.svg";
import { Session } from "next-auth";

interface MenuProps {
  session: Session;
}

export function Menu({ session }: MenuProps) {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      redirect: false
    });

    router.replace("/sign-in");
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
          <Button variant="outline">
            <Favorite size={24} />
          </Button>
          <Button variant="outlineSecondary">
            <ShoppingCart size={24} />
          </Button>
          {session ? (
            <Group>
              Olá, {session?.user?.name}{" "}
              <Button
                onClick={handleSignOut}
                variant="unstyled">
                <Logout size={24} /> Sair
              </Button>
            </Group>
          ) : (
            <Link href="/sign-in">
              <Button className="px-5">Login</Button>
            </Link>
          )}
        </Group>
      </Flex>
    </Flex>
  );
}
