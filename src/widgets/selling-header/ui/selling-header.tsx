"use client";

import React, { useState, useEffect } from "react";
import { Logo, Button } from "@/shared/ui";
import styles from "./selling-header.module.css";

export const SellingHeader: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handleGetPlan = () => {
    // Scroll to pricing section with offset for fixed header
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      const yOffset = -100; // offset for fixed header
      const y = pricingSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>

        <div className={styles.actions}>
          <div className={styles.timer}>
            <p className={styles.timerLabel}>61% discount reserved for:</p>
            <p className={styles.timerValue}>{formatTime(timeLeft)}</p>
          </div>

          <Button
            variant="primary"
            onClick={handleGetPlan}
            className={styles.ctaButton}
          >
            GET MY PLAN
          </Button>
        </div>
      </div>
    </header>
  );
};
