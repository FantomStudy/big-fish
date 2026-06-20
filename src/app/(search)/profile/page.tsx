import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { ScrollCarousel, Typography } from "@/components/ui";
import { getOrders } from "@/constants/mock/orders";
import { getProducts } from "@/constants/mock/product";
import { OrderCard } from "./_components/OrderCard";
import { ProfileLayout } from "./_components/ProfileLayout";
import { ProgressBar } from "./_components/ProgressBar";
import styles from "./page.module.css";

const ProfilePage = () => {
  const recommendedProducts = getProducts();
  const orders = getOrders();

  return (
    <main className={styles.page}>
      <ProfileLayout>
        <div className={styles.wrapper}>
          <div>
            <Typography variant="text-2xl" tag="h2" className={styles.title}>
              Прогресс
            </Typography>
            <ProgressBar />
          </div>

          <div>
            <Typography variant="text-2xl" tag="h2" className={styles.title}>
              Заказы
            </Typography>

            <ScrollCarousel>
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </ScrollCarousel>
          </div>

          <div>
            <Typography variant="text-2xl" tag="h2" className={styles.title}>
              Завершенные заказы
            </Typography>

            <ScrollCarousel>
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </ScrollCarousel>
          </div>

          <div>
            <Typography variant="text-2xl" tag="h2" className={styles.title}>
              Недавно смотрели
            </Typography>

            <ScrollCarousel>
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} className={styles.productCard} />
              ))}
            </ScrollCarousel>
          </div>

          <div>
            <Typography variant="text-2xl" tag="h2" className={styles.title}>
              Подобрали для вас
            </Typography>

            <ScrollCarousel>
              {recommendedProducts.map((product) => (
                <ProductCard key={product.id} product={product} className={styles.productCard} />
              ))}
            </ScrollCarousel>
          </div>
        </div>
      </ProfileLayout>

      <div className="container">
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Возможно вам понравится
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

export default ProfilePage;
