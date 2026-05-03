import { NumberField } from "@base-ui/react/number-field";
import clsx from "clsx";
import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./NumberInput.module.css";

export const NumberInput = ({
  className,
  min = 0,
  max = 100,
  ...props
}: NumberField.Root.Props) => {
  return (
    <NumberField.Root min={min} max={max} className={clsx(styles.field, className)} {...props}>
      <NumberField.Group className={styles.group}>
        <NumberField.Decrement className={clsx(styles.stepper, styles.decrement)}>
          <MinusIcon />
        </NumberField.Decrement>
        <NumberField.Input className={styles.input} />
        <NumberField.Increment className={clsx(styles.stepper, styles.increment)}>
          <PlusIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
};
