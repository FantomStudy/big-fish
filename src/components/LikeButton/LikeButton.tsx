import { HeartIcon } from "lucide-react";
import { Toggle } from "../ui/Toggle";
import styles from "./LikeButton.module.css";

export const LikeButton = () => {
  return (
    <Toggle size="icon-sm" className={styles.toggle}>
      <HeartIcon className={styles.icon} />
    </Toggle>
  );
};
