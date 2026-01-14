import React from "react";
import styles from "./progress-blockers.module.css";

interface ProgressBlocker {
  label: string;
  percentage: number;
}

interface ProgressBlockersProps {
  blockers: ProgressBlocker[];
}

export const ProgressBlockers: React.FC<ProgressBlockersProps> = ({
  blockers,
}) => {
  // Сортируем блокеры по проценту (от большего к меньшему)
  const sortedBlockers = [...blockers].sort(
    (a, b) => b.percentage - a.percentage
  );

  // Находим максимальный процент
  const maxPercentage = sortedBlockers[0]?.percentage;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>What&apos;s holding you back</h3>
      <div className={styles.blockers}>
        {sortedBlockers.map((blocker, index) => {
          const isPrimary = blocker.percentage === maxPercentage;

          return (
            <div key={index} className={styles.blockerItem}>
              <div
                className={
                  styles.blockerBar +
                  " " +
                  (isPrimary ? styles.barBlueAccent : styles.barBlueTransparent)
                }
                style={{ width: `${blocker.percentage + 50}%` }}
              />

              <div className={styles.blockerContent}>
                <span
                  className={
                    styles.blockerLabel +
                    " " +
                    (isPrimary ? styles.colorWhite : styles.colorAccentBlue)
                  }
                >
                  {blocker.label}
                </span>
                <span className={styles.percentage}>{blocker.percentage}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.description}>
        We&apos;ll use these insights to create an AI Expert Plan that works —
        just for you.
      </p>
    </div>
  );
};
