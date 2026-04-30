"use client";

import { Radio as RadioBase } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupBase } from "@base-ui/react/radio-group";
import clsx from "clsx";
import styles from "./Radio.module.css";

export const RadioGroup = ({ className, ...props }: RadioGroupBase.Props) => {
  return <RadioGroupBase className={clsx(styles.group, className)} {...props} />;
};

export const RadioGroupItem = ({ className, ...props }: RadioBase.Root.Props) => {
  return (
    <RadioBase.Root className={clsx(styles.item, className)} {...props}>
      <RadioBase.Indicator className={styles.indicator}>
        <span className={styles.dot} />
      </RadioBase.Indicator>
    </RadioBase.Root>
  );
};
