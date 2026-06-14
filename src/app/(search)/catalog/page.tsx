import { ProductCard } from "@/components/ProductCard";
import { ProductsGrid } from "@/components/ProductsGrid";
import { Card } from "@/components/ui";
import { getProducts } from "@/mock/products";
import { Filters } from "./_components/Filters";
import styles from "./page.module.css";

const CatalogPage = () => {
  const products = getProducts();

  return (
    <div className="container">
      <div className={styles.layout}>
        <Card className="desktop-only">
          <Filters />
        </Card>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
      </div>
    </div>
  );
};

export default CatalogPage;
