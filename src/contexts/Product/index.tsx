import { SetStateAction, createContext } from "react";
import { FilterOptions, Product } from "@/lib/firebase/firestore";

interface ProductProps {
  isLoading: boolean;
  products: Product[];
  setProducts: (value: SetStateAction<Product[]>) => void;
  setLoading: (value: SetStateAction<boolean>) => void;
  handleLoadProducts: (filters?: FilterOptions) => Promise<void>;
}

export const ProductContext = createContext({} as ProductProps);
