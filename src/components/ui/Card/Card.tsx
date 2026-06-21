import clsx from "clsx";
import styles from "./Card.module.css";

interface CardProps extends React.ComponentProps<"div"> {
  variant?: "default" | "dark" | "medium";
}

export const Card = ({ className, variant = "default", ...props }: CardProps) => {
  return <div className={clsx(styles.card, styles[variant], className)} {...props} />;
};
