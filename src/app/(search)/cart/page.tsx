"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/ui/Grid";
import { CartItem } from "./_components/CartItem";
import { CheckoutForm } from "./_components/CheckoutForm";
import styles from "./page.module.css";

// DEBUG Сделать корзину пустой
const EMPTY = false;

const CartPage = () => {
  const [checked, setChecked] = useState(0);

  return (
    <main className={clsx("container", styles.cartPage)}>
      <div className={styles.layout}>
        <div className={styles.column}>
          <h1>
            Корзина<span className={styles.checkedCount}>{checked}</span>
          </h1>
          {EMPTY ? (
            <div className={styles.empty}>
              <h5>Похоже в корзине пусто...</h5>
              <Image
                src="/cart/illustration.svg"
                width={359}
                height={426}
                alt="Похоже в корзине пусто..."
              />
            </div>
          ) : (
            <div className={styles.card}>
              {Array.from({ length: 7 }).map((_, i) => (
                <CartItem
                  onCheck={(state) => setChecked((prev) => (state ? prev + 1 : prev - 1))}
                  key={i}
                  product={{
                    price: 411,
                    description:
                      "Мягкие силиконовые приманки для рыбалки твистер 100мм на щуку судака и окуня",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <CheckoutForm />
      </div>
      <div className={styles.column}>
        <h1>Возможно вам понравится</h1>
        <Grid>
          {Array.from({ length: 50 }).map((_, index) => (
            <ProductCard
              key={index}
              product={{
                name: "Cиликоновая приманка",
                price: 411,
                imageUrl: "/mock/product.png",
                color: "#60CBFF",
              }}
            />
          ))}
        </Grid>
      </div>
    </main>
  );
};

export default CartPage;
