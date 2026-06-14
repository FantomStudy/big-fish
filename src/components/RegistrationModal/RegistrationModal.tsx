import { LockIcon, MailIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { modalStyles as styles } from "@/components/ui/Modal";

interface RegistrationFormProps {
  onLogin: () => void;
}

export const RegistrationForm = ({ onLogin }: RegistrationFormProps) => {
  return (
    <>
      <form className={styles.form}>
        <Field>
          <FieldLabel>Имя</FieldLabel>
          <div className={styles.field}>
            <Input type="text" name="name" className={styles.input} />
            <UserIcon className={styles.fieldIcon} size={20} />
          </div>
        </Field>

        <Field>
          <FieldLabel>E-mail</FieldLabel>
          <div className={styles.field}>
            <Input type="email" name="email" className={styles.input} />
            <MailIcon className={styles.fieldIcon} size={20} />
          </div>
        </Field>

        <div className={styles.row}>
          <Field>
            <FieldLabel>Пароль</FieldLabel>
            <div className={styles.field}>
              <Input type="password" name="password" className={styles.input} />
              <LockIcon className={styles.fieldIcon} size={20} />
            </div>
          </Field>

          <Field>
            <FieldLabel>Подтверждение</FieldLabel>
            <div className={styles.field}>
              <Input type="password" name="passwordConfirmation" className={styles.input} />
              <LockIcon className={styles.fieldIcon} size={20} />
            </div>
          </Field>
        </div>

        <div className={styles.checkboxRow}>
          <Checkbox id="terms" name="terms" />
          <label htmlFor="terms" className={styles.checkboxLabel}>
            Принимаю условия{" "}
            <a href="/agreement" className={styles.checkboxLink}>
              соглашения
            </a>{" "}
            и{" "}
            <a href="/privacy-policy" className={styles.checkboxLink}>
              политики конфиденциальности
            </a>
          </label>
        </div>

        <div className={styles.checkboxRow}>
          <Checkbox id="newsletter" name="newsletter" />
          <label htmlFor="newsletter" className={styles.checkboxLabel}>
            Подписываюсь на рассылку новостей на E-mail
          </label>
        </div>

        <Button type="submit" className={styles.submit}>
          Зарегестрироваться
        </Button>
      </form>

      <div className={`${styles.footer} ${styles.footerCenter}`}>
        <Button variant="link" onClick={onLogin}>
          У меня уже есть аккаунт
        </Button>
      </div>
    </>
  );
};
