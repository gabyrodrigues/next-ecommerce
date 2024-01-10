"use client";
import { useContext, useEffect, useState } from "react";
import { AddShoppingCart } from "@styled-icons/material-outlined";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle
} from "@/components/ProductCard";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/HoverCard";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/Tooltip";
import { Container } from "@/components/Container";
import { Grid } from "@/components/Grid";
import { Flex } from "@/components/Flex";
import { Loader } from "@/components/Loader";
import { Button } from "@/components/Button";

import { CartContext } from "@/contexts/Cart";
import { Product, getProductsSnapshot } from "@/lib/firebase/firestore";
import { handleConvertPriceToBRL } from "@/utils/formatCurrency";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  const { handleAddToCart } = useContext(CartContext);

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
                <CardImage
                  src={`https://firebasestorage.googleapis.com/v0/b/next-ecommerce-2fa59.appspot.com/o/${encodeURIComponent(
                    product.image
                  )}?alt=media`}
                  alt={product.name}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <CardContent>
                  <CardTitle>{product.name}</CardTitle>

                  <HoverCard>
                    <HoverCardTrigger>
                      <CardDescription>{product.description}</CardDescription>
                    </HoverCardTrigger>

                    <HoverCardContent>
                      <CardTitle>{product.name}</CardTitle>
                      <p className="text-sm mt-1">{product.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                </CardContent>
                <CardFooter>
                  <p className="text-black font-bold text-lg">
                    {handleConvertPriceToBRL(+product.price)}
                  </p>

                  <TooltipProvider>
                    <TooltipTrigger>
                      <Button onClick={() => handleAddToCart(product)}>
                        <AddShoppingCart size={24} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Adicionar ao carrinho</p>
                    </TooltipContent>
                  </TooltipProvider>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
