import Image from "next/image";
import { Card, Typography } from "@/components/ui";
import styles from "./OrderCard.module.css";

interface Order {
  src: string;
  alt: string;
  status: string;
  date: string;
  description: string;
}

interface OrderCardProps {
  order: Order;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  return (
    <Card className={styles.card}>
      <Image src={order.src} alt={order.alt} width={75} height={100} />
      <div className={styles.info}>
        <Typography className={styles.status}>{order.status}</Typography>
        <Typography variant="text-sm" className={styles.description}>
          {order.description}
        </Typography>
        <Typography variant="text-sm">{order.date}</Typography>
      </div>
    </Card>
  );
};