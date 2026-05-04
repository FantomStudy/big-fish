import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: {
    name: string;
    imageUrl: string;
    price: number;
    color: React.CSSProperties["color"];
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.preview}>
        <Image src={product.imageUrl} alt={product.name} fill className={styles.preview} />
      </div>

      <div className={styles.info}>
        <Typography variant="title-sm" className={styles.price}>
          {product.price} ₽
        </Typography>

        <div className={styles.properties}>
          <Typography variant="body-sm" className={styles.name}>
            {product.name}
          </Typography>
          <div className={styles.color} style={{ background: product.color }} />
        </div>
      </div>
    </div>
  );
};
