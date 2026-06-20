"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import clsx from "clsx";
import styles from "./Tabs.module.css";

export const Tabs = ({ className, ...props }: TabsPrimitive.Root.Props) => {
  return <TabsPrimitive.Root className={clsx(styles.root, className)} {...props} />;
};

export const TabsList = ({ className, children, ...props }: TabsPrimitive.List.Props) => {
  return (
    <TabsPrimitive.List className={clsx(styles.list, className)} {...props}>
      {children}
      <TabsPrimitive.Indicator className={styles.indicator} />
    </TabsPrimitive.List>
  );
};

export const TabsTab = ({ className, ...props }: TabsPrimitive.Tab.Props) => {
  return <TabsPrimitive.Tab className={clsx(styles.tab, className)} {...props} />;
};

export const TabsPanel = ({ className, ...props }: TabsPrimitive.Panel.Props) => {
  return <TabsPrimitive.Panel className={clsx(styles.panel, className)} {...props} />;
};
