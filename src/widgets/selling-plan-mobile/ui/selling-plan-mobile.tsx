"use client";

import React from "react";
import Image from "next/image";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-plan-mobile.module.css";

const STATUS_ICON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z' fill='%232563EB'/%3E%3C/svg%3E";
const GOAL_ICON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z' fill='%232563EB'/%3E%3Cpath d='M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' fill='white'/%3E%3C/svg%3E";
const CHEVRONS_ICON = "data:image/svg+xml,%3Csvg width='32' height='19' viewBox='0 0 32 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L27 9.14L20.5 16.78M11.5 1.5L5 9.14L11.5 16.78' stroke='%232563EB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

export const SellingPlanMobile: React.FC = () => {
  const { quizData } = useQuizStore();

  const currentStatus = quizData?.status || "9-5 office worker";
  const goal = quizData?.goal || "Start freelancing with AI tools";

  return (
    <div className={styles.planCard}>
      <div className={styles.labels}>
        <div className={styles.label}>Now</div>
        <div className={styles.label}>Your goal</div>
      </div>

      <div className={styles.comparison}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/quiz/selling_before.png"
            alt="Before - Office worker"
            width={170}
            height={170}
            className={styles.comparisonImage}
          />
        </div>

        <div className={styles.chevrons}>
          <img src={CHEVRONS_ICON} alt="" width={32} height={19} />
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/assets/quiz/selling_after.png"
            alt="After - Freelancer"
            width={170}
            height={170}
            className={styles.comparisonImage}
          />
        </div>
      </div>

      <div className={styles.details}>
        <div className={styles.detailColumn}>
          <div className={styles.detailSection}>
            <div className={styles.detailHeader}>
              <img src={STATUS_ICON} alt="" width={16} height={16} />
              <span className={styles.detailLabel}>Status</span>
            </div>
            <p className={styles.detailValue}>{currentStatus}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.detailSection}>
            <p className={styles.skillLabel}>Proficiency in AI tools</p>
            <p className={styles.skillLevel}>LOW</p>
            <div className={styles.progressBar}>
              <div className={`${styles.progressSegment} ${styles.active}`} />
              <div className={styles.progressSegment} />
              <div className={styles.progressSegment} />
            </div>
          </div>
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.detailColumn}>
          <div className={styles.detailSection}>
            <div className={styles.detailHeader}>
              <img src={GOAL_ICON} alt="" width={16} height={16} />
              <span className={styles.detailLabel}>Goal</span>
            </div>
            <p className={styles.detailValue}>{goal}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.detailSection}>
            <p className={styles.skillLabel}>Proficiency in AI tools</p>
            <p className={styles.skillLevel}>HIGH</p>
            <div className={styles.progressBar}>
              <div className={`${styles.progressSegment} ${styles.active}`} />
              <div className={`${styles.progressSegment} ${styles.active}`} />
              <div className={`${styles.progressSegment} ${styles.active}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
