"use client";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/Button";
import { Group } from "@/components/Group";
import { Flex } from "@/components/Flex";

import logo from "../../../public/img/logo-full.svg";
import { Favorite, ShoppingCart } from "@styled-icons/material-outlined";

export function Menu() {
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
          <Button className="px-5">Login</Button>
        </Group>
      </Flex>
    </Flex>
  );
}
