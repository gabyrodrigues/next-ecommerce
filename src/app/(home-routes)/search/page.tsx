"use client";
import { useContext, useEffect } from "react";

import { Container } from "@/components/Container";
import { Flex } from "@/components/Flex";
import { Loader } from "@/components/Loader";

import { ProductsList } from "@/components/ProductsList";
import { ProductContext } from "@/contexts/Product";

export default function SearchPage({
  searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const { isLoading, products, handleLoadProducts } = useContext(ProductContext);

  const query = searchParams?.query || "";

  async function fetchProducts() {
    await handleLoadProducts({ name: query });
  }

  useEffect(() => {
    fetchProducts();
  }, [query]);

  return (
    <>
      <Container className="max-w-screen-xl py-16 text-center">
        {isLoading ? (
          <Flex className="items-center justify-center">
            <Loader />
          </Flex>
        ) : (
          <Flex className="flex-col gap-14">
            <h2 className="text-3xl text-black font-semibold">
              Produtos encontrados: {products.length}
            </h2>

            <ProductsList products={products} />
          </Flex>
        )}
      </Container>
    </>
  );
}
