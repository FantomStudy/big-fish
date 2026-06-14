import clsx from "clsx";
import styles from "./Typography.module.css";

export type TypographyVariant =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl"
  | "text-7xl"
  | "text-8xl"
  | "text-9xl";

type TypographyProps<T extends React.HTMLElementType> = {
  tag?: T;
  variant?: TypographyVariant;
} & React.ComponentProps<T>;

export const Typography = <T extends React.HTMLElementType = "p">({
  tag,
  variant = "text-base",
  className,
  ...props
}: TypographyProps<T>) => {
  const Comp = tag ?? ("p" as React.ElementType);

  return <Comp className={clsx(styles.typography, styles[variant], className)} {...props} />;
};
