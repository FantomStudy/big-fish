import clsx from "clsx";
import styles from "./Barcode.module.css";

export const Barcode = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.barcode, className)} aria-hidden {...props} />;
};
