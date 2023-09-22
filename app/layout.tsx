"use client"
import React from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { RootLayoutTypes } from "@/types";
import { Provider } from "react-redux";
import store from "@/redux/store/store";

const inter = Inter({ subsets: ["latin"] });

const ogTitle = "Sello Marketplace";
const ogDescription = "Sello - Web saytimizda hohlagan tovarlarimiz bor.";
const ogImage = "https://sello.uz/uz"; // Tegingizning URL manzili bo'lishi kerak

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
    <html lang="en">
      <head>
        <title>{ogTitle}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" // To'g'ri kutubxonani manzilini o'rnating
        />
      </head>

      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
