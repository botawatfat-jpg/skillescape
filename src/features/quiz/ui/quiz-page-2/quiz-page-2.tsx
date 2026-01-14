"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";
import { QuizTitle, QuizSubtitle } from "@/features/quiz/shared";
import styles from "./quiz-page-2.module.css";
import Image from "next/image";
import { useQuizStore } from "@/shared/store";

export const QuizPage2 = () => {
  const router = useRouter();

  const { quizData } = useQuizStore();
  const handleContinue = () => {
    router.push("/quiz/questions?pageId=3");
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <QuizTitle>
          Over 63,000 {quizData.gender === "male" ? "men" : "female"}
        </QuizTitle>
        <QuizSubtitle withoutMargin>
          aged <span className={styles.highlight}>{quizData.age}</span> tried our
          AI-Expert plan to earn money online
        </QuizSubtitle>

        <div className={styles.mapContainer}>
          <Image
            src="/assets/quiz/page2.png"
            alt="Map"
            width={576}
            height={432}
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
