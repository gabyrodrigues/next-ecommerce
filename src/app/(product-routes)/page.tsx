"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ProductCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArr: Product[] = [];
      querySnapshot.forEach((doc) => {
        itemsArr.push({ ...(doc.data() as Product), id: doc.id });
      });
      setProducts(itemsArr);
      return () => unsubscribe();
    });
  }, []);

  return (
    <>
      <Container className="max-w-screen-xl py-16 text-center">
        {products.map((product, id) => (
          <Card key={id}>
            <CardHeader>
              <Image
                src={`https://firebasestorage.googleapis.com/v0/b/next-ecommerce-2fa59.appspot.com/o/product%2Flipstick.jpg?alt=media`}
                alt="Product Image"
                width={300}
                height={250}
                className="h-auto w-full"
              />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </Container>
    </>
  );
}
