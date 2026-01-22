"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizDescription } from "@/features/quiz/shared";
import styles from "./quiz-page-31.module.css";
import { useQuizStore } from "@/shared/store";

export const QuizPage31 = () => {
  const router = useRouter();
  const { quizData } = useQuizStore();

  const handleContinue = () => {
    router.push("/quiz/questions?pageId=32");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          Skillescape - your all-in-one AI workspace
        </QuizTitle>

        <QuizDescription>
          Everything you need is already set up for you. No tech headaches - just open, use, and start creating
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="/assets/quiz/quiz39-1.png"
            alt="Skillescape AI toolbox"
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
