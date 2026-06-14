import { Card } from "@/components/ui";
import { DeliverySection } from "./DeliverySection";
import { OrderSummary } from "./OrderSummary";
import { UserSection } from "./UserSection";
import styles from "./OrderForm.module.css";

export const OrderForm = () => {
  return (
    <Card>
      <form className={styles.form}>
        <UserSection />
        <DeliverySection />
        <OrderSummary />
      </form>
    </Card>
  );
};
