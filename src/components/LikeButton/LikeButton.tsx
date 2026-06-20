import type { ToggleProps } from "@/components/ui";
import clsx from "clsx";
import { HeartIcon } from "lucide-react";
import { Toggle } from "@/components/ui";
import styles from "./LikeButton.module.css";

export const LikeButton = ({ className, size = "icon-sm", ...props }: ToggleProps) => {
  return (
    <Toggle size={size} className={clsx(styles.toggle, className)} {...props}>
      <HeartIcon className={styles.icon} />
    </Toggle>
  );
};
