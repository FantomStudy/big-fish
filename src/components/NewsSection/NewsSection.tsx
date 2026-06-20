import { getNews } from "@/constants/mock/news";
import { NewsCard } from "./NewsCard";
import { BrandTitle } from "../ui";
import styles from "./NewsSection.module.css";

interface NewsSectionProps {
  amount?: number;
}

export const NewsSection = ({ amount }: NewsSectionProps) => {
  const news = getNews(amount);

  return (
    <div>
      <BrandTitle.News />
      <div className={styles.grid}>
        {news.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
