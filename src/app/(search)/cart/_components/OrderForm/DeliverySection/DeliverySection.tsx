import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Field, FieldLabel } from "@/components/ui/Field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/Radio";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { Typography } from "@/components/ui/Typography";
import styles from "./DeliverySection.module.css";

export const DeliverySection = () => {
  return (
    <section className="stack">
      <Typography variant="title-md">Доставка</Typography>

      <div className="stack-sm">
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
