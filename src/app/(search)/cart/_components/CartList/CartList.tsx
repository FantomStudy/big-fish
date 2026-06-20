"use client";

import type { Product } from "@/constants/mock/product";
import Image from "next/image";
import { Typography } from "@/components/ui";
import { useCartContext } from "../../_contexts/CartContext";
import { OrderForm } from "../OrderForm";
import { CartItem } from "./CartItem";
import styles from "./CartList.module.css";

const EmptyScreen = () => {
  return (
    <div className={styles.empty}>
      <Typography variant="text-xl">Похоже в корзине пусто...</Typography>
      <Image src="/cart/empty.svg" width={359} height={426} alt="Похоже в корзине пусто..." />
    </div>
  );
};

interface CartListProps {
  products: Product[];
}

export const CartList = ({ products }: CartListProps) => {
  const { checkedProducts } = useCartContext();

  return (
    <div className={styles.section}>
      <Typography variant="text-3xl" tag="h1">
        Корзина <sup>{checkedProducts.length}</sup>
      </Typography>

      <div className={styles.layout}>
        {products.length === 0 ? (
          <EmptyScreen />
        ) : (
          <div className="stack-sm">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        )}

        <OrderForm />
      </div>
    </div>
  );
};
