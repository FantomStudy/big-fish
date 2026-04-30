import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import clsx from "clsx";
import styles from "./Slider.module.css";

export const Slider = ({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: SliderPrimitive.Root.Props) => {
  const _values = Array.isArray(value)
    ? value
    : Array.isArray(defaultValue)
      ? defaultValue
      : [min, max];

  return (
    <SliderPrimitive.Root
      className={clsx(styles.root, className)}
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      thumbAlignment="edge"
      {...props}
    >
      <SliderPrimitive.Control className={styles.control}>
        <SliderPrimitive.Track className={styles.track}>
          <SliderPrimitive.Indicator className={styles.indicator} />
        </SliderPrimitive.Track>
        {Array.from({ length: _values.length }, (_, index) => (
          <SliderPrimitive.Thumb key={index} className={styles.thumb} index={index} />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
};
