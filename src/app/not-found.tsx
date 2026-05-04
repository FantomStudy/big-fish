import { Typography } from "@/components/ui/Typography";
import styles from "./not-found.module.css";

const NotFoundPage = () => {
  return (
    <main className={styles.wrapper}>
      <img src="/not-found/code.svg" alt="404" className={styles.number} />

      <Typography variant="title-sm"> Упс... Похоже не клюёт...</Typography>

      <img src="/not-found/illustration.svg" alt="illustration" className={styles.illustration} />
    </main>
  );
};

export default NotFoundPage;
