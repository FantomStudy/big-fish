import Image from "next/image";
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
        <p className={styles.price}>{product.price} ₽</p>

        <div className={styles.properties}>
          <p className={styles.name}>{product.name}</p>
          <div className={styles.color} style={{ background: product.color }} />
        </div>
      </div>
    </div>
  );
};
