import { useContext } from "react";
import { Product } from "@/lib/firebase/firestore";
import { AddShoppingCart } from "@styled-icons/material-outlined";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardImage,
  CardTitle
} from "@/components/ProductCard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/Tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/HoverCard";
import { useToast } from "@/components/Toast/useToast";
import { Button } from "@/components/Button";
import { Grid } from "@/components/Grid";

import { handleConvertPriceToBRL } from "@/utils/formatCurrency";
import { CartContext } from "@/contexts/Cart";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  const { toast } = useToast();
  const { handleAddToCart } = useContext(CartContext);

  function handleAddProductItem(product: Product) {
    handleAddToCart(product);
    toast({
      title: "Produto adicionado ao carrinho!",
      duration: 3000
    });
  }

  return (
    <Grid>
      {products.map((product) => (
        <Card key={product.id}>
          <CardImage
            src={`https://firebasestorage.googleapis.com/v0/b/next-ecommerce-2fa59.appspot.com/o/${encodeURIComponent(
              product.image
            )}?alt=media`}
            alt={product.name.join(" ")}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <CardContent>
            <CardTitle>{product.name.join(" ")}</CardTitle>

            <HoverCard>
              <HoverCardTrigger>
                <CardDescription>{product.description}</CardDescription>
              </HoverCardTrigger>

              <HoverCardContent>
                <CardTitle>{product.name.join(" ")}</CardTitle>
                <p className="text-sm mt-1">{product.description}</p>
              </HoverCardContent>
            </HoverCard>
          </CardContent>
          <CardFooter>
            <p className="text-black font-bold text-lg">
              {handleConvertPriceToBRL(+product.price)}
            </p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="filled"
                    onClick={() => handleAddProductItem(product)}
                    asChild={true}>
                    <div>
                      <AddShoppingCart
                        color="#FAFAFA"
                        size={24}
                      />
                    </div>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Adicionar ao carrinho</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardFooter>
        </Card>
      ))}
    </Grid>
  );
}
