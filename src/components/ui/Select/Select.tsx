"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import clsx from "clsx";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import styles from "./Select.module.css";

export const Select = SelectPrimitive.Root;

export const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => {
  return <SelectPrimitive.Group className={clsx(styles.group, className)} {...props} />;
};

export const SelectValue = ({ className, ...props }: SelectPrimitive.Value.Props) => {
  return <SelectPrimitive.Value className={clsx(styles.value, className)} {...props} />;
};

export const SelectTrigger = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  variant?: "default" | "dark";
  size?: "sm" | "default";
}) => {
  return (
    <SelectPrimitive.Trigger
      data-size={size}
      className={clsx(styles.trigger, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon render={<ChevronDownIcon className={styles.chevron} />} />
    </SelectPrimitive.Trigger>
  );
};

export const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => {
  return (
    <SelectPrimitive.ScrollUpArrow className={clsx(styles.scrollButton, className)} {...props}>
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
};

export const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => {
  return (
    <SelectPrimitive.ScrollDownArrow className={clsx(styles.scrollButton, className)} {...props}>
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
};

export const SelectContent = ({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className={styles.positioner}
      >
        <SelectPrimitive.Popup
          data-align-trigger={alignItemWithTrigger}
          className={clsx(styles.popup, className)}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};

export const SelectLabel = ({ className, ...props }: SelectPrimitive.GroupLabel.Props) => {
  return <SelectPrimitive.GroupLabel className={clsx(styles.label, className)} {...props} />;
};

export const SelectItem = ({ className, children, ...props }: SelectPrimitive.Item.Props) => {
  return (
    <SelectPrimitive.Item className={clsx(styles.item, className)} {...props}>
      <SelectPrimitive.ItemText className={styles.itemText}>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={
          <span className={styles.itemIndicator}>
            <CheckIcon className={styles.checkIcon} />
          </span>
        }
      />
    </SelectPrimitive.Item>
  );
};

export const SelectSeparator = ({ className, ...props }: SelectPrimitive.Separator.Props) => {
  return <SelectPrimitive.Separator className={clsx(styles.separator, className)} {...props} />;
};
