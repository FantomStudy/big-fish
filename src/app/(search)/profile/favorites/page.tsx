import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Typography } from "@/components/ui";
import { getProducts } from "@/mock/products";
import styles from "./page.module.css";

const FavoritesPage = () => {
  const products = getProducts();
  return (
    <main>
      <Typography variant="text-2xl" tag="h1" className={styles.title}>
        Избранное <sup>{products.length}</sup>
      </Typography>

      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsGrid>
    </main>
  );
};

export default FavoritesPage;
