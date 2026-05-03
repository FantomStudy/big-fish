import { Button } from "@/components/ui/Button";
import { Field, FieldLabel } from "@/components/ui/Field";
import { Input } from "@/components/ui/Input";
import { Typography } from "@/components/ui/Typography";
import { toCurrency } from "@/lib/format";
import styles from "./OrderSummary.module.css";

export const OrderSummary = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.calculations}>
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

      <div className={styles.priceRow}>
        <Typography variant="heading-3">Итого</Typography>
        <Typography variant="heading-3">{toCurrency(0)}</Typography>
      </div>

      <Button type="submit">Заказать</Button>
    </div>
  );
};
