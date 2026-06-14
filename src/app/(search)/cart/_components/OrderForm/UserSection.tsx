import { Input, Field, FieldLabel, Typography } from "@/components/ui";
import styles from "./OrderForm.module.css";

// TODO: Возможная замена на данные аккаунта, уточнить
export const UserSection = () => {
  return (
    <div className={styles.section}>
      <Typography variant="text-xl">Покупатель</Typography>

      <div className={styles.fields}>
        <Field>
          <FieldLabel>Фамилия</FieldLabel>
          <Input />
        </Field>

        <Field>
          <FieldLabel>Имя</FieldLabel>
          <Input />
        </Field>

        <Field>
          <FieldLabel>Отчество</FieldLabel>
          <Input />
        </Field>

        <Field>
          <FieldLabel>Телефон</FieldLabel>
          <Input type="tel" />
        </Field>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" />
        </Field>
      </div>
    </div>
  );
};
