import { ProductCard } from "@/components/ProductCard";
import { Grid } from "@/components/ui/Grid";
import { Filters } from "./_components/Filters";
import styles from "./page.module.css";

const CatalogPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <Filters />
      </div>

      <Grid>
        {Array.from({ length: 50 }).map((_, index) => (
          <ProductCard
            key={index}
            product={{
              name: "Cиликоновая приманка",
              price: 411,
              imageUrl: "/mock/product.png",
              color: "#60CBFF",
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CatalogPage;
