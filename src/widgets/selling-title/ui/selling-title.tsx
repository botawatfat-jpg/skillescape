"use client";

import React from "react";
import { useQuizStore } from "@/shared/store";
import styles from "./selling-title.module.css";

export const SellingTitle: React.FC = () => {
  const { quizData } = useQuizStore();
  const userName = quizData?.name || "John";

  return (
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>
        <span className={styles.name}>{userName}</span>
        <span>, get your </span>
        <span className={styles.highlight}>Personalized Plan</span>
        <span> to become AI-expert now!</span>
      </h1>
    </div>
  );
};
