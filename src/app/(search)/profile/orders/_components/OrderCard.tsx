import type { ActiveOrder, CompletedOrder } from "@/constants/mock/orders";
import Image from "next/image";
import { Button, Card, Typography } from "@/components/ui";
import { toCurrency } from "@/lib/format";
import { Barcode } from "./Barcode";
import styles from "./OrderCard.module.css";

type OrderCardProps =
  | { variant: "active"; order: ActiveOrder }
  | { variant: "completed"; order: CompletedOrder };

export const OrderCard = (props: OrderCardProps) => {
  return (
    <Card variant={props.variant === "completed" ? "medium" : "default"} className={styles.card}>
      {props.variant === "active" && <Barcode className={styles.barcode} />}

      <div className={styles.body}>
        <div className={styles.info}>
          {props.variant === "active" ? (
            <>
              <Typography variant="text-lg" className={styles.statusActive}>
                {props.order.status}
              </Typography>
              <Typography className={styles.pickupPoint}>{props.order.pickupPoint}</Typography>
              <Typography variant="text-sm" className={styles.muted}>
                {props.order.pickupTime}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="text-lg" className={styles.status}>
                {props.order.status}
              </Typography>
              <Typography>{props.order.delivery}</Typography>
              <div className={styles.actions}>
                <Button size="sm">Оценить товар</Button>
                <Button size="sm" variant="outline">
                  Заказать ещё раз
                </Button>
              </div>
            </>
          )}
        </div>

        <ul className={styles.products}>
          {props.order.products.map((product) => (
            <li key={product.id} className={styles.product}>
              <Image
                className={styles.productImage}
                src={product.src}
                alt={product.alt}
                width={104}
                height={138}
              />
              <Typography className={styles.price}>{toCurrency(product.price)}</Typography>
              <Typography variant="text-sm">Хранится до {product.storedUntil}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
