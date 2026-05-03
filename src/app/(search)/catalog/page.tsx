import { ProductCard } from "@/components/ProductCard";
import { Card } from "@/components/ui/Card";
import { Grid } from "@/components/ui/Grid";
import { getProducts } from "@/mock/products";
import { Filters } from "./_components/Filters";
import styles from "./page.module.css";

const CatalogPage = () => {
  const products = getProducts();

  return (
    <div className={styles.layout}>
      <Card className={styles.menu}>
        <Filters />
      </Card>

      <Grid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </div>
  );
};

export default CatalogPage;
