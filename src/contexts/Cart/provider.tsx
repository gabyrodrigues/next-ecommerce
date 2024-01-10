"use client";
import { useEffect, useState } from "react";

import { Product } from "@/lib/firebase/firestore";
import { CartContext, CartItem } from ".";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export default function CartContextProvider(props: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartTotalItems, setCartTotalItems] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    handleCartStates();
  }, []);

  function handleCartStates() {
    const localStorageCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartTotalPrice = localStorageCart.reduce(
      (acc: number, current: CartItem) => acc + current.price * current.quantity,
      0
    );
    const cartTotalItems = localStorageCart.reduce(
      (acc: number, current: CartItem) => acc + current.quantity,
      0
    );
    setCartItems(localStorageCart);
    setCartTotalPrice(cartTotalPrice);
    setCartTotalItems(cartTotalItems);
  }

  function handleAddToCart(product: Product) {
    const cartItem: CartItem = {
      ...product,
      quantity: 1
    };
    const productExistsInCart = cartItems.find((item) => item.id == product.id);
    let newCartItems;

    if (productExistsInCart) {
      newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...product, quantity: productExistsInCart.quantity + 1 } : item
      );
    } else {
      newCartItems = [...cartItems, cartItem];
    }

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    handleCartStates();
  }

  function handleRemoveCartItem(product: CartItem) {
    const filteredCart = cartItems.filter((item) => item.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    handleCartStates();
  }

  function handleAddQuantityToCartItem(product: CartItem) {
    const newCartItems = cartItems.map((item) =>
      item.id === product.id ? { ...product, quantity: product.quantity + 1 } : item
    );

    localStorage.setItem("cart", JSON.stringify(newCartItems));
    handleCartStates();
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
    handleCartStates();
  }

  function handleClearCart() {
    setCartItems([]);
    setCartTotalPrice(0);
    setCartTotalItems(0);
    localStorage.setItem("cart", JSON.parse("[]"));
  }

  const values = {
    cartItems,
    cartTotalItems,
    cartTotalPrice,
    handleAddToCart,
    handleRemoveCartItem,
    handleAddQuantityToCartItem,
    handleRemoveQuantityFromCartItem,
    handleClearCart
  };

  return <CartContext.Provider value={values}>{props.children}</CartContext.Provider>;
}
