import Image from "next/image";
import { ProductRecomentaions } from "@/components/ProductRecomendations";
import { Typography } from "@/components/ui";
import styles from "./not-found.module.css";

const NotFoundPage = () => {
  return (
    <main className="container">
      <div className={styles.page}>
        <div className={styles.wrapper}>
          <Typography variant="text-2xl" className={styles.text}>
            Похоже, ничего не найдено
          </Typography>
          <Image
            src="/catalog/not-found.png"
            alt="Ничего не найдено"
            width={422}
            height={303}
            className={styles.image}
          />
        </div>

        <div className={styles.recommendations}>
          <Typography variant="text-2xl">Возможно вам понравится</Typography>
          <ProductRecomentaions />
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;