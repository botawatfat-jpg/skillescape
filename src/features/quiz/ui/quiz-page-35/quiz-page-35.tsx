"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-35.module.css";
import { useQuizStore } from "@/shared/store";
import sceneAnimation from "../../../../../public/assets/quiz/scene.json";

export const QuizPage35 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=36");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          Your personal AI Learning Plan - simple and clear!
        </QuizTitle>

        <QuizDescription>
          No complicated theory. No overwhelm. Just small, guided steps you can
          follow!
        </QuizDescription>

        <div className={styles.lottieContainer}>
          <Lottie
            animationData={sceneAnimation}
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
