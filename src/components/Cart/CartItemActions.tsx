import { useContext } from "react";
import { DeleteOutline } from "@styled-icons/material-outlined";

import { CartContext, CartItem } from "@/contexts/Cart";
import { TextField } from "@/components/TextField";
import { Button } from "@/components/Button";

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
        onClick={() => {
          handleAddQuantityToCartItem(product);
        }}>
        +
      </Button>
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={() => handleRemoveCartItem(product)}>
        <DeleteOutline
          color="#F231A5"
          size={14}
        />
      </Button>
    </div>
  );
}
