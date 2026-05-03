import clsx from "clsx";
import Image from "next/image";
import { Button } from "../ui/Button";
import styles from "./NewsCard.module.css";

interface NewsCardProps {
  news: {
    title?: string;
    description?: string;
    imageUrl: string;
    type: "poster" | "default" | "small";
  };
}

const variants = {
  poster: { descriptionClassName: styles.hide, contentClassName: styles.hide, imageHeight: 604 },
  default: { descriptionClassName: "", contentClassName: "", imageHeight: 296 },
  small: { descriptionClassName: styles.hide, contentClassName: "", imageHeight: 296 },
} as const;

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <aside className={styles.card}>
      <Image
        width={444}
        height={variants[news.type].imageHeight}
        alt={news.imageUrl}
        src={news.imageUrl}
      />
      <div className={clsx(styles.cardContent, variants[news.type].contentClassName)}>
        <h1>{news.title}</h1>
        <p className={variants[news.type].descriptionClassName}>{news.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.date}>22.03.2026</span>
        <Button variant="outline" className={styles.button}>
          Читать далее
        </Button>
      </div>
    </aside>
  );
};
