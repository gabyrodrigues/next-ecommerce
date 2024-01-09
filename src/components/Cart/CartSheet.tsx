import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CartProductItem } from "./CartProductItem";
import { CartContext, CartItem } from "@/contexts/Cart";
import { Separator } from "@radix-ui/react-separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/Sheet";
import { ShoppingCart } from "@styled-icons/material-outlined";
import { Button } from "@/components/Button";
import { useContext } from "react";

export default function CartSheet() {
  const { cartItems, handleClearCart } = useContext(CartContext);
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
                    key={`${product.name}-${product.id}`}
                    className="space-y-3">
                    <CartProductItem product={product} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        <Button
          variant="outline"
          className="ml-2"
          onClick={handleClearCart}>
          Limpar carrinho
        </Button>
      </SheetContent>
    </Sheet>
  );
}
