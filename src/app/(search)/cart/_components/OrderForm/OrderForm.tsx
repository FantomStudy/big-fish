import { Card } from "@/components/ui/Card";
import { DeliverySection } from "./DeliverySection/DeliverySection";
import { OrderSummary } from "./OrderSummary/OrderSummary";
import { UserSection } from "./UserSection/UserSection";
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
