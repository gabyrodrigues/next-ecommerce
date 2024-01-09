"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ProductCard";
import { Grid } from "@/components/Grid";
import { Flex } from "@/components/Flex";
import { Loader } from "@/components/Loader";
import { Product, getProductsSnapshot } from "@/lib/firebase/firestore";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  async function handleLoadProducts() {
    setLoading(true);

    const unsubscribe = await getProductsSnapshot((data) => {
      setProducts(data);
    });
    setLoading(false);

    return () => {
      unsubscribe();
    };
  }

  useEffect(() => {
    handleLoadProducts();
  }, []);

  return (
    <>
      <Container className="max-w-screen-xl py-16 text-center">
        {isLoading ? (
          <Flex className="items-center justify-center">
            <Loader />
          </Flex>
        ) : (
          <Grid>
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <Image
                    src={`https://firebasestorage.googleapis.com/v0/b/next-ecommerce-2fa59.appspot.com/o/${encodeURIComponent(
                      product.image
                    )}?alt=media`}
                    alt="Product Image"
                    width={300}
                    height={250}
                    className="h-auto w-full"
                  />
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
