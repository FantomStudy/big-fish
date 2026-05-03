import { Toggle as ToggleBase } from "@base-ui/react/toggle";
import clsx from "clsx";
import styles from "./Toggle.module.css";

export type ToggleSize = "sm" | "md" | "icon-sm" | "icon";

export interface ToggleProps extends ToggleBase.Props {
  size?: ToggleSize;
}

export const Toggle = ({ className, size = "md", ...props }: ToggleProps) => {
  return <ToggleBase {...props} className={clsx(styles.toggle, styles[size], className)} />;
};
