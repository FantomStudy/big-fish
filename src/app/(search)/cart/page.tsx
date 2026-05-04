import { Recomentaions } from "@/components/product/Recomendations";
import { getProducts } from "@/mock/products";
import { CartList } from "./_components/CartList";

const CartPage = () => {
  const products = getProducts();

  return (
    <main className="stack-xl">
      <CartList products={products} />
      <Recomentaions />
    </main>
  );
};

export default CartPage;
