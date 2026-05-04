import clsx from "clsx";
import styles from "./PostGrid.module.css";

export const PostGrid = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.grid, className)} {...props} />;
};
