"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/shared/ui";
import styles from "./selling-header.module.css";

export const SellingHeader: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 9,
    seconds: 55,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.rightContent}>
          <div className={styles.discountInfo}>
            <p className={styles.discountText}>61% discount reserved for:</p>
            <p className={styles.timer}>
              {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </p>
          </div>

          <button className={styles.ctaButton}>
            GET MY PLAN
          </button>
        </div>
      </div>
    </header>
  );
};
