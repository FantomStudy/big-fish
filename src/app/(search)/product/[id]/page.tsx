import { ProductCard } from "@/components/ProductCard";
import { ProductRecomentaions } from "@/components/ProductRecomendations";
import { ScrollCarousel, Typography } from "@/components/ui";
import { getProducts } from "@/constants/mock/product";
import styles from "./page.module.css";

const ProductPage = () => {
  const recommendedProducts = getProducts();

  return (
    <main className="container">
      <div className={styles.wrapper}>
        <div>
          <Typography variant="text-2xl" tag="h2" className={styles.title}>
            Рекомендуем также
          </Typography>

          <ScrollCarousel>
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} className={styles.productCard} />
            ))}
          </ScrollCarousel>
        </div>

        <div>
          <Typography variant="text-2xl" tag="h2" className={styles.title}>
            Возможно вам понравится
          </Typography>

          <ProductRecomentaions />
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
