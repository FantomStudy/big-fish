import { Input as InputBase } from "@base-ui/react";
import clsx from "clsx";
import styles from "./Input.module.css";

interface InputProps extends InputBase.Props {}

export const Input = ({ className, ...props }: InputProps) => {
  return <InputBase className={clsx(styles.Input, className)} {...props} />;
};
