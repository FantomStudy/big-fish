import type { Product } from "@/mock/products";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { LikeButton } from "@/components/product/LikeButton";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox } from "@/components/ui/Checkbox";
import { NumberInput } from "@/components/ui/NumberInput";
import { Typography } from "@/components/ui/Typography";
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
          <Typography variant="title-sm" className={styles.price}>
            {toCurrency(product.price)}
          </Typography>
          <NumberInput />
        </div>
      </div>
    </Card>
  );
};
