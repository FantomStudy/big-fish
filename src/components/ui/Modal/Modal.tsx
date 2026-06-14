import { Dialog } from "@base-ui/react/dialog";
import clsx from "clsx";
import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import styles from "./Modal.module.css";

export const Modal = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
export const ModalClose = Dialog.Close;

interface ModalContentProps extends React.ComponentProps<typeof Dialog.Popup> {
  title: React.ReactNode;
}

export const ModalContent = ({ title, className, children, ...props }: ModalContentProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className={styles.backdrop} />
      <Dialog.Popup className={clsx(styles.popup, className)} {...props}>
        <div className={styles.header}>
          <Dialog.Title className={styles.title}>{title}</Dialog.Title>
          <Dialog.Close className={styles.close} render={<Button variant="ghost" size="icon" />}>
            <XIcon />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Popup>
    </Dialog.Portal>
  );
};

export { styles as modalStyles };
