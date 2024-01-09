import { useState } from "react";
import { CartContext, CartItem } from ".";
import { Product } from "@/lib/firebase/firestore";

interface CartContextProviderProps {
  children: React.ReactNode;
}

const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");

export default function CartContextProvider(props: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(localStorageCart);

  function setCartToState() {
    setCartItems(localStorageCart);
  }

  function handleAddToCart(product: Product) {
    console.log(product);
    const cartItem: CartItem = {
      ...product,
      quantity: 1
    };
    const productExistsInCart = cartItems.find((item) => item.id == product.id);
    let newCartItems;

    if (productExistsInCart) {
      newCartItems = cartItems.map((item) =>
        item.id === productExistsInCart.id
          ? { ...product, quantity: productExistsInCart.quantity + 1 }
          : cartItem
      );
    } else {
      newCartItems = [...cartItems, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState();
  }

  function handleRemoveCartItem(product: CartItem) {
    const filteredCart = cartItems.filter((item) => item.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartToState();
  }

  function handleRemoveQuantityFromCartItem(product: CartItem) {
    let newCartItems;
    if (product.quantity > 1) {
      newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...product, quantity: product.quantity - 1 } : item
      );
    } else {
      newCartItems = cartItems.filter((item) => item.id !== product.id);
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    setCartToState();
  }

  function handleClearCart() {
    setCartItems([]);
    localStorage.setItem("cart", JSON.stringify("[]"));
  }

  const values = {
    cartItems,
    handleAddToCart,
    handleRemoveCartItem,
    handleRemoveQuantityFromCartItem,
    handleClearCart
  };

  return <CartContext.Provider value={values}>{props.children}</CartContext.Provider>;
}
