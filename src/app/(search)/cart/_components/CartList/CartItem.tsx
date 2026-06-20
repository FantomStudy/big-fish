import type { Product } from "@/constants/mock/product";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { LikeButton } from "@/components/LikeButton";
import { Button, Card, Checkbox, NumberInput, Typography } from "@/components/ui";
import { toCurrency } from "@/lib/format";
import styles from "./CardItem.module.css";

interface CartItemProps {
  product: Product;
}

export const CartItem = ({ product }: CartItemProps) => {
  return (
    <Card className={styles.card}>
      <Checkbox className={styles.checkbox} />
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={120}
        height={160}
        className={styles.image}
      />

      <div className={styles.body}>
        <div className={styles.info}>
          <Typography>{product.name}</Typography>

          <div className={styles.controls}>
            <LikeButton />
            <Button variant="outline" size="icon-sm">
              <TrashIcon />
            </Button>
          </div>
        </div>

        <div className={styles.amount}>
          <Typography variant="text-sm" className={styles.price}>
            {toCurrency(product.price)}
          </Typography>
          <NumberInput />
        </div>
      </div>
    </Card>
  );
};
