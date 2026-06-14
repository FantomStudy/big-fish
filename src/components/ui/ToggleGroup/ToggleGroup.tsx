"use client";

import type { ToggleProps, ToggleSize } from "@/components/ui";
import { ToggleGroup as ToggleGroupBase } from "@base-ui/react/toggle-group";
import clsx from "clsx";
import { createContext, use } from "react";
import { Toggle } from "@/components/ui";
import styles from "./ToggleGroup.module.css";

interface ToggleGroupContextValue {
  size: ToggleSize;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue>({
  size: "md",
});

interface ToggleGroupProps extends ToggleGroupBase.Props {
  size?: ToggleSize;
  spacing?: number;
}

export const ToggleGroup = ({
  className,
  size = "md",
  spacing = 0,
  orientation = "horizontal",
  style,
  children,
  ...props
}: ToggleGroupProps) => {
  const groupStyle = {
    "--toggle-group-gap": `${spacing}px`,
    ...style,
  } as unknown as React.CSSProperties;

  return (
    <ToggleGroupBase
      className={clsx(styles.group, styles[orientation], spacing === 0 && styles.joined, className)}
      data-spacing={spacing}
      data-size={size}
      orientation={orientation}
      style={groupStyle}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupBase>
  );
};

export const ToggleGroupItem = ({ className, size, ...props }: ToggleProps) => {
  const context = use(ToggleGroupContext);

  return <Toggle className={clsx(styles.item, styles[context.size], className)} {...props} />;
};
