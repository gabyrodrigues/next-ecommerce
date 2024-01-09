import { createContext } from "react";
import { Product } from "@/lib/firebase/firestore";

interface CartProps {
  cartItems: CartItem[];
  cartTotalItems: number;
  cartTotalPrice: number;
  handleAddToCart: (product: Product) => void;
  handleRemoveCartItem: (product: CartItem) => void;
  handleAddQuantityToCartItem: (product: CartItem) => void;
  handleRemoveQuantityFromCartItem: (product: CartItem) => void;
  handleClearCart: () => void;
}

export interface CartItem extends Product {
  quantity: number;
}

export const CartContext = createContext({} as CartProps);
