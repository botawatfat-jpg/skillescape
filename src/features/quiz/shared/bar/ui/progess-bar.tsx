import { FC } from "react";
import { cn } from "@/shared/lib";
import styles from "./progress-bar.module.css";

interface ProgressBarProps {
  progress: number;
  barSeparation?: boolean;
}

export const ProgessBar: FC<ProgressBarProps> = ({
  progress = 0,
  barSeparation = false,
}) => {
  if (barSeparation) {
    // Calculate progress for each segment (33.33% each)
    const getSegmentProgress = (segmentIndex: number) => {
      const segmentStart = segmentIndex * 33.33;
      const segmentEnd = (segmentIndex + 1) * 33.33;
      
      if (progress <= segmentStart) return 0;
      if (progress >= segmentEnd) return 100;
      
      return ((progress - segmentStart) / 33.33) * 100;
    };

    return (
      <div className={styles.progressBarSeparated}>
        <div className={styles.segment}>
          <div
            className={styles.segmentFill}
            style={{ width: `${getSegmentProgress(0)}%` }}
          />
        </div>
        <div className={styles.segment}>
          <div
            className={styles.segmentFill}
            style={{ width: `${getSegmentProgress(1)}%` }}
          />
        </div>
        <div className={styles.segment}>
          <div
            className={styles.segmentFill}
            style={{ width: `${getSegmentProgress(2)}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarFill}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
