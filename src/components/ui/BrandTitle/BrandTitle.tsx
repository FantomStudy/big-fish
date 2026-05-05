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

const OurMerch = () => {
  return (
    <Image
      className={styles.news}
      width={345}
      height={75}
      src="/rock-group/our-merch.svg"
      alt="Наш мерч"
    />
  );
};

const OurTracks = () => {
  return (
    <Image
      className={styles.news}
      width={311}
      height={123}
      src="/rock-group/our-tracks.svg"
      alt="Наши треки"
    />
  );
};

export const BrandTitle = {
  News,
  OurMerch,
  OurTracks,
};
