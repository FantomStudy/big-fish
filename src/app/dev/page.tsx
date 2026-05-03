import clsx from "clsx";
import { HeartIcon, PenIcon, ToggleLeftIcon } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Checkbox } from "@/components/ui/Checkbox";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio";
import { Slider } from "@/components/ui/Slider";
import { Toggle } from "@/components/ui/Toggle";
import { Typography } from "@/components/ui/Typography";
import styles from "./page.module.css";

const DevPage = () => {
  return (
    <div className={clsx("container", styles.page)}>
      <div>
        <Typography variant="heading-2">Avatar</Typography>

        <div className={styles.row}>
          <Avatar src="" fallback="Avatar" size="sm" />
          <Avatar src="" fallback="Avatar" size="md" />
          <Avatar src="" fallback="Avatar" size="lg" />
        </div>
      </div>

      <div>
        <Typography variant="heading-2">Button</Typography>

        <Typography variant="heading-3">Variants</Typography>
        <div className={styles.row}>
          <Button variant="primary">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="link">Button</Button>
        </div>

        <Typography variant="heading-3">Sizes</Typography>
        <div className={styles.row}>
          <Button size="md">
            <PenIcon /> Button
          </Button>
          <Button size="sm">
            <PenIcon /> Button
          </Button>
          <Button size="icon">
            <PenIcon />
          </Button>
          <Button size="icon-sm">
            <PenIcon />
          </Button>
        </div>

        <Typography variant="heading-3">States</Typography>
        <div className={styles.row}>
          <Button size="md" aria-invalid>
            Button
          </Button>
          <Button size="md" disabled>
            Button
          </Button>
        </div>
      </div>

      <div>
        <Typography variant="heading-2">Checkbox</Typography>

        <div className={styles.column}>
          <Field orientation="horizontal">
            <Checkbox />
            <FieldLabel>Вариант 1</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox aria-invalid />
            <FieldLabel>Вариант 2</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox disabled />
            <FieldLabel>Вариант 3</FieldLabel>
          </Field>
        </div>
      </div>

      <div>
        <Typography variant="heading-2">Input</Typography>

        <div className={styles.column}>
          <Field>
            <FieldLabel>Имя</FieldLabel>
            <Input />
          </Field>
          <Field>
            <FieldLabel>Фамилия</FieldLabel>
            <Input aria-invalid />
          </Field>
          <Field>
            <FieldLabel>Отчество</FieldLabel>
            <Input disabled />
          </Field>
        </div>
      </div>

      <div>
        <Typography variant="heading-2">Radio</Typography>

        <RadioGroup>
          <Field orientation="horizontal">
            <RadioGroupItem value={1} />
            <FieldLabel>Вариант 1</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value={2} aria-invalid />
            <FieldLabel>Вариант 2</FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value={3} disabled />
            <FieldLabel>Вариант 3</FieldLabel>
          </Field>
        </RadioGroup>
      </div>

      <div>
        <Typography variant="heading-2">Slider</Typography>
        <div className={styles.grid}>
          <Field>
            <FieldLabel>Размер</FieldLabel>
            <Slider defaultValue={75} />
          </Field>

          <Field>
            <FieldLabel>Цена</FieldLabel>
            <Slider defaultValue={[15, 85]} />
          </Field>

          <Field>
            <FieldLabel>Размер</FieldLabel>
            <Slider defaultValue={75} disabled />
          </Field>
        </div>
      </div>

      <div>
        <Typography variant="heading-2">Toggle</Typography>
        <div className={styles.row}>
          <Toggle variant="default">Toggle</Toggle>
          <Toggle variant="outline">Toggle</Toggle>

          <Toggle variant="default" aria-invalid>
            Toggle
          </Toggle>
          <Toggle variant="outline" disabled>
            Toggle
          </Toggle>

          <Toggle variant="default">
            <HeartIcon className={styles.toggleIcon} /> Toggle
          </Toggle>
        </div>
      </div>
    </div>
  );
};

export default DevPage;
