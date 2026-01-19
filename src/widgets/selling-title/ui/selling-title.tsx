"use client";

import React from "react";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-title.module.css";

export const SellingTitle: React.FC = () => {
  const { quizData } = useQuizStore();
  const name = quizData?.name || "John";

  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 className={styles.title}>
          <span className={styles.regular}>{name}, get your </span>
          <span className={styles.highlighted}>Personalized Plan</span>
          <span className={styles.regular}> to become AI-</span>
          <br />
          <span className={styles.regular}>expert now!</span>
        </h1>
      </div>
    </div>
  );
};
