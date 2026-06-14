import clsx from "clsx";
import styles from "./NewsGrid.module.css";

export const NewsGrid = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.grid, className)} {...props} />;
};
