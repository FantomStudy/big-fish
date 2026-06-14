import { GiftIcon } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui";
import { STEPS } from "./constants";
import styles from "./ProgressBar.module.css";

const getProgress = () => {
  return {
    progress: 0.6,
    claimedRewardStepIds: ["caviar"],
  };
};

export const ProgressBar = () => {
  const { progress, claimedRewardStepIds } = getProgress();

  return (
    <div className={styles.progress}>
      <div className={styles.progressBar}>
        <div className={styles.progressStages}>
          {STEPS.map((step, index) => {
            const isCompleted = progress >= index;
            const connectorProgress = Number(Math.min(Math.max(progress - index, 0), 1).toFixed(2));

            return (
              <Fragment key={step.id}>
                <div className={styles.step} data-completed={isCompleted} data-stage={step.id}>
                  <div className={styles.stepImageWrapper}>
                    <Image src={step.image} alt={step.alt} fill className={styles.stepImage} />
                  </div>

                  {!claimedRewardStepIds.includes(step.id) && (
                    <Button
                      variant="secondary"
                      size="icon-sm"
                      disabled={!isCompleted}
                      aria-label={`Награда: ${step.alt}`}
                    >
                      <GiftIcon aria-hidden="true" />
                    </Button>
                  )}
                </div>

                {index < STEPS.length - 1 && (
                  <div className={styles.connector} aria-hidden="true">
                    {Array.from({ length: 5 }, (_, index) => index).map((dotIndex) => (
                      <div
                        key={dotIndex}
                        className={styles.connectorDot}
                        data-completed={connectorProgress >= (dotIndex + 1) / 5}
                      />
                    ))}
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>

        <Image
          src="/profile/progress/sign.svg"
          alt="Стань настоящим фишпланетянином!"
          width={199}
          height={105}
          className={styles.progressSign}
        />
      </div>

      <Image
        src="/profile/progress/mask.svg"
        alt=""
        height={172}
        width={126}
        className={styles.progressMask}
      />
    </div>
  );
};
