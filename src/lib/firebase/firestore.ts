import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from ".";
import { Unsubscribe } from "firebase/auth";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantityAvailable: string;
}

export async function getProducts() {
  const q = query(collection(db, "products"));

  const results = await getDocs(q);
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}

export async function getProductsSnapshot(cb: (products: Product[]) => void): Promise<Unsubscribe> {
  if (typeof cb !== "function") {
    console.error("Error: The callback parameter is not a function");
    return Promise.reject(new Error("Callback parameter is not a function"));
  }

  const q = query(collection(db, "products"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        ...(doc.data() as Product),
        id: doc.id
      };
    });

    cb(results);
  });

  return Promise.resolve(unsubscribe);
}
