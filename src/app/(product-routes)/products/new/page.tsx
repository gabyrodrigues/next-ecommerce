"use client";
import { Container } from "@/components/Container";
import { Flex } from "@/components/Flex";
import { FormNewProduct } from "@/components/FormNewProduct";

export default function NewProducts() {
  return (
    <Container className="max-w-screen-xl py-16 text-center">
      <h2 className="text-black text-4xl font-bold ml-auto mr-auto mb-4">Cadastrar novo produto</h2>
      <Flex className="m-auto md:max-w-4xl">
        <FormNewProduct />
      </Flex>
    </Container>
  );
}
