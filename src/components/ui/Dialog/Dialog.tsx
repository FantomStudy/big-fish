"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { Button } from "../Button";
import styles from "./Dialog.module.css";

export const Dialog = ({ ...props }: DialogPrimitive.Root.Props) => {
  return <DialogPrimitive.Root {...props} />;
};

export const DialogTrigger = ({ ...props }: DialogPrimitive.Trigger.Props) => {
  return <DialogPrimitive.Trigger {...props} />;
};

export const DialogClose = ({ ...props }: DialogPrimitive.Close.Props) => {
  return <DialogPrimitive.Close {...props} />;
};

export const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
}) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop className={styles.backdrop} />
      <DialogPrimitive.Popup className={clsx(styles.popup, className)} {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            render={
              <Button variant="ghost" className={styles.close} size="icon-sm">
                <XIcon />
                <span className="sr-only">Close</span>
              </Button>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
};

export const DialogHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.header, className)} {...props} />;
};

export const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) => {
  return (
    <div className={clsx(styles.footer, className)} {...props}>
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close render={<Button variant="outline">Закрыть</Button>} />
      )}
    </div>
  );
};

export const DialogTitle = ({ className, ...props }: DialogPrimitive.Title.Props) => {
  return <DialogPrimitive.Title className={clsx(styles.title, className)} {...props} />;
};

export const DialogDescription = ({ className, ...props }: DialogPrimitive.Description.Props) => {
  return <DialogPrimitive.Description className={clsx(styles.description, className)} {...props} />;
};