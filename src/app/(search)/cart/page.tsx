import { Recomentaions } from "@/components/Recomendations";
import { getProducts } from "@/mock/products";
import { CartList } from "./_components/CartList";
import { OrderForm } from "./_components/OrderForm";
import styles from "./page.module.css";

const CartPage = () => {
  const products = getProducts();

  return (
    <main className={styles.page}>
      <div className={styles.layout}>
        <CartList products={products} />

        <div className={styles.aside}>
          <OrderForm />
        </div>
      </div>

      <Recomentaions />
    </main>
  );
};

export default CartPage;
