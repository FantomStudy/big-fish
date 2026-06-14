import { ProductRecomentaions } from "@/components/ProductRecomendations";
import { Typography } from "@/components/ui";
import { ProgressBar } from "./_components/ProgressBar";
import styles from "./page.module.css";

const ProfilePage = () => {
  return (
    <main>
      <div>
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Прогресс
        </Typography>
        <ProgressBar />
      </div>

      <div>
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Заказы
        </Typography>
      </div>

      <div>
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Завершенные заказы
        </Typography>
      </div>

      <div>
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Недавно смотрели
        </Typography>
      </div>

      <div>
        <Typography variant="text-2xl" tag="h2" className={styles.title}>
          Подобрали для вас
        </Typography>
        <ProductRecomentaions />
      </div>
    </main>
  );
};

export default ProfilePage;
