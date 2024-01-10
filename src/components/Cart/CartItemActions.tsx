import { useContext } from "react";
import { DeleteOutline } from "@styled-icons/material-outlined";

import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/Tooltip";
import { CartContext, CartItem } from "@/contexts/Cart";

interface CartItemActionsProps {
  product: CartItem;
}

export function CartItemActions({ product }: CartItemActionsProps) {
  const { handleAddQuantityToCartItem, handleRemoveQuantityFromCartItem, handleRemoveCartItem } =
    useContext(CartContext);

  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          className="h-8 w-8 text-white"
          onClick={() => {
            handleRemoveQuantityFromCartItem(product);
          }}>
          -
        </Button>
      </div>
      <TextField
        className="h-8 w-14 text-sm"
        type="number"
        min="1"
        value={product.quantity}
        readOnly
      />
      <Button
        variant="outline"
        className="h-8 w-8 text-white"
        disabled={product.quantityAvailable >= product.quantity}
        onClick={() => {
          handleAddQuantityToCartItem(product);
        }}>
        +
      </Button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant="outline"
              className="h-8 w-8 p-0"
              onClick={() => handleRemoveCartItem(product)}
              asChild={true}>
              <div>
                <DeleteOutline
                  color="#F231A5"
                  size={16}
                />
              </div>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Remover produto</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
