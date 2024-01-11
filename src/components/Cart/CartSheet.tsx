import { useContext } from "react";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "@styled-icons/material-outlined";

import { CartContext, CartItem } from "@/contexts/Cart";
import { handleConvertPriceToBRL } from "@/utils/formatCurrency";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/Sheet";
import { Button } from "@/components/Button";
import { Flex } from "@/components/Flex";
import { CartProductItem } from "./CartProductItem";

export default function CartSheet() {
  const { cartItems, cartTotalPrice, handleClearCart } = useContext(CartContext);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Cart"
          variant="outline"
          className="relative">
          <ShoppingCart
            size={24}
            aria-hidden="true"
          />
          <p className="text-primary font-bold">{itemCount}</p>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Carrinho {itemCount > 0 && `(${itemCount})`}</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 && (
          <div className="flex flex-1 flex-col gap-5 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="flex flex-col gap-5 pr-6">
                {cartItems.map((product: CartItem) => (
                  <div
                    key={`${product.name.join(" ")}-${product.id}`}
                    className="space-y-3">
                    <CartProductItem product={product} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        {cartTotalPrice > 0 && (
          <Flex className="justify-between">
            <h2 className="text-xl text-white font-semibold">Total do pedido:</h2>
            <p className="text-xl text-white font-semibold">
              {handleConvertPriceToBRL(+cartTotalPrice)}
            </p>
          </Flex>
        )}

        {itemCount > 0 && (
          <>
            <Button className="ml-2">Fechar pedido</Button>
            <Button
              variant="outline"
              className="ml-2"
              onClick={handleClearCart}>
              Limpar carrinho
            </Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
