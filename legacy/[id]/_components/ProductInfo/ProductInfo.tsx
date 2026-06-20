"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button, Typography, ToggleGroup, ToggleGroupItem } from "@/components/ui";
import styles from "./ProductInfo.module.css";

export interface ProductColor {
  id: string;
  image: string;
}

export interface ProductCharacteristic {
  label: string;
  value: string;
}

interface ProductInfoProps extends React.ComponentProps<"div"> {
  name: string;
  rating: number;
  reviewsCount: number;
  sizes: number[];
  colors: ProductColor[];
  totalColors: number;
  characteristics: ProductCharacteristic[];
  customerPhotos: string[];
  customerPhotosCount: number;
}

const COLORS_PREVIEW = 20;

export const ProductInfo = ({
  name,
  rating,
  reviewsCount,
  sizes,
  colors,
  totalColors,
  characteristics,
  customerPhotos,
  customerPhotosCount,
  className,
  ...props
}: ProductInfoProps) => {
  const [showAllColors, setShowAllColors] = useState(false);

  const visibleColors = showAllColors ? colors : colors.slice(0, COLORS_PREVIEW);

  return (
    <div className={clsx(styles.info, className)} {...props}>
      <Typography tag="h1" variant="text-2xl" className={styles.title}>
        {name}
      </Typography>

      <div className={styles.rating}>
        <div className={styles.stars} aria-label={`Рейтинг ${rating} из 5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={styles.star}
              data-filled={i < Math.round(rating)}
              fill="currentColor"
            />
          ))}
        </div>
        <span className={styles.ratingValue}>{rating.toLocaleString("ru-RU")}</span>
        <button type="button" className={styles.reviewsLink}>
          {reviewsCount.toLocaleString("ru-RU")} отзывов
          <ChevronDown />
        </button>
      </div>

      <section className={styles.section}>
        <Typography className={styles.sectionLabel}>Длина, мм:</Typography>
        <ToggleGroup defaultValue={[String(sizes[0])]} spacing={8} className={styles.sizes}>
          {sizes.map((size) => (
            <ToggleGroupItem key={size} value={String(size)} className={styles.size}>
              {size}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </section>

      <section className={styles.section}>
        <Typography className={styles.sectionLabel}>Цвет, {colors.length}:</Typography>
        <ToggleGroup defaultValue={[colors[0]?.id]} spacing={8} className={styles.colors}>
          {visibleColors.map((color) => (
            <ToggleGroupItem key={color.id} value={color.id} className={styles.color}>
              <Image src={color.image} alt={color.id} fill sizes="64px" />
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        {colors.length > COLORS_PREVIEW && (
          <button
            type="button"
            className={styles.expand}
            onClick={() => setShowAllColors((prev) => !prev)}
          >
            {showAllColors ? "Свернуть" : `Все ${totalColors} цветов`}
            {showAllColors ? <ChevronUp /> : <ChevronDown />}
          </button>
        )}
      </section>

      <section className={styles.section}>
        <div className={styles.characteristicsHeader}>
          <Typography tag="h2" variant="text-2xl" className={styles.heading}>
            Характеристики
          </Typography>
          <Button variant="outline" size="sm">
            Описание
            <ChevronDown className={styles.descriptionIcon} />
          </Button>
        </div>

        <dl className={styles.characteristics}>
          {characteristics.map((item) => (
            <div key={item.label} className={styles.characteristic}>
              <dt className={styles.characteristicLabel}>{item.label}</dt>
              <dd className={styles.characteristicValue}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section}>
        <Typography tag="h2" variant="text-2xl" className={styles.heading}>
          Фото покупателей{" "}
          <span className={styles.photosCount}>{customerPhotosCount.toLocaleString("ru-RU")}</span>
        </Typography>

        <div className={styles.photos}>
          {customerPhotos.map((src, i) => (
            <div key={`${src}-${i}`} className={styles.photo}>
              <Image src={src} alt={`Фото покупателя ${i + 1}`} fill sizes="120px" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
