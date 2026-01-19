"use client";

import React from "react";
import styles from "./selling-cta.module.css";

export const SellingCTA: React.FC = () => {
  const handleClick = () => {
    // TODO: Add payment redirect logic
    console.log("GET MY PLAN clicked");
  };

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        <div className={styles.background} />
        <span className={styles.buttonText}>GET MY PLAN</span>
      </button>

      <div className={styles.disclaimerWrapper}>
        <div className={styles.disclaimer}>
          <p className={styles.text}>
            By clicking "Get My Plan", I agree to pay $15.19 for a 4-week
            introductory plan. Unless I cancel before it ends, JobEscape will
            automatically charge $38.95 every 4-week. I can cancel
          </p>
          <p className={styles.textSmall}>
            anytime from the subscription page in my account to avoid future
            charges
          </p>
        </div>
      </div>
    </>
  );
};
