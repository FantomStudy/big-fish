import Image from "next/image";
import styles from "./BrandTitle.module.css";

export const News = () => {
  return (
    <Image
      className={styles.title}
      width={274}
      height={106}
      src="/common/brand-titles/news.svg"
      alt="Новости"
    />
  );
};

export const Collections = () => {
  return (
    <Image
      className={styles.title}
      width={299}
      height={92}
      src="/common/brand-titles/collections.svg"
      alt="Подборки"
    />
  );
};

export const Reviews = () => {
  return (
    <Image
      className={styles.title}
      width={239}
      height={75}
      src="/common/brand-titles/reviews.svg"
      alt="Отзывы"
    />
  );
};

export const Merch = () => {
  return (
    <Image
      className={styles.title}
      width={345}
      height={75}
      src="/common/brand-titles/merch.svg"
      alt="Наш мерч"
    />
  );
};

export const Tracks = () => {
  return (
    <Image
      className={styles.title}
      width={311}
      height={124}
      src="/common/brand-titles/tracks.svg"
      alt="Наши треки"
    />
  );
};
