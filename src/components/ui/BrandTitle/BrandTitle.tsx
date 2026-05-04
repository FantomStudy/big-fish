import Image from "next/image";
import styles from "./BrandTitle.module.css";

const News = () => {
  return (
    <Image
      className={styles.news}
      width={273}
      height={105}
      src="/news/news-text.svg"
      alt="Новости"
    />
  );
};

export const BrandTitle = {
  News,
};
