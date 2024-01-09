import { createContext } from "react";
import { Product } from "@/lib/firebase/firestore";

interface CartProps {
  cartItems: CartItem[];
  handleAddToCart: (product: Product) => void;
  handleRemoveCartItem: (product: CartItem) => void;
  handleRemoveQuantityFromCartItem: (product: CartItem) => void;
  handleClearCart: () => void;
}

export interface CartItem extends Product {
  quantity: number;
}

export const CartContext = createContext({} as CartProps);
