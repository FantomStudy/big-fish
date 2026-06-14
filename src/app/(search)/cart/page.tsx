import clsx from "clsx";
import { ProductRecomentaions } from "@/components/ProductRecomendations";
import { getProducts } from "@/mock/products";
import { CartList } from "./_components/CartList";
import styles from "./page.module.css";

const CartPage = () => {
  const products = getProducts();

  return (
    <main className={clsx("container", styles.page)}>
      <CartList products={products} />
      <ProductRecomentaions />
    </main>
  );
};

export default CartPage;
