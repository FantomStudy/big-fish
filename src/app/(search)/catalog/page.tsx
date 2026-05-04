import { ProductCard } from "@/components//product/ProductCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Card } from "@/components/ui/Card";
import { getProducts } from "@/mock/products";
import { Filters } from "./_components/Filters";
import styles from "./page.module.css";

const CatalogPage = () => {
  const products = getProducts();

  return (
    <div className={styles.layout}>
      <Card className="desktop-only">
        <Filters />
      </Card>

      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  );
};

export default CatalogPage;
