import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { modalStyles as styles } from "@/components/ui/Modal";

interface ForgotPasswordFormProps {
  onLogin: () => void;
}

export const ForgotPasswordForm = ({ onLogin }: ForgotPasswordFormProps) => {
  return (
    <>
      <form className={styles.form}>
        <Field>
          <FieldLabel>E-mail</FieldLabel>
          <div className={styles.field}>
            <Input type="email" name="email" className={styles.input} />
            <MailIcon className={styles.fieldIcon} size={20} />
          </div>
        </Field>

        <Button type="submit" className={styles.submit}>
          Восстановить пароль
        </Button>
      </form>

      <div className={`${styles.footer} ${styles.footerCenter}`}>
        <Button variant="link" onClick={onLogin}>
          Вернуться к авторизации
        </Button>
      </div>
    </>
  );
};
