import { Input as InputBase } from "@base-ui/react/input";
import clsx from "clsx";
import styles from "./Input.module.css";

interface InputProps extends React.ComponentProps<"input"> {
  variant?: "default" | "dark";
}

export const Input = ({ type, variant = "default", className, ...props }: InputProps) => {
  return (
    <InputBase type={type} className={clsx(styles.input, styles[variant], className)} {...props} />
  );
};