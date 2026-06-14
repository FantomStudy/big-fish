import clsx from "clsx";
import Image from "next/image";
import { NewsSection } from "@/components/NewsSection";
import { SearchBar } from "@/components/SearchBar";
import { Typography, BrandTitle, Carousel } from "@/components/ui";
import styles from "./page.module.css";

const SLIDES = [
  {
    alt: "Что то ",
    src: "/mock/slider/rock-group.png",
  },
];

const MERCH_CARDS = [
  {
    image: { url: "/mock/merch/all-stages.png" },
    title: "Вне сцены",
    content: `Экипировка для тех, кто живет на частоте BIG FISH 24/7. От непробиваемых худи до
    винила с гипнотическим басом.`,
  },
  {
    image: { url: "/mock/merch/small-monsters.png" },
    title: "Маленькие монстры",
    content: `У каждого мелкого хищника — свой характер и боевой задор. Собери свою банду с малых 
    лет и готовься к большим уловам в будущем. `,
  },
  {
    image: { url: "/mock/merch/badges.png" },
    title: "Значки и нашивки",
    content: `Твои боевые награды за верность звуку и драйву. Металлические пины и неубиваемые 
    патчи, которые превратят любую куртку в косуху рок-звезды.`,
  },
  {
    image: { url: "/mock/merch/scene-masters.png" },
    title: "Мастера сцены",
    content: `Полная анатомия «фишпланетян» с продвинутыми шарнирами. Живая мимика, сменные девайсы 
    и возможность зафиксировать любой безумный прыжок. `,
  },
] as const;

const RockGroupPage = () => {
  return (
    <div className={styles.page}>
      <Carousel slides={SLIDES} />

      <div className="container">
        <SearchBar />
      </div>

      <div className={styles.content}>
        <div className="container">
          <NewsSection amount={3} />
        </div>

        <div className={styles.accented}>
          <div className={clsx("container", styles.accentedWrapper)}>
            <div className={styles.section}>
              <BrandTitle.Merch />
              <div className={styles.merchGrid}>
                {MERCH_CARDS.map((card, i) => (
                  <article key={i} className={styles.merchCard}>
                    <Image alt={card.title} src={card.image.url} width={450} height={300} />
                    <Typography variant="text-xl">{card.title}</Typography>
                    <Typography className={styles.merchContent}>{card.content}</Typography>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.section}>
              <BrandTitle.Tracks />
              <div className={styles.tracks}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <Image key={i} alt="Трек" src="/mock/track.png" width={385} height={385} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className={styles.backstageSection}>
            <Image src="/rock-group/backstage.png" alt="backstage" height={580} width={570} />

            <div className={styles.backstageText}>
              <Typography variant="text-2xl">BACKSTAGE: ЖИЗНЬ НА КРЮЧКЕ</Typography>
              <Typography>
                Каждый клип — это легенда, ожившая в мутной воде. Здесь мы показываем боевой стиль
                каждого участника банды BIG FISH в деле. Хочешь увидеть, как наш фронтмен выдает
                зубодробительную игру хвостом? Или как басист пробивает самое дно своим весом?
                Заходи за кулисы, изучай коронные приемы хищников с другой планеты и выбирай, чей
                ритм сегодня станет твоим.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockGroupPage;
