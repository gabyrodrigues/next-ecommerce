"use client";

import * as React from "react";
import Image from "next/image";

import { handleConvertPriceToBRL } from "@/utils/formatCurrency";
import { CartItem } from "@/contexts/Cart";
import { CartItemActions } from "@/components/Cart/CartItemActions";

interface CartProductItemProps {
  product: CartItem;
}

export function CartProductItem({ product }: CartProductItemProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/next-ecommerce-2fa59.appspot.com/o/${encodeURIComponent(
            product.image
          )}?alt=media`}
          alt={product.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="absolute object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 self-start text-sm">
        <span className="text-white line-clamp-1">{product.name}</span>
        <span className="text-white  line-clamp-1 text-muted-foreground">
          {handleConvertPriceToBRL(product.price)} x {product.quantity} ={" "}
        </span>
        <span className="text-white  line-clamp-1 text-muted-foreground">
          {handleConvertPriceToBRL(product.price * product.quantity)}
        </span>
      </div>
      <CartItemActions product={product} />
    </div>
  );
}
