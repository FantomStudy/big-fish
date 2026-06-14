import { PlusIcon } from "lucide-react";
import Image from "next/image";
import {
  Button,
  Field,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
  Typography,
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui";
import styles from "./OrderForm.module.css";

export const DeliverySection = () => {
  return (
    <section className={styles.section}>
      <Typography variant="text-xl">Доставка</Typography>

      <div className={styles.fields}>
        <Field>
          <FieldLabel>Выберите способ доставки</FieldLabel>
          <ToggleGroup className={styles.deliveryToggle}>
            <ToggleGroupItem>
              <Image src="/icons/sdek-logo.svg" alt="SDEK" fill />
            </ToggleGroupItem>
            <ToggleGroupItem>
              <Image src="/icons/ozon-logo.svg" alt="OZON" fill className={styles.ozon} />
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>

        <RadioGroup>
          <Field orientation="horizontal">
            <FieldLabel>
              <RadioGroupItem value={1} />
              Оренбургская Область, Оренбург, Краснознамённая улица, 50
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <FieldLabel>
              <RadioGroupItem value={2} />
              Оренбургская Область, Оренбург, Краснознамённая улица, 50
            </FieldLabel>
          </Field>

          <Button variant="outline">
            <PlusIcon /> Добавить пункт выдачи
          </Button>
        </RadioGroup>

        <div className={styles.map} />
      </div>
    </section>
  );
};
