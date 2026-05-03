"use client";

import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { NewsCard } from "@/components/NewsCard";
import { Grid } from "@/components/ui/Grid";
import styles from "./page.module.css";

// MOCK DATA
const CARDS = [
  {
    type: "poster",
    imageUrl: "/mock/news-poster.png",
  },
  {
    type: "small",
    imageUrl: "/mock/news-small.png",
  },
  {
    type: "default",
    imageUrl: "/mock/news-default.png",
  },
  {
    type: "poster",
    imageUrl: "/mock/news-poster.png",
  },
  {
    type: "small",
    imageUrl: "/mock/news-small.png",
  },
  {
    type: "default",
    imageUrl: "/mock/news-default.png",
  },
] as const;

const NewsPage = () => {
  const router = useRouter();

  return (
    <div className={clsx("container", styles.newsPage)}>
      <Image
        className={styles.title}
        width={273}
        height={105}
        src="/news/news-text.svg"
        alt="Новости"
      />
      <Grid className={styles.grid}>
        {CARDS.map((el, i) => (
          <NewsCard
            onMoreClick={() => router.push(`/news/${i}`)}
            key={i}
            news={{
              type: el.type,
              imageUrl: el.imageUrl,
              title: "Новый маркетплейс для рыболовов: все для рыбалки в одном месте!",
              description: `В мире рыбалки появился новый онлайн-маркетплейс, который обещает стать настоящей находкой
            для любителей активного отдыха на воде. Теперь все необходимые товары для рыбалки — от
            удочек и катушек до приманок и аксессуаров — можно приобрести в одном месте, не тратя
            время на поиски в разных магазинах.`,
            }}
          />
        ))}
      </Grid>
    </div>
  );
};

export default NewsPage;
