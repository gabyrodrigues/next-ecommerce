import { SetStateAction, createContext } from "react";
import { FilterOptions, Product } from "@/lib/firebase/firestore";
import { Unsubscribe } from "firebase/auth";

interface ProductProps {
  isLoading: boolean;
  products: Product[];
  setProducts: (value: SetStateAction<Product[]>) => void;
  setLoading: (value: SetStateAction<boolean>) => void;
  handleLoadProducts: (filters?: FilterOptions) => Promise<Unsubscribe>;
}

export const ProductContext = createContext({} as ProductProps);
