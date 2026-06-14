import { VanIcon } from "lucide-react";
import Image from "next/image";
import { NewsSection } from "@/components/NewsSection";
import { ReviewCard } from "@/components/ReviewCard";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { SearchBar } from "@/components/SearchBar";
import { RuIcon, Carousel, BrandTitle, Typography } from "@/components/ui";
import { getReviews } from "@/mock/reviews";
import styles from "./page.module.css";

const SLIDES = [
  {
    alt: "Что то",
    src: "/mock/slider/index.png",
  },
];

const IndexPage = () => {
  return (
    <main className={styles.page}>
      <Carousel slides={SLIDES} className={styles.carousel} />

      <div className={styles.content}>
        <div className="container">
          <SearchBar />
        </div>

        <div className="container">
          <div className={styles.discountGrid}>
            <div className={styles.discountMain}>
              <Image
                className={styles.discountMainImage}
                alt="Новинки"
                src="/index/valkirie-novelties.png"
                width={475}
                height={373}
              />
              <Image
                className={styles.discountMainImage}
                alt="Силиконовая приманка"
                src="/index/mock-product.png"
                width={488}
                height={373}
              />
            </div>

            <div className={styles.discountSecondary}>
              <VanIcon className={styles.discountIcon} />
              <Typography variant="text-2xl" className={styles.discountName}>
                Доставка по всей России
              </Typography>
              <Typography variant="text-lg" className={styles.discountDescription}>
                Доставка заказов с сайта осуществляется через сервисы OZON и СДЭК
              </Typography>
            </div>

            <div className={styles.discountSecondary}>
              <RuIcon height={40} />
              <Typography variant="text-2xl" className={styles.discountName}>
                Сделано в России
              </Typography>
              <Typography variant="text-lg" className={styles.discountDescription}>
                Сердце нашего бренда — завод в России, где идеи превращаются в качественный продукт
              </Typography>
            </div>
          </div>
        </div>

        <div className="container">
          <BrandTitle.Collections />
        </div>

        <div className="container">
          <div className={styles.reviews}>
            <BrandTitle.Reviews />

            <ReviewsGrid>
              {getReviews().map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </ReviewsGrid>
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
