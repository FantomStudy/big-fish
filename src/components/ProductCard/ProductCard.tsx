import clsx from "clsx";
import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";
import { LikeButton } from "@/components/LikeButton";
import { Card, Typography } from "@/components/ui";
import { toCurrency } from "@/lib/format";
import styles from "./ProductCard.module.css";

interface ProductCardProps extends React.ComponentProps<"div"> {
  product: {
    name: string;
    imageUrl: string;
    price: number;
    color: React.CSSProperties["color"];
  };
}

export const ProductCard = ({ product, className, ...props }: ProductCardProps) => {
  return (
    <Card className={clsx(styles.card, className)} {...props}>
      <div className={styles.preview}>
        <Image src={product.imageUrl} alt={product.name} fill className={styles.preview} />
        <LikeButton size="icon" className={styles.like} />
        <AddToCartButton className={styles.cart} />
      </div>

      <div className={styles.info}>
        <Typography className={styles.price}>{toCurrency(product.price)}</Typography>

        <div className={styles.properties}>
          <Typography variant="text-sm" className={styles.name}>
            {product.name}
          </Typography>
          <div className={styles.color} style={{ background: product.color }} />
        </div>
      </div>
    </Card>
  );
};
