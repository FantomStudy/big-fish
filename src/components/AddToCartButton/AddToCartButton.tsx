import clsx from "clsx";
import { ShoppingBasketIcon } from "lucide-react";
import { Button } from "@/components/ui";
import styles from "./AddToCartButton.module.css";

interface AddToCartButtonProps {
  className?: string;
  onClick?: () => void;
}

export const AddToCartButton = ({ className, onClick }: AddToCartButtonProps) => {
  return (
    <Button
      size="icon"
      aria-label="Добавить в корзину"
      className={clsx(styles.button, className)}
      onClick={onClick}
    >
      <ShoppingBasketIcon className={styles.icon} />
    </Button>
  );
};
