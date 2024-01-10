"use client";
import { useContext, useEffect } from "react";

import { Container } from "@/components/Container";
import { Flex } from "@/components/Flex";
import { Loader } from "@/components/Loader";

import { ProductsList } from "@/components/ProductsList";
import { ProductContext } from "@/contexts/Product";

export default function Home() {
  const { isLoading, products, handleLoadProducts } = useContext(ProductContext);

  async function fetchProducts() {
    try {
      await handleLoadProducts();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Container className="max-w-screen-xl py-16 text-center">
        {isLoading ? (
          <Flex className="items-center justify-center">
            <Loader />
          </Flex>
        ) : (
          <ProductsList products={products} />
        )}
      </Container>
    </>
  );
}
