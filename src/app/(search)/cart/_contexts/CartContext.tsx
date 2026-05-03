"use client";

import { createContext, use, useState } from "react";

interface CartContextType {
  checkedProducts: number[];
  setCheckedProducts: (checkedProducts: number[]) => void;
}

const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children?: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [checkedProducts, setCheckedProducts] = useState<number[]>([]);

  return <CartContext value={{ checkedProducts, setCheckedProducts }}>{children}</CartContext>;
};

export const useCartContext = () => {
  const context = use(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within CartProvider");
  }
  return context;
};
