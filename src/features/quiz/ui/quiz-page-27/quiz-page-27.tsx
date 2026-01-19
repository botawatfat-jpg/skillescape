"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-27.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage27 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=28");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          What if you could turn your screen time into income?
        </QuizTitle>

        <QuizDescription>
          Setting up one chatbot takes as little as 2 hours, depending on the
          complexity - and can get you anywhere from $500 to $3500
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/quiz/quiz27.png"
            alt="Learning path"
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
