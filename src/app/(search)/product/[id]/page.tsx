import { ProductCard } from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { ScrollCarousel, Typography } from "@/components/ui";
import {
  PRODUCT_COLORS,
  PRODUCT_CUSTOMER_PHOTOS,
  PRODUCT_DETAIL,
  PRODUCT_FULL_CHARACTERISTICS,
  PRODUCT_GALLERY,
  PRODUCT_REVIEWS,
  PRODUCT_REVIEW_STATS,
  PRODUCT_SHORT_CHARACTERISTICS,
} from "@/constants/mock/productDetail";
import { getProducts } from "@/constants/mock/product";
import { ProductDescription } from "./_components/ProductDescription";
import { ProductGallery } from "./_components/ProductGallery";
import { ProductInfo } from "./_components/ProductInfo";
import { ProductPurchase } from "./_components/ProductPurchase";
import { ProductReviews } from "./_components/ProductReviews";
import { ProductSpecifications } from "./_components/ProductSpecifications";
import styles from "./page.module.css";

const ProductPage = () => {
  const recommendedProducts = getProducts(12);
  const similarProducts = getProducts(18);

  return (
    <main className="container">
      <div className={styles.page}>
        <div className={styles.layout}>
          <ProductGallery
            images={PRODUCT_GALLERY}
            alt="Силиконовая приманка"
            className={styles.gallery}
          />

          <ProductInfo
            className={styles.info}
            name={PRODUCT_DETAIL.name}
            rating={PRODUCT_DETAIL.rating}
            reviewsCount={PRODUCT_DETAIL.reviewsCount}
            sizes={PRODUCT_DETAIL.sizes}
            colors={PRODUCT_COLORS}
            totalColors={PRODUCT_DETAIL.totalColors}
            characteristics={PRODUCT_SHORT_CHARACTERISTICS}
            customerPhotos={PRODUCT_CUSTOMER_PHOTOS}
            customerPhotosCount={PRODUCT_DETAIL.customerPhotosCount}
          />

          <ProductPurchase
            className={styles.purchase}
            price={PRODUCT_DETAIL.price}
            oldPrice={PRODUCT_DETAIL.oldPrice}
            article={PRODUCT_DETAIL.article}
          />
        </div>

        <section className={styles.recommendations}>
          <Typography variant="text-2xl" tag="h2" className={styles.sectionTitle}>
            Рекомендуем также
          </Typography>

          <ScrollCarousel>
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} className={styles.productCard} />
            ))}
          </ScrollCarousel>
        </section>

        <ProductDescription
          banner={PRODUCT_DETAIL.descriptionBanner}
          headline={PRODUCT_DETAIL.descriptionHeadline}
          paragraphs={PRODUCT_DETAIL.description}
        />

        <ProductSpecifications items={PRODUCT_FULL_CHARACTERISTICS} />

        <ProductReviews
          reviews={PRODUCT_REVIEWS}
          stats={PRODUCT_REVIEW_STATS}
          customerPhotos={PRODUCT_CUSTOMER_PHOTOS}
        />

        <section className={styles.similar}>
          <Typography variant="text-2xl" tag="h2" className={styles.sectionTitle}>
            Возможно вам понравится
          </Typography>

          <ProductGrid>
            {similarProducts.map((product) => (
              <ProductCard key={`similar-${product.id}`} product={product} />
            ))}
          </ProductGrid>
        </section>
      </div>
    </main>
  );
};

export default ProductPage;
