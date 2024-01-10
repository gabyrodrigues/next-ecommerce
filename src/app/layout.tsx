import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NextAuthSessionProvider from "@/providers/sessionProvider";
import CartContextProvider from "@/contexts/Cart/provider";
import ProductContextProvider from "@/contexts/Product/provider";
import { Toaster } from "@/components/Toast/toaster";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next E-commerce",
  description: "A simple E-commerce developed with Typescript, React, NextJS and Tailwind CSS",
  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/icon-512.png",
    apple: "/img/icon-512.png"
  },
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <ProductContextProvider>
            <CartContextProvider>{children}</CartContextProvider>
          </ProductContextProvider>
        </NextAuthSessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
