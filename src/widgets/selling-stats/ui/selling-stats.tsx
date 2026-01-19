"use client";

import React from "react";
import styles from "./selling-stats.module.css";

export const SellingStats: React.FC = () => {
  return (
    <div className={styles.border}>
      <div className={styles.content}>
        <div className={styles.avatars}>
          <div className={styles.peopleWebp} />
        </div>

        <div className={styles.textBlock}>
          <div className={styles.number}>122,584</div>
          <p className={styles.text}>freelancer started with us</p>
        </div>
      </div>
    </div>
  );
};
