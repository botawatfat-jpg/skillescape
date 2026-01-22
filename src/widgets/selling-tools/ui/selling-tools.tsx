"use client";

import React from "react";
import Image from "next/image";
import styles from "./selling-tools.module.css";

export const SellingTools: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/quiz/ai_tools.png"
            alt="AI Tools"
            width={204}
            height={204}
            className={styles.image}
          />
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>
            Get access to 20+ AI Tools in one place
          </h2>
          <p className={styles.description}>
            Stop overpaying for each model, enjoy all state-of-the-art models in one place.
          </p>
        </div>
      </div>
    </section>
  );
};
