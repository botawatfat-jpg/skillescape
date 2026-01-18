"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-42.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import marketingAnimation from "../../../../../public/assets/quiz/marketing.json";

export const QuizPage42 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=43");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>AI Marketing Agent – Automated Social Media Posting</QuizTitle>

        <div className={styles.lottieContainer}>
          <Lottie
            animationData={marketingAnimation}
            loop={true}
            className={styles.lottie}
          />
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>💰</span>
            <span className={styles.text}>
              <strong>Average selling price:</strong> $3,000 - $12,000
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>⏱</span>
            <span className={styles.text}>
              <strong>Setup time:</strong> ~5-7 hours
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Plans and schedules content, including</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Generates posts for social media</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Analyzes trends and engagement</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Businesses pay monthly for this</span>
          </div>
        </div>

        <div className="buttonContainerQuiz">
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
