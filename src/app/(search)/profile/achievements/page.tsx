import Image from "next/image";
import { Typography } from "@/components/ui/Typography";
import { ProgressBar } from "../_components/ProgressBar";
import { ACHIEVEMENTS } from "./constants";
import styles from "./page.module.css";

const AchievementsPage = () => {
  const recieved = ACHIEVEMENTS.filter((ach) => ach.progress === ach.total);

  return (
    <main className={styles.page}>
      <div>
        <Typography variant="heading-2" tag="h2">
          Прогресс
        </Typography>
        <ProgressBar />
      </div>

      <div>
        <Typography variant="heading-2" tag="h2">
          Достижения{" "}
          <sup>
            {recieved.length} из {ACHIEVEMENTS.length}
          </sup>
        </Typography>
        <div className={styles.grid}>
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.id}
              className={styles.card}
              data-active={achievement.progress === achievement.total}
            >
              <Image
                className={styles.cardIcon}
                src={achievement.icon}
                alt=""
                width={170}
                height={170}
              />
              <div className={styles.cardContent}>
                <p className={styles.cardTitle}>{achievement.title}</p>
                <p className={styles.cardDescription}>{achievement.description}</p>
              </div>

              <p className={styles.cardProgress}>
                ({achievement.progress}/{achievement.total})
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AchievementsPage;
