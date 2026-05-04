import { Button } from "@/components/ui/Button";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import { toCurrency } from "@/lib/format";
import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  return (
    <div className="stack">
      <div>
        <Typography variant="body-sm" className={styles.priceRow}>
          Стоимость товаров <span>{toCurrency(0)}</span>
        </Typography>

        <Typography variant="body-sm" className={styles.priceRow}>
          Стоимость доставки <span>{toCurrency(0)}</span>
        </Typography>

        <Typography variant="body-sm" className={styles.priceRow}>
          Начислим кешбэк <span>{toCurrency(0)}</span>
        </Typography>
      </div>

      <Field>
        <FieldLabel>Введите промокод</FieldLabel>
        <Input placeholder="Промокод" />
      </Field>

      <Typography variant="title-sm" className={styles.priceRow}>
        Итого <span>{toCurrency(0)}</span>
      </Typography>

      <Button type="submit">Заказать</Button>
    </div>
  );
};
