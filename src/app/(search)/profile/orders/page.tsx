import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { Tabs, TabsList, TabsPanel, TabsTab, Typography } from "@/components/ui";
import { getActiveOrders, getCompletedOrders } from "@/constants/mock/orders";
import { getProducts } from "@/constants/mock/product";
import { ProfileLayout } from "../_components/ProfileLayout";
import { OrderCard } from "./_components";
import styles from "./page.module.css";

const OrdersPage = () => {
  const activeOrders = getActiveOrders();
  const completedOrders = getCompletedOrders();

  const recommendedProducts = getProducts();

  return (
    <main className={styles.page}>
      <ProfileLayout>
        <Typography variant="text-2xl" tag="h1" className={styles.title}>
          Заказы
        </Typography>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTab value="active">Активные</TabsTab>
            <TabsTab value="completed">Завершённые</TabsTab>
          </TabsList>

          <TabsPanel value="active" className={styles.list}>
            {activeOrders.map((order) => (
              <OrderCard key={order.id} variant="active" order={order} />
            ))}
          </TabsPanel>

          <TabsPanel value="completed" className={styles.list}>
            {completedOrders.map((order) => (
              <OrderCard key={order.id} variant="completed" order={order} />
            ))}
          </TabsPanel>
        </Tabs>
      </ProfileLayout>

      <div className="container">
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Рекомендации к вашим покупкам
        </Typography>

        <ProductGrid>
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </div>
    </main>
  );
};

export default OrdersPage;
