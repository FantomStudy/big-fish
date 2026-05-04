import clsx from "clsx";
import styles from "./Typography.module.css";

export type TypographyVariant = "title" | "title-md" | "title-sm" | "body" | "body-sm";

type TypographyProps<T extends React.HTMLElementType> = {
  tag?: T;
  variant?: TypographyVariant;
} & React.ComponentProps<T>;

export const Typography = <T extends React.HTMLElementType = "p">({
  tag,
  variant = "body",
  className,
  ...props
}: TypographyProps<T>) => {
  const Comp = tag ?? ("p" as React.ElementType);

  return <Comp className={clsx(styles.typography, styles[variant], className)} {...props} />;
};
