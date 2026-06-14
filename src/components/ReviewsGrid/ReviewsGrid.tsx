import clsx from "clsx";
import styles from "./ReviewsGrid.module.css";

export const ReviewsGrid = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.grid, className)} {...props} />;
};
