"use client";

import { Dialog as SheetBase } from "@base-ui/react/dialog";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import styles from "./Sheet.module.css";

export const Sheet = ({ ...props }: SheetBase.Root.Props) => {
  return <SheetBase.Root {...props} />;
};

export const SheetTrigger = ({ ...props }: SheetBase.Trigger.Props) => {
  return <SheetBase.Trigger {...props} />;
};

export const SheetClose = ({ ...props }: SheetBase.Close.Props) => {
  return <SheetBase.Close {...props} />;
};

export const SheetContent = ({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: SheetBase.Popup.Props & {
  side?: "top" | "right" | "bottom" | "left";
  showCloseButton?: boolean;
}) => {
  return (
    <SheetBase.Portal>
      <SheetBase.Backdrop className={clsx(styles.backdrop, className)} />
      <SheetBase.Popup data-side={side} className={clsx(styles.popup, className)} {...props}>
        {children}
        {showCloseButton && (
          <SheetBase.Close
            render={
              <Button variant="ghost" size="icon-sm" className={styles.close}>
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </SheetBase.Popup>
    </SheetBase.Portal>
  );
};

export const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.header, className)} {...props} />;
};

export const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.footer, className)} {...props} />;
};

export const SheetTitle = ({ className, ...props }: SheetBase.Title.Props) => {
  return <SheetBase.Title className={clsx(styles.title, className)} {...props} />;
};

export const SheetDescription = ({ className, ...props }: SheetBase.Description.Props) => {
  return <SheetBase.Description className={clsx(styles.description, className)} {...props} />;
};
