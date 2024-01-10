"use client";
import { useState } from "react";

import { FilterOptions, Product, getProductsSnapshot } from "@/lib/firebase/firestore";
import { ProductContext } from ".";

interface ProductContextProviderProps {
  children: React.ReactNode;
}

export default function ProductContextProvider(props: ProductContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  async function handleLoadProducts(filters: FilterOptions = {}) {
    setLoading(true);

    await getProductsSnapshot((data) => {
      setProducts(data);
    }, filters);

    setLoading(false);
  }

  const values = {
    products,
    isLoading,
    setProducts,
    setLoading,
    handleLoadProducts
  };

  return <ProductContext.Provider value={values}>{props.children}</ProductContext.Provider>;
}
