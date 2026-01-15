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
          Jobescape - your personal AI toolbox - simple, powerful,
          beginner-ready
        </QuizTitle>

        <QuizDescription>
          You won&apos;t need to figure out what to use. You&apos;ll get
          everything already set up in one place.
        </QuizDescription>

        <div className={styles.imageContainer}>
          <Image
            src="https://d2tpw6ibsnrlae.cloudfront.net/quiz_prod/v6.0.7/34/media/teaser-19-2.webp"
            alt="Jobescape AI toolbox"
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
