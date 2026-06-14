import clsx from "clsx";
import { HeartIcon } from "lucide-react";
import { Toggle } from "@/components/ui";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  className?: string;
}

export const LikeButton = ({ className }: LikeButtonProps) => {
  return (
    <Toggle size="icon-sm" className={clsx(styles.toggle, className)}>
      <HeartIcon className={styles.icon} />
    </Toggle>
  );
};
