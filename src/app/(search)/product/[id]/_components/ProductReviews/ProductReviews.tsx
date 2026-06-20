"use client";

import type { ProductReview, ProductReviewStats } from "@/constants/mock/productDetail";
import clsx from "clsx";
import { ChartNoAxesColumnIncreasing, Star, UserIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ScrollCarousel, Typography } from "@/components/ui";
import styles from "./ProductReviews.module.css";

interface ProductReviewsProps {
  reviews: ProductReview[];
  stats: ProductReviewStats;
  customerPhotos: string[];
}

const STARS = [5, 4, 3, 2, 1] as const;

const STAR_LABELS: Record<(typeof STARS)[number], string> = {
  5: "5 звезд",
  4: "4 звезды",
  3: "3 звезды",
  2: "2 звезды",
  1: "1 звезда",
};

type SortOption = "new" | "high";

const ProductReviewItem = ({ review }: { review: ProductReview }) => {
  const [expanded, setExpanded] = useState(false);
  const previewLength = 220;
  const hasMore = review.text.length > previewLength;

  return (
    <article className={styles.review}>
      <div className={styles.reviewTop}>
        <div className={styles.authorAvatar} aria-hidden="true">
          <UserIcon />
        </div>

        <div className={styles.reviewMain}>
          <div className={styles.reviewHeader}>
            <Typography variant="text-lg" className={styles.authorName}>
              {review.author}
            </Typography>

            <div className={styles.stars} aria-label={`Оценка ${review.rating} из 5`}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className={styles.star}
                  data-filled={index < review.rating}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>

          <Typography variant="text-sm" className={styles.variant}>
            {review.variant}
          </Typography>
        </div>
      </div>

      <Typography className={styles.text}>
        {expanded || !hasMore ? (
          review.text
        ) : (
          <>
            {`${review.text.slice(0, previewLength).trim()}... `}
            <button type="button" className={styles.readMore} onClick={() => setExpanded(true)}>
              Читать полностью
            </button>
          </>
        )}
      </Typography>

      {review.photos.length > 0 && (
        <ScrollCarousel>
          {review.photos.map((photo, index) => (
            <div key={`${review.id}-${index}`} className={styles.reviewPhoto}>
              <Image src={photo} alt={`Фото к отзыву ${index + 1}`} fill sizes="140px" />
            </div>
          ))}
        </ScrollCarousel>
      )}
    </article>
  );
};

export const ProductReviews = ({ reviews, stats, customerPhotos }: ProductReviewsProps) => {
  const [sort, setSort] = useState<SortOption>("new");

  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Typography tag="h2" variant="text-2xl" className={styles.title}>
            Отзывы о товаре{" "}
            <span className={styles.count}>{stats.total.toLocaleString("ru-RU")}</span>
          </Typography>

          <ScrollCarousel>
            {customerPhotos.map((photo, index) => (
              <div key={`${photo}-${index}`} className={styles.galleryPhoto}>
                <Image src={photo} alt={`Фото покупателя ${index + 1}`} fill sizes="72px" />
              </div>
            ))}
          </ScrollCarousel>
        </div>

        <aside className={styles.summary}>
          <div className={styles.score}>
            <span className={styles.scoreValue}>
              {stats.average.toLocaleString("ru-RU", {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}
            </span>
            <span className={styles.scoreMax}>/5</span>
          </div>

          <div className={styles.summaryStars} aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className={styles.summaryStar} fill="currentColor" />
            ))}
          </div>

          <div className={styles.bars}>
            {STARS.map((star) => {
              const count = stats.distribution[star];
              const width = stats.total > 0 ? (count / stats.total) * 100 : 0;

              return (
                <div key={star} className={styles.barRow}>
                  <span className={styles.barLabel}>{STAR_LABELS[star]}</span>
                  <div className={styles.barTrack}>
                    <div className={styles.barFill} style={{ width: `${width}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </aside>
      </div>

      <div className={styles.filters}>
        <span className={styles.filtersLabel}>Показать сначала:</span>
        <button
          type="button"
          className={clsx(styles.filterButton, sort === "new" && styles.filterButtonActive)}
          onClick={() => setSort("new")}
        >
          новые и полезные
        </button>
        <button
          type="button"
          className={clsx(styles.filterButton, sort === "high" && styles.filterButtonActive)}
          onClick={() => setSort("high")}
        >
          с высокой оценкой
          <ChartNoAxesColumnIncreasing className={styles.filterIcon} />
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.list}>
        {reviews.map((review) => (
          <ProductReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};
