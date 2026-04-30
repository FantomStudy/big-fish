"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import clsx from "clsx";
import { CheckIcon } from "lucide-react";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ className, ...props }: CheckboxPrimitive.Root.Props) => {
  return (
    <CheckboxPrimitive.Root className={clsx(styles.checkbox, className)} {...props}>
      <CheckboxPrimitive.Indicator className={styles.indicator}>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
