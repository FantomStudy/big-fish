import { Input as InputBase } from "@base-ui/react/input";
import clsx from "clsx";
import styles from "./Input.module.css";

export const Input = ({ type, className, ...props }: React.ComponentProps<"input">) => {
  return <InputBase type={type} className={clsx(styles.input, className)} {...props} />;
};
