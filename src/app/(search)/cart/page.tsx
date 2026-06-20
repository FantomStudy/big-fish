import { ProductRecomentaions } from "@/components/ProductRecomendations";
import { Typography } from "@/components/ui";
import { getProducts } from "@/constants/mock/product";
import { CartList } from "./_components/CartList";
import styles from "./page.module.css";

const CartPage = () => {
  const products = getProducts();

  return (
    <main className="container">
      <div className={styles.page}>
        <CartList products={products} />

        <div className={styles.recommendations}>
          <Typography variant="text-2xl">Возможно вам понравится</Typography>
          <ProductRecomentaions />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
