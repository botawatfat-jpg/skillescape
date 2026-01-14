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
    router.push("/quiz/questions?pageId=37");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>Ready to start your AI journey?</QuizTitle>

        <QuizDescription>
          Join thousands of students who are already building their AI skills
          and earning online with our proven system.
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/186/media/Aspect Ratio (1).webp"
            alt="Start your journey"
            width={576}
            height={432}
            className={styles.image}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button onClick={handleContinue} className={styles.button}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
