"use client";

import React, { useState, useEffect } from "react";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-promo.module.css";

export const SellingPromo: React.FC = () => {
  const { quizData } = useQuizStore();
  const [timeLeft, setTimeLeft] = useState(595); // 9:55 in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  // Generate promo code from name and date
  const generatePromoCode = () => {
    const name = quizData?.name || "joh";
    const date = new Date();
    const month = date.toLocaleDateString("en-US", { month: "short" }).toLowerCase();
    const day = date.getDate();
    return `${name.toLowerCase().substring(0, 3)}_${month}_${day}`;
  };

  const promoCode = generatePromoCode();

  return (
    <div className={styles.wrapper}>
      <div className={styles.border}>
        <div className={styles.content}>
          <div className={styles.promoSection}>
            <div className={styles.badgeWebp} />
            <div className={styles.promoText}>Promocode applied</div>
          </div>

          <div className={styles.divider} />

          <div className={styles.bottomSection}>
            <div className={styles.promoCodeBox}>
              <div className={styles.checkWebp} />
              <div className={styles.promoCode}>{promoCode}</div>
            </div>

            <div className={styles.timerBox}>
              <div className={styles.timerContent}>
                <div className={styles.timeValue}>{formattedTime}</div>
              </div>
              <div className={styles.timeLabels}>
                <div className={styles.timeLabel}>min</div>
                <div className={styles.timeLabel}>sec</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.leftBadge} />
        <div className={styles.rightBadge} />
      </div>
    </div>
  );
};
