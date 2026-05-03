import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import styles from "./UserSection.module.css";

// TODO: Возможная замена на данные аккаунта, уточнить
export const UserSection = () => {
  return (
    <section>
      <Typography variant="heading-2">Покупатель</Typography>

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
    </section>
  );
};
