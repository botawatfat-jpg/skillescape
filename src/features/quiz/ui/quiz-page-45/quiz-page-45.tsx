"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-45.module.css";
import { useQuizStore } from "@/shared/store";
import Lottie from "lottie-react";
import teaserAnimation from "../../../../../public/assets/quiz/teaser.json";

export const QuizPage45 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=37");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          83% of students got their first paying client within 30 days
        </QuizTitle>

        <div className={styles.lotteContainer}>
          <Lottie animationData={teaserAnimation} loop={true} className={styles.lottie} />

        </div>

        <p className={styles.description}>
          We&apos;ll teach you proven methods to get clients on{" "}
          <span className={styles.link}>Upwork</span>,{" "}
          <span className={styles.link}>Fiverr</span>. Even total beginners can
          do that.
        </p>

        <div className="buttonContainerQuiz">
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
