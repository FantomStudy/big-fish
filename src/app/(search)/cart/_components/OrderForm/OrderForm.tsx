import { Card } from "@/components/ui/Card";
import { DeliverySection } from "./DeliverySection/DeliverySection";
import { OrderSummary } from "./OrderSummary/OrderSummary";
import { UserSection } from "./UserSection";

export const OrderForm = () => {
  return (
    <Card>
      <form className="stack-xl">
        <UserSection />
        <DeliverySection />
        <OrderSummary />
      </form>
    </Card>
  );
};
