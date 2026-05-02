import type { NumberFieldInput } from "@base-ui/react/number-field";
import { NumberField } from "@base-ui/react/number-field";
import clsx from "clsx";
import { MinusIcon, PlusIcon } from "lucide-react";
import styles from "./NumberInput.module.css";

export const NumberInput = ({
  id,
  defaultValue,
  max,
  min,
  className,
  ...props
}: NumberFieldInput.Props & { defaultValue?: number; max?: number; min?: number }) => {
  return (
    <NumberField.Root
      id={id}
      defaultValue={defaultValue}
      max={max}
      min={min}
      className={styles.field}
    >
      <NumberField.Group className={styles.group}>
        <NumberField.Decrement className={styles.decrement}>
          <MinusIcon opacity={0.71} />
        </NumberField.Decrement>
        <NumberField.Input
          max={max}
          min={min}
          id={id}
          className={clsx(styles.input, className)}
          {...props}
        />
        <NumberField.Increment className={styles.increment}>
          <PlusIcon opacity={0.71} />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
};
