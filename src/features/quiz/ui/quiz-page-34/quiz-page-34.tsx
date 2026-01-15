"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { Button } from "@/shared/ui";
import { QuizTitle } from "@/features/quiz/shared";
import styles from "./quiz-page-34.module.css";
import { useQuizStore } from "@/shared/store";
import courseAnimation from "../../../../../public/assets/quiz/course.json";

export const QuizPage34 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=35");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          Here&apos;s the simple plan that finally makes AI easy to learn
        </QuizTitle>

        <div className={styles.lottieContainer}>
          <Lottie
            animationData={courseAnimation}
            loop={true}
            className={styles.lottie}
          />
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
