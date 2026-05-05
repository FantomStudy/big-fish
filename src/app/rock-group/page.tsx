import clsx from "clsx";
import Image from "next/image";
import { PostCard } from "@/components/post/PostCard";
import { PostGrid } from "@/components/post/PostGrid";
import { SearchBar } from "@/components/product/SearchBar";
import { Slider } from "@/components/Slider";
import { BrandTitle } from "@/components/ui/BrandTitle";
import { getPosts } from "@/mock/posts";
import styles from "./page.module.css";

const MERCH_CARDS = [
  {
    image: { url: "/merch/all-stages.png", width: 442, height: 329 },
    title: "Вне сцены",
    content: `Экипировка для тех, кто живет на частоте BIG FISH 24/7. От непробиваемых худи до
    винила с гипнотическим басом.`,
  },
  {
    image: { url: "/merch/small-monsters.png", width: 450, height: 320 },
    title: "Маленькие монстры",
    content: `У каждого мелкого хищника — свой характер и боевой задор. Собери свою банду с малых 
    лет и готовься к большим уловам в будущем. `,
  },
  {
    image: { url: "/merch/badges.png", width: 443, height: 328 },
    title: "Значки и нашивки",
    content: `Твои боевые награды за верность звуку и драйву. Металлические пины и неубиваемые 
    патчи, которые превратят любую куртку в косуху рок-звезды.`,
  },
  {
    image: { url: "/merch/scene-masters.png", width: 450, height: 268 },
    title: "Мастера сцены",
    content: `Полная анатомия «фишпланетян» с продвинутыми шарнирами. Живая мимика, сменные девайсы 
    и возможность зафиксировать любой безумный прыжок. `,
  },
] as const;

const RockGroupPage = () => {
  const posts = getPosts(3);

  return (
    <div className={styles.content}>
      <Slider />
      <div className={clsx("container stack", styles.newsSection)}>
        <SearchBar />
        <BrandTitle.News />
        <PostGrid>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostGrid>
      </div>
      <div className={styles.souvenirs}>
        <div className={clsx("container stack", styles.souvenirsContainer)}>
          <BrandTitle.OurMerch />
          <div className={styles.ourMerch}>
            {MERCH_CARDS.map((el, i) => (
              <article key={i} className={styles.ourMerchCard}>
                <Image
                  alt={el.title}
                  src={el.image.url}
                  width={el.image.width}
                  height={el.image.height}
                />
                <div className={styles.ourMerchCardContent}>
                  <h2>{el.title}</h2>
                  <p>{el.content}</p>
                </div>
              </article>
            ))}
          </div>
          <BrandTitle.OurTracks />
          <div className={styles.tracks}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Image key={i} alt="Трек" src="/merch/track.png" width={385} height={385} />
            ))}
          </div>
        </div>
      </div>
      <div className={clsx("container stack")}>
        <div className={styles.backStageSection}>
          <Image src="/rock-group/backstage.png" alt="backstage" height={580} width={570} />
          <div className={styles.backStageText}>
            <h1>BACKSTAGE: ЖИЗНЬ НА КРЮЧКЕ</h1>
            <p>
              Каждый клип — это легенда, ожившая в мутной воде. Здесь мы показываем боевой стиль
              каждого участника банды BIG FISH в деле. Хочешь увидеть, как наш фронтмен выдает
              зубодробительную игру хвостом? Или как басист пробивает самое дно своим весом? Заходи
              за кулисы, изучай коронные приемы хищников с другой планеты и выбирай, чей ритм
              сегодня станет твоим.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockGroupPage;
