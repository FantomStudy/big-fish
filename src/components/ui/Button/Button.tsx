import { Button as ButtonBase } from "@base-ui/react/button";
import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonBase.Props {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "icon-sm" | "icon";
}

export const Button = ({ className, variant = "primary", size = "md", ...props }: ButtonProps) => {
  return (
    <ButtonBase
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    />
  );
};
