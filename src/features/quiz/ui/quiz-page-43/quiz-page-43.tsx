"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-43.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import salesAnimation from "../../../../../public/assets/quiz/sales.json";

export const QuizPage43 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=44");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>AI Sales Agent</QuizTitle>

        <div className={styles.imageContainer}>
          <Lottie
            animationData={salesAnimation}
            alt="AI Sales Agent"
            width={400}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.icon}>💰</span>
            <span className={styles.text}>
              <strong>Average selling price:</strong> $2,000 - $3,000
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.icon}>⏱</span>
            <span className={styles.text}>
              <strong>Setup time:</strong> ~3-4 hours
            </span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Automates lead generation</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Qualifies leads through email</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>Works with CRM systems</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.checkIcon}>✅</span>
            <span className={styles.text}>You review, they save time - and you get paid</span>
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
