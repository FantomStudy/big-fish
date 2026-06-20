"use client";

import clsx from "clsx";
import { useState } from "react";
import { LikeButton } from "@/components/LikeButton";
import { Button, Card, NumberInput } from "@/components/ui";
import { toCurrency } from "@/lib/format";
import styles from "./ProductPurchase.module.css";

interface ProductPurchaseProps extends React.ComponentProps<typeof Card> {
  price: number;
  oldPrice?: number;
  article: string;
}

export const ProductPurchase = ({
  price,
  oldPrice,
  article,
  className,
  ...props
}: ProductPurchaseProps) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <div className={styles.top}>
        <div className={styles.prices}>
          <span className={styles.price}>{toCurrency(price)}</span>
          {oldPrice && <span className={styles.oldPrice}>{toCurrency(oldPrice)}</span>}
        </div>

        <div className={styles.article}>
          <span className={styles.articleLabel}>Артикул:</span>
          <span className={styles.articleValue}>{article}</span>
        </div>
      </div>

      <div className={styles.quantityRow}>
        <span className={styles.quantityLabel}>Количество:</span>
        <NumberInput
          min={1}
          max={99}
          value={quantity}
          onValueChange={(value) => setQuantity(value ?? 1)}
        />
      </div>

      <div className={styles.actions}>
        <Button className={styles.order}>Заказать</Button>
        <Button variant="outline" className={styles.cart}>
          В корзину
        </Button>
        <LikeButton className={styles.likeButton} />
      </div>
    </Card>
  );
};
