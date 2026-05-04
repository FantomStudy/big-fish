import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";

// TODO: Возможная замена на данные аккаунта, уточнить
export const UserSection = () => {
  return (
    <div className="stack">
      <Typography variant="title-md">Покупатель</Typography>

      <div className="stack-sm">
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
