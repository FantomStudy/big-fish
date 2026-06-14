import clsx from "clsx";
import styles from "./ProductsGrid.module.css";

export const ProductsGrid = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.grid, className)} {...props} />;
};
