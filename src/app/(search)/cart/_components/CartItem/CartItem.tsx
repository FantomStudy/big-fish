import { HeartIcon } from "lucide-react";
import Image from "next/image";
import { TrashBin } from "@/components/ui/icons";
import { NumberInput } from "@/components/ui/NumberInput";
import styles from "./CartItem.module.css";

interface CartItemProps {
  product: {
    description: string;
    price: number;
  };
  onCheck?: (state: boolean) => void;
}

export const CartItem = ({ product, onCheck }: CartItemProps) => {
  return (
    <aside className={styles.cardItem}>
      <div className={styles.productImage}>
        <input type="checkbox" onChange={(e) => onCheck?.(e.target.checked)} />
        <Image width={112} height={156} src="/mock/product.png" alt="product" />
      </div>
      <div className={styles.productContent}>
        <div className={styles.productDescription}>{product.description}</div>
        <div className={styles.productButtonsSection}>
          <button className={styles.productButton}>
            <HeartIcon fill="black" fillOpacity="0.72" strokeWidth={0} width={24} height={24} />
          </button>
          <button className={styles.productButton}>
            <TrashBin />
          </button>
          <button className={styles.productBuyButton}>Купить</button>
        </div>
      </div>
      <div className={styles.productPrice}>
        <h2>{product.price} ₽</h2>
        <NumberInput defaultValue={1} min={1} className={styles.numberInput} />
      </div>
    </aside>
  );
};
