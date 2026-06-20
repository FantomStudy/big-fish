import { VanIcon } from "lucide-react";
import Image from "next/image";
import { NewsSection } from "@/components/NewsSection";
import { ProductCard } from "@/components/ProductCard";
import { SearchBar } from "@/components/SearchBar";
import { BrandTitle, Carousel, RuIcon, ScrollCarousel, Typography } from "@/components/ui";
import { getCategories } from "@/constants/mock/categories";
import { getCollection } from "@/constants/mock/collections";
import { getProducts } from "@/constants/mock/product";
import { getReviews } from "@/constants/mock/reviews";
import { CollectionCard } from "./_components/CollectionCard";
import { ReviewCard } from "./_components/ReviewCard";
import styles from "./page.module.css";

const IndexPage = () => {
  const slides = [
    { alt: "Главная", src: "/mock/carousel/index.png" },
    { alt: "Рок-группа", src: "/mock/carousel/rock-group.png" },
  ];

  const categories = getCategories();
  const reviews = getReviews(3);
  const recommendedProducts = getProducts();
  const collections = getCollection();

  return (
    <main>
      <Carousel slides={slides} className={styles.carousel} />

      <div className="container">
        <SearchBar />
      </div>

      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.promo}>
            <div className={styles.promoGrid}>
              <div className={styles.promoMain}>
                <Image
                  className={styles.promoMainImage}
                  alt="Новинки"
                  src="/index/valkirie-novelties.png"
                  width={475}
                  height={373}
                />
                <Image
                  className={styles.promoMainImage}
                  alt="Силиконовая приманка"
                  src="/index/mock-product.png"
                  width={488}
                  height={373}
                />
              </div>

              <div className={styles.benefit}>
                <VanIcon className={styles.benefitIcon} />
                <Typography variant="text-xl" className={styles.benefitName}>
                  Доставка по всей России
                </Typography>
                <Typography className={styles.benefitDescription}>
                  Доставка заказов с сайта осуществляется через сервисы OZON и СДЭК
                </Typography>
              </div>

              <div className={styles.benefit}>
                <RuIcon height={32} />
                <Typography variant="text-xl" className={styles.benefitName}>
                  Сделано в России
                </Typography>
                <Typography className={styles.benefitDescription}>
                  Сердце нашего бренда — завод в России, где идеи превращаются в качественный
                  продукт
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.accent}>
          <div className="container">
            <div className={styles.categories}>
              {categories.map((category) => (
                <div key={category.id} className={styles.categoryWrapper}>
                  <Image
                    src={category.src}
                    alt={category.alt}
                    width={468}
                    height={219}
                    className={styles.categoryName}
                  />

                  <ScrollCarousel>
                    {category.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        className={styles.productCard}
                      />
                    ))}
                  </ScrollCarousel>
                </div>
              ))}

              <ScrollCarousel>
                {recommendedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} className={styles.productCard} />
                ))}
              </ScrollCarousel>
            </div>
          </div>
        </div>

        <div className="container">
          <BrandTitle.Collections />
          <ScrollCarousel trackClassName={styles.collections}>
            {collections.map((collection) => (
              <CollectionCard key={collection.src} collection={collection} />
            ))}
          </ScrollCarousel>
        </div>

        <div className="container">
          <BrandTitle.Reviews />
          <div className={styles.reviewGrid}>
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        <div className="container">
          <NewsSection amount={3} />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
