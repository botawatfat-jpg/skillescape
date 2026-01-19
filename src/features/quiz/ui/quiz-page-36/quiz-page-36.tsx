"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-36.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage36 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    if (quizData.aiTools?.includes("none")) {
      router.push("/quiz/questions?pageId=47");
    } else {
      router.push("/quiz/questions?pageId=37");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>Start your AI journey today</QuizTitle>

        <QuizDescription>
          Join thousands already learning AI and earning online with our proven system.
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/quiz/quiz28.png"
            alt="Start your journey"
            width={576}
            height={432}
            className={styles.image}
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
