import { Button, Field, FieldLabel, Input, Typography } from "@/components/ui";
import { toCurrency } from "@/lib/format";
import styles from "./OrderForm.module.css";

export const OrderSummary = () => {
  return (
    <div className={styles.section}>
      <div>
        <Typography variant="text-sm" className={styles.priceRow}>
          Стоимость товаров <span>{toCurrency(0)}</span>
        </Typography>

        <Typography variant="text-sm" className={styles.priceRow}>
          Стоимость доставки <span>{toCurrency(0)}</span>
        </Typography>

        <Typography variant="text-sm" className={styles.priceRow}>
          Начислим кешбэк <span>{toCurrency(0)}</span>
        </Typography>
      </div>

      <Field>
        <FieldLabel>Введите промокод</FieldLabel>
        <Input placeholder="Промокод" />
      </Field>

      <Typography variant="text-sm" className={styles.priceRow}>
        Итого <span>{toCurrency(0)}</span>
      </Typography>

      <Button type="submit">Заказать</Button>
    </div>
  );
};
