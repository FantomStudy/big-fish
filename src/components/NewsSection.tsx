import { getNews } from "@/mock/posts";
import { NewsCard } from "./NewsCard";
import { NewsGrid } from "./NewsGrid";
import { BrandTitle } from "./ui";

interface NewsSectionProps {
  amount?: number;
}

export const NewsSection = ({ amount }: NewsSectionProps) => {
  const news = getNews(amount);

  return (
    <div>
      <BrandTitle.News />

      <NewsGrid>
        {news.map((post) => (
          <NewsCard key={post.id} post={post} />
        ))}
      </NewsGrid>
    </div>
  );
};
