import clsx from "clsx";
import { useMemo } from "react";
import styles from "./Field.module.css";

interface FieldProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
}

export const Field = ({ orientation = "vertical", className, ...props }: FieldProps) => {
  return (
    <div
      role="group"
      className={clsx(styles.field, className)}
      data-orientation={orientation}
      {...props}
    />
  );
};

export const FieldLabel = ({ className, ...props }: React.ComponentProps<"label">) => {
  return <label className={clsx(styles.label, className)} {...props} />;
};

export const FieldError = ({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<"div"> & {
  errors?: Array<{ message?: string } | undefined>;
}) => {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map((error) => [error?.message, error])).values()];

    if (uniqueErrors.length === 1) {
      return uniqueErrors[0]?.message;
    }

    return (
      <ul className={styles.errorList}>
        {uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div role="alert" className={clsx(styles.error, className)} {...props}>
      {content}
    </div>
  );
};
