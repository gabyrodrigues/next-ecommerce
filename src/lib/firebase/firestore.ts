import { addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { Unsubscribe } from "firebase/auth";
import * as z from "zod";

import { formSchema as productSchema } from "@/components/FormNewProduct/schema";
import { randomId } from "@/utils";
import { db } from ".";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantityAvailable: number;
}

export async function createProducts(product: z.infer<typeof productSchema>): Promise<void> {
  const regex = /^(.+?)(\.\w+)$/;
  const match = product.name.match(regex);
  const productBucket = "product";
  const productName = match ? match[1] : null;
  const fileExtension = match ? match[2] : null;

  const filePath = `${productBucket}/${randomId(16)}-${productName}${fileExtension}`;

  const storage = getStorage();
  const storageRef = ref(storage, filePath);

  await uploadBytesResumable(storageRef, product.image);

  await addDoc(collection(db, "products"), {
    name: product.name.trim(),
    description: product.description.trim(),
    price: product.price,
    image: filePath
  });
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
